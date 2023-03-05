import { createStore, combineReducers } from 'redux';
import basketReducer from '../reducers/basketReducer';
import menuReducer from '../reducers/menuReducer';

const store = createStore(combineReducers({
    menu: menuReducer, 
    basket: basketReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;