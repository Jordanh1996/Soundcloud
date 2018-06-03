import React from 'react';
import { connect } from 'react-redux';
import Container from '../shared/Container';
import List from '../shared/List';
import './SearchHistory.css';
import { startHistorySearch } from '../../actions/search';

class SearchHistory extends React.Component {

    onItemClick = (item) => {
        this.props.startHistorySearch(item.title);
    };

    render() {
        return (
            <Container className='searchHistoryContainer'>
                <h1 className='searchHistoryTitle'>History</h1>
                <List
                    list={this.props.searchesHistory.map((historyItem) => {
                        return { title: historyItem, key: historyItem }
                    })}
                    onClick={this.onItemClick}
                />
            </Container>
        );
    };
};

const mapStateToProps = (state) => ({
    searchesHistory: state.history.searches
});

const mapDispatchToProps = (dispatch) => ({
    startHistorySearch: (title) => dispatch(startHistorySearch(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);
