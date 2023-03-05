export const getFullListMenu = (list) => {
    return { 
        type: 'GET', 
        payload: list
    }
};

export const getBasketList = (list) => {
    return {
        type: 'GET_BASKET',
        payload: list
    }
}

export const postBasketProduct = (list) => {
    return {
        type: 'POST_BASKET',
        payload: list
    }
}

export const removeProductFromBasket = (list) => {
    return {
        type: 'DELETE',
        payload: list
    }
}

export const changeQuantityOrder = (list) => {
    return {
        type: 'CHANGE_ORDER',
        payload: list
    }
}