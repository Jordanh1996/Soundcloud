import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import SearchesReducer from '../reducers/search';
import historyReducer from '../reducers/history';
import preferencesReducer from '../reducers/preferences';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const historyPersistConfig = {
    key: 'history',
    storage: localStorage
};

const preferencesPersistConfig = {
    key: 'preferences',
    storage: localStorage
};

export default () => {
    const store = createStore(
        combineReducers({
            search: SearchesReducer,
            history: persistReducer(historyPersistConfig, historyReducer),
            preferences: persistReducer(preferencesPersistConfig, preferencesReducer)
        }),
        composeEnchancers(applyMiddleware(thunk))
    );
    return store;
};
