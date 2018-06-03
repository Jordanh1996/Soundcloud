import {
    SET_SEARCHES,
    FETCH_SEARCHES,
    TYPE_SEARCHES,
    SET_TRACK,
} from './actionTypes';
import { addHistory } from './history';
import { searchTracks } from '../requests/soundcloud';

export const setSearches = (searches) => ({
    type: SET_SEARCHES,
    searches
});

export const fetchSearches = () => ({
    type: FETCH_SEARCHES
});

export const typeSearches = (text) => ({
    type: TYPE_SEARCHES,
    text
});

export const setTrack = (trackUrl) => ({
    type: SET_TRACK,
    trackUrl
});

export const startSetSearches = () => {
    return (dispatch, getState) => {
        const text = getState().search.text;
        dispatch(addHistory(text));
        dispatch(fetchSearches());
        searchTracks(text).then((res) => {
            const searches = handleSearchesResults(res);
            dispatch(setSearches(searches));
        });
    };
};

export const startMoreSearches = () => {
    return (dispatch, getState) => {
        dispatch(fetchSearches());
        const { text, offset } = getState().search;
        searchTracks(text, offset).then((res) => {
            const searches = handleSearchesResults(res);
            dispatch(setSearches(searches));
        });
    };
};

export const startHistorySearch = (text) => {
    return (dispatch) => {
        dispatch(fetchSearches());
        dispatch(addHistory(text));
        dispatch(typeSearches(text));
        searchTracks(text).then((res) => {
            const searches = handleSearchesResults(res);
            dispatch(setSearches(searches));
        })
    };
};

// utils

const handleSearchesResults = (res) => {
    return res.data.map(({ title, artwork_url, permalink_url, user }) => {
        return {
            title: title,
            image: artwork_url,
            url: permalink_url,
            author: user.username
        };
    });
};
