import React from 'react';
import './SearchList.css';
import { Spinner } from 'react-activity';
import List from '../../shared/List';
import Grid from '../../shared/Grid';


class SearchList extends React.Component {

    activityIndicator = () => (
        <Spinner
            color='#F07E31'
            size={32}
            speed={0.8}
            animating={true}
            className='SearchesActivityIndicator'
        />
    );

    listDisplay = () => (
        <List
            list={this.props.searches.map((listItem) => {
                return {
                    title: listItem.title,
                    url: listItem.url,
                    key: listItem.url
                }
            })}
            onClick={this.props.onSearchClick}
        />
    );

    gridDisplay = () => (
        <Grid
            list={this.props.searches.map((listItem) => {
                return {
                    title: listItem.title,
                    image: listItem.image,
                    url: listItem.url,
                    author: listItem.author
                }
            })}
            className='searchList'
            onItemClick={this.props.onSearchClick}
        />
    );

    render() {
        switch (this.props.status) {
            case 'PENDING':
                return this.activityIndicator();

            case 'FETCHED':
                if (this.props.searches.length === 0) {
                    return <p className='searchListNoResults'>There are no results for this search</p>;
                }
                break;

            default:
        }
        switch (this.props.view) {
            case 'LIST':
                return this.listDisplay();

            case 'GRID':
                return this.gridDisplay();

            default:
                return this.listDisplay();
        }
    };
};

export default SearchList;
