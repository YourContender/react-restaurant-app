const initialState = {
    menu: []
};

const reducer = (state = initialState, action) => {
    console.log('reducer >>>>', action)
    switch (action.type) {
        case 'GET':
            return {
                ...state, 
                menu: action.payload
            }
        
        default:
            return state
    }
}

export default reducer;