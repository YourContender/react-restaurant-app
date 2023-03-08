import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import basketReducer from '../reducers/basketReducer';
// import menuReducer from '../reducers/menuReducer';
import { rootReducer } from '../reducers/rootReducer';

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;