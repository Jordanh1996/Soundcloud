import React from 'react';
import './Player.css';
import ReactPlayer from 'react-player';


const Player = ({ trackUrl }) => (
    <div className='reactPlayer' key={trackUrl}>
        <ReactPlayer
            url={trackUrl}
            width='100%'
            height='100%'
            key={trackUrl}
        />
    </div>
);

export default Player;
