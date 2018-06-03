import {
    SET_SEARCHES,
    FETCH_SEARCHES,
    TYPE_SEARCHES,
    SET_TRACK
} from '../actions/actionTypes';

const initialState = {
    status: null,
    searches: [],
    text: '',
    offset: 0,
    selectedTrack: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCHES:
            return {
                ...state,
                status: 'FETCHED',
                offset: state.offset + 1,
                searches: action.searches
            };

        case FETCH_SEARCHES:
            return {
                ...state,
                status: 'PENDING'
            };

        case TYPE_SEARCHES:
            return {
                ...state,
                text: action.text
            };

        case SET_TRACK:
            return {
                ...state,
                selectedTrack: action.trackUrl
            };

        default:
            return state;
    };
};
