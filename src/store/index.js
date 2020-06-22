import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';

const sagaMiddleware = createSagaMiddleware();

const createAppStore = () => {

    const Store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );
    return Store;
}

export default createAppStore;
