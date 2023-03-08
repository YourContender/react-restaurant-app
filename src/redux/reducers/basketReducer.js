import { 
    CHANGE_ORDER, 
    DELETE_PRODUCT, 
    GET_BASKET, 
    POST_PRODUCT 
} from "../types/types";

const initialState = {
    basket: []
};

const basketReducer = (state = initialState, action) => {
    console.log('basket reducer >>>>', action)
    switch (action.type) {
        case GET_BASKET:
            return {
                ...state, 
                basket: action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                basket: action.payload
            }
        case CHANGE_ORDER:
            return {
                ...state,
                basket: action.payload
            }
        case POST_PRODUCT:
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }

        default:
            return state
    }
}

export default basketReducer;