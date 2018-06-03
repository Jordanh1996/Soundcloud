import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { soundCloudTheme } from './muiTheme/muiTheme';

const store = configureStore();

export const persistor = persistStore(store);

const app = (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <MuiThemeProvider theme={soundCloudTheme}>
                <App />
            </MuiThemeProvider>
        </PersistGate>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

registerServiceWorker();
