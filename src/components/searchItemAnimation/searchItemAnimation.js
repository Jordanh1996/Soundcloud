import React from 'react';
import ListItem from '../shared/ListItem';
import GridItem from '../shared/GridItem';

class SearchItemAnimation extends React.Component {

    state = {
        height: 0,
        width: 0
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.selected) {
            return;
        }
        const playerLocation = nextProps.playerLocation.getBoundingClientRect();
        const searchItemLocation = nextProps.searchItemLocation.getBoundingClientRect();
        const startX = nextProps.view === 'LIST' ? searchItemLocation.left - 12.8 : searchItemLocation.left - 6;
        const startY = nextProps.view === 'LIST' ? searchItemLocation.top - 12.8 : searchItemLocation.top - 6;
        const endX = playerLocation.left + (playerLocation.width / 2) - (searchItemLocation.width / 2);
        const endY = playerLocation.top + (playerLocation.height / 2) - (searchItemLocation.height / 2);
        let keyframes = `
            @keyframes ${nextProps.selected.url.replace(/[^\w\s]/gi, '')} {
                0% {transform: translate(
                    ${startX}px,
                    ${startY}px
                );}
                75% {transform: translate(
                    ${endX}px,
                    ${endY}px
                );
                    opacity: 1;
                }
                100% {transform: translate(
                    ${endX}px,
                    ${endY}px
                );
                    opacity: 0;
                }
            }
        `;
        let styleSheet = document.styleSheets[document.styleSheets.length - 1];
        styleSheet.insertRule(keyframes, styleSheet.rules.length);
        this.setState({
            height: this.props.view === 'LIST' ? searchItemLocation.height - 25.6 : searchItemLocation.height,
            width: this.props.view === 'LIST' ? searchItemLocation.width - 25.6 : searchItemLocation.width
        });
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.selected && this.props.selected.url === nextProps.selected.url) {
            return false;
        }
        return true;
    };

    render() {
        const searchItemStyle = {
            animationName: this.props.selected ? this.props.selected.url.replace(/[^\w\s]/gi, '') : '',
            animationTimingFunction: 'ease-in-out',
            animationDuration: '1s',
            animationDelay: '0.0s',
            animationIterationCount: 1,
            animationDirection: 'normal',
            animationFillMode: 'forwards',
            position: 'absolute',
            opacity: 1,
            width: this.state.width,
            height: this.state.height
        };

        if (this.props.selected) {
            switch (this.props.view) {
                case 'LIST':
                    return <ListItem
                        listItem={this.props.selected}
                        style={searchItemStyle}
                    />

                case 'GRID':
                    return <GridItem
                        image={this.props.selected.image || 'noImageAvailable.png'}
                        title={this.props.selected.title}
                        style={searchItemStyle}
                    />

                default:
            }
        }
        return <div />
    };
};

export default SearchItemAnimation;
