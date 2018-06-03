import React from 'react';
import './List.css';
import ListItem from './ListItem';
import FlipMove from 'react-flip-move';

const List = ({ list, onClick = () => { }, listClassName, itemClassName }) => (
    <div className={`list ${listClassName}`}>
        <FlipMove>
            {
                list.map((listItem) => {
                    return <ListItem
                        listItem={listItem}
                        key={listItem.key}
                        className={itemClassName}
                        onClick={onClick}
                    />
                })
            }
        </FlipMove>
    </div>
);

export default List;
