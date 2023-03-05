const initialState = {
    basket: []
};

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BASKET':
            return {
                ...state, 
                basket: action.payload
            }
        case 'DELETE':
            return {
                ...state,
                basket: action.payload
            }
        case 'CHANGE_ORDER':
            return {
                ...state,
                basket: action.payload
            }
        case 'POST_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }

        default:
            return state
    }
}

export default basketReducer;