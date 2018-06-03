import React from 'react';
import './searchTools.css';

const SearchTools = ({ startMoreSearches, grid, list }) => (
    <div className='searchTools'>
        <div className='searchTools-spaceBetween'>
            <img
                src='arrow.png'
                alt='More Results'
                className='searchToolsArrow'
                onClick={startMoreSearches}
            />
            <div className='searchToolsDisplaySection'>
                <img
                    src='list.png'
                    alt='List'
                    className='searchToolsList'
                    onClick={list}
                />
                <img
                    src='grid.jpg'
                    alt='Grid'
                    className='searchToolsGrid'
                    onClick={grid}
                />
            </div>
        </div>
    </div>
);

export default SearchTools