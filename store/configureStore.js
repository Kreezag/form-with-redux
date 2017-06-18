import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';


export const configureStore = (initialState) => {
    const store = createStore(rootReducer, initialState);

    return store;
};