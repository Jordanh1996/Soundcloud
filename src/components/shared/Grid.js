// import React from 'react';
// import './Grid.css';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';

// const styles = theme => ({
//     title: {
//         textOverflow: 'string',
//         whiteSpace: 'normal',
//         fontSize: '11px',
//         lineHeight: '115%',
//         textAlign: 'center'
//     },
//     titleWrap: {
//         marginLeft: '3px',
//         marginRight: '3px'
//     },
//     imgFullHeight: { // This styling is to fix a bug with material-ui images
//         height: '100%',
//         width: '100%',
//         position: 'relative',
//         transform: 'translateX(0%)',
//         left: 0,
//         top: 0
//     },
//     imgFullWidth: {
//         height: '100%',
//         width: '100%',
//         position: 'relative',
//         transform: 'translateX(0%)',
//         left: 0,
//         top: 0
//     }
// });

// const Grid = ({ list, onItemClick = () => { }, containerClassName, listClassName, classes }) => (
//     <div className={`grid ${containerClassName}`}>
//         <GridList cellHeight={180} className={listClassName}>
//             <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
//             </GridListTile>
//             {list.map(listItem => (
//                 <GridListTile
//                     key={listItem.url}
//                     onClick={onItemClick.bind(this, listItem)}
//                     classes={{ imgFullHeight: classes.imgFullHeight, imgFullWidth: classes.imgFullWidth }}
//                 >
//                     <img src={listItem.image || 'noImageAvailable.png'} alt='' />
//                     <GridListTileBar
//                         title={listItem.title}
//                         classes={{ title: classes.title, titleWrap: classes.titleWrap }}
//                     />
//                 </GridListTile>
//             ))}
//         </GridList>
//     </div>
// );

// Grid.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Grid);

import React from 'react';
import './Grid.css';
import GridItem from './GridItem';

const Grid = ({ list = [], onItemClick = () => { }, className = '' }) => (
    <div className={`grid ${className}`}>
        {
            list.map((item) => <GridItem
                key={item.url}
                image={item.image}
                title={item.title}
                onClick={onItemClick.bind(this, item)}
            />)
        }
    </div>
);

export default Grid;
