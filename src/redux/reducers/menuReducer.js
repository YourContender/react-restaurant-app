import { FILTER_MENU, GET_MENU_LIST } from "../types/types";

const initialState = {
    menu: [],
    activeFilter: 'all'
};

const menuReducer = (state = initialState, action) => {
    console.log('menu reducer >>>>', action)
    switch (action.type) {
        case GET_MENU_LIST:
            return {
                ...state, 
                menu: action.payload
            }
        case FILTER_MENU:
            return {
                ...state,
                activeFilter: action.payload
            }

        default:
            return state
    }
}

export default menuReducer;