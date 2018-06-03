import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import './App.css';
import SearchTracks from '../components/searchTracks/SearchTracks';
import TrackPlayer from '../components/trackPlayer/TrackPlayer';
import SearchHistory from '../components/searchHistory/SearchHistory';
import { setTrack } from '../actions/search';
import ListItem from '../components/shared/ListItem';
import GridItem from '../components/shared/GridItem';

import SearchItemAnimation from '../components/searchItemAnimation/searchItemAnimation';

class App extends React.Component {

    state = {
        selected: null,
        playerLocation: null,
        searchItemLocation: null
    }

    onSearchClick = (item, e) => {
        if (item.url === this.props.trackUrl) {
            return
        }
        this.props.setTrack(item.url);
        const playerDom = ReactDOM.findDOMNode(this.refs.player);
        this.setState({
            selected: item,
            playerLocation: playerDom,
            searchItemLocation: e.currentTarget
        });
        console.log(e)
    };

    render() {
        return (
            <div className='appContainer'>
                <SearchTracks
                    onSearchClick={this.onSearchClick}
                />
                <TrackPlayer
                    getPosition={this.getPosition}
                    ref='player'
                />
                <SearchHistory />
                <SearchItemAnimation
                    playerLocation={this.state.playerLocation}
                    searchItemLocation={this.state.searchItemLocation}
                    selected={this.state.selected}
                    view={this.props.view}
                />
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    trackUrl: state.search.selectedTrack,
    view: state.preferences.searchViewType
});

const mapDispatchToProps = (dispatch) => ({
    setTrack: (trackUrl) => dispatch(setTrack(trackUrl))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
