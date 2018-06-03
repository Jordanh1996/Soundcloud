import React from 'react';
import './SearchBox.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SearchBox extends React.Component {

    onChangeSearch = (e) => {
        const search = e.target.value;
        this.props.typeSearches(search);
    };

    render() {
        return (
            <div className='searchBox'>
                <TextField
                    label="Search"
                    value={this.props.searchText}
                    onChange={this.onChangeSearch}
                    className="asd"
                />
                <Button
                    variant='raised'
                    color='primary'
                    onClick={this.props.startSetSearches}
                    disabled={this.props.searchText === ''}
                >
                    Go
                </Button>
            </div>
        );
    };
};

export default SearchBox;
