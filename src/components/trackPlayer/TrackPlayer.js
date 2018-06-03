import React from 'react';
import { connect } from 'react-redux';
import './TrackPlayer.css';
import Player from './player/Player';
import Container from '../shared/Container';

const TrackPlayer = ({ playerState, togglePlay, trackUrl }) => (
    <Container style={{ flex: 2 }}>
        {
            trackUrl ?
                <Player
                    trackUrl={trackUrl}
                /> :
                <div className='trackPlayerNoUrl'>
                    <p className='trackPlayerNoUrlText'>no track<br />selected</p>
                </div>
        }
    </Container>
);

const mapStateToProps = (state) => ({
    trackUrl: state.search.selectedTrack
});

export default connect(mapStateToProps)(TrackPlayer);
