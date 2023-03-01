const initialState = {
    menu: [],
    basket: []
};

const reducer = (state = initialState, action) => {
    console.log('reducer >>>>', action)
    switch (action.type) {
        case 'GET':
            return {
                ...state, 
                menu: action.payload
            }
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

        default:
            return state
    }
}

export default reducer;