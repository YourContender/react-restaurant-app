import { 
    CHANGE_ORDER, 
    DELETE_PRODUCT, 
    GET_BASKET, 
    GET_MENU_LIST, 
    POST_PRODUCT 
} from "../types/types";

const URL_MENU = 'https://635594e2483f5d2df3b72711.mockapi.io/menu';
const URL_BASKET = 'https://635594e2483f5d2df3b72711.mockapi.io/basket';

export const getFullListMenu = () => {
    return async dispatch => {
        try {
            const response = await fetch(URL_MENU);
            const data = await response.json();

            dispatch({
                type: GET_MENU_LIST,
                payload: data
            })
        } catch {
            console.log('error')
        }
    }
};

export const getBasketList = () => {
    return async dispatch => {
        try {
            const response = await fetch(URL_BASKET);
            const data = await response.json();

            return dispatch({
                type: GET_BASKET,
                payload: data
            });
        } catch {
            console.log('error');
        }
    }
}

export const postBasketProduct = (elem) => {
    return async dispatch => {
        const data = {
            photo: elem.photo,
            title: elem.title,
            descr: elem.descr,
            price: elem.price,
            id: elem.id,
            category: elem.category,
            quantity: elem.quantity
        }
        const res = await fetch(URL_BASKET, {
            method: 'POST',
            body: JSON.stringify({...data}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });   

        dispatch({
            type: POST_PRODUCT,
            payload: data
        })
    }
}

export const removeProductFromBasket = (basket, id) => {
    return async dispatch => {
        let filtered = basket.filter(item => item.id !== id);

        const res = await fetch(`${URL_BASKET}/${id}`, {
            method: 'DELETE'
        });

        if (res.status === 200) {
            dispatch({
                type: DELETE_PRODUCT,
                payload: filtered
            })
        }
    }
}

export const changeQuantityOrder = (basket, elem, action) => {
    return async dispatch => {
        let filtered = basket.map(item => {
            if (item.id === elem.id) {
                return {
                    photo: item.photo,
                    title: item.title,
                    descr: item.descr,
                    price: item.price,
                    id: item.id,
                    category: item.category,
                    quantity: action ? +item.quantity + 1 : item.quantity - 1
                }
            }
            return item;
        })

        let data = {
            photo: elem.photo,
            title: elem.title,
            descr: elem.descr,
            price: elem.price,
            id: elem.id,
            category: elem.category,
            quantity: action ? +elem.quantity + 1 : elem.quantity - 1
        }

        const res = await fetch(`${URL_BASKET}/${elem.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        if (res.status === 200) {
            dispatch({
                type: CHANGE_ORDER,
                payload: filtered
            });
        }
    }
}