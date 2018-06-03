import React from 'react';
import './ListItem.css'

// const ListItem = ({ listItem, onClick = () => { }, className, style }) => (
//     <div
//         className={`listItem ${className}`}
//         style={style}
//         onClick={onClick.bind(this, listItem)}
//     >
//         {listItem.title}
//     </div>
// );

/*
    *important*: The reason that this components is a class is because react-flip-move library which is
    responsible for the list animations only supports Class Components because it needs to apply refs to 
    them and stateless functional components cannot be given refs.
*/

class ListItem extends React.Component {

    render() {
        return (
            <div
                className={`listItem ${this.props.className}`}
                style={this.props.style}
                onClick={this.props.onClick.bind(this, this.props.listItem)}
            >
                {this.props.listItem.title}
            </div>
        );
    };
};

ListItem.defaultProps = {
    onClick: () => { }
};

export default ListItem;
