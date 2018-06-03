import React from 'react';
import './GridItem.css';

const GridItem = ({ image, title, onClick, style }) => (
    <div className='gridItemContainer' onClick={onClick} style={style}>
        <img className='gridItemImage' src={image || 'noImageAvailable.png'} alt='' />
        <p className='gridItemTitle'>
            {title}
        </p>
    </div>
);

export default GridItem;
