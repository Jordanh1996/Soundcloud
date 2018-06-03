import React from 'react';
import { connect } from 'react-redux';
import 'react-activity/lib/Spinner/Spinner.css';
import Container from '../shared/Container';
import SearchBox from './searchBox/SearchBox';
import SearchList from './searchList/SearchList';
import SearchTools from './searchTools/searchTools';
import './SearchTracks.css'
import { startSetSearches, startMoreSearches, typeSearches } from '../../actions/search';
import { grid, list } from '../../actions/preferences';


const SearchTracks = (props) => {
    const { searchState, view } = props;
    const { typeSearches, startSetSearches, startMoreSearches, grid, list, onSearchClick } = props;
    return (
        <Container className='searchTracksContainer'>
            <SearchBox
                searchText={searchState.text}
                startSetSearches={startSetSearches}
                typeSearches={typeSearches}
            />
            <SearchList
                status={searchState.status}
                searches={searchState.searches}
                onSearchClick={onSearchClick}
                view={view}
            />
            <SearchTools
                startMoreSearches={startMoreSearches}
                grid={grid}
                list={list}
            />
        </Container>
    );
};

const mapStateToProps = (state) => ({
    searchState: state.search,
    view: state.preferences.searchViewType
});

const mapDispatchToProps = (dispatch) => ({
    typeSearches: (text) => dispatch(typeSearches(text)),
    startSetSearches: () => dispatch(startSetSearches()),
    startMoreSearches: () => dispatch(startMoreSearches()),
    grid: () => dispatch(grid()),
    list: () => dispatch(list())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchTracks);
