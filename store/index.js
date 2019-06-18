import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import { isServer } from '../lib/with-redux-store'
import { configs } from '../refs';

export function initializeStore(initialState = {}) {
    const store = createStore(reducers, initialState,
        configs.isDev
            ? composeWithDevTools(applyMiddleware(thunkMiddleware))
            : applyMiddleware(thunkMiddleware)
    );
    if (!isServer) window.store = store;
    return store;
}

