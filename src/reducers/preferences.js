import {
    GRID,
    LIST
} from '../actions/actionTypes';

const initialState = {
    searchViewType: 'LIST'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GRID:
            return {
                ...state,
                searchViewType: 'GRID'
            };

        case LIST:
            return {
                ...state,
                searchViewType: 'LIST'
            };

        default:
            return state;
    };
};
