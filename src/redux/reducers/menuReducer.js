import { GET_MENU_LIST } from "../types/types";

const initialState = {
    menu: []
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU_LIST:
            return {
                ...state, 
                menu: action.payload
            }

        default:
            return state
    }
}

export default menuReducer;