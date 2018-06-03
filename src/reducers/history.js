import { ADD_HISTORY } from '../actions/actionTypes';

const initialState = {
    searches: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_HISTORY:
            if (state.searches.indexOf(action.history) > -1) { // case where item excists in history
                return {
                    ...state,
                    searches: [
                        action.history,
                        ...state.searches.filter((historyItem) => historyItem !== action.history)
                    ]
                }
            }

            if (state.searches.length > 4) { // case where there is alredy 5 items
                return {
                    ...state,
                    searches: [
                        action.history,
                        ...state.searches.splice(0, 4)
                    ]
                }
            }
            return { // default
                ...state,
                searches: [
                    action.history,
                    ...state.searches
                ]
            }

        default:
            return state;
    };
};
