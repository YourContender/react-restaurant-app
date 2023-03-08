import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import basketReducer from "./basketReducer";

export const rootReducer = combineReducers({
    menu: menuReducer,
    basket: basketReducer
});