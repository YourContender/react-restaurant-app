export const getFullListMenu = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://635594e2483f5d2df3b72711.mockapi.io/menu');
            const data = await response.json();

            dispatch({
                type: 'GET',
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
            const response = await fetch('https://635594e2483f5d2df3b72711.mockapi.io/basket');
            const data = await response.json();

            return dispatch({
                type: 'GET_BASKET',
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
        const res = await fetch('https://635594e2483f5d2df3b72711.mockapi.io/basket', {
            method: 'POST',
            body: JSON.stringify({...data}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });   

        dispatch({
            type: 'POST_BASKET',
            payload: data
        })
    }
}

export const removeProductFromBasket = (basket, id) => {
    return async dispatch => {
        let filtered = basket.filter(item => item.id !== id);

        const res = await fetch(`https://635594e2483f5d2df3b72711.mockapi.io/basket/${id}`, {
            method: 'DELETE'
        });

        if (res.status === 200) {
            dispatch({
                type: 'DELETE',
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

        const res = await fetch(`https://635594e2483f5d2df3b72711.mockapi.io/basket/${elem.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        if (res.status === 200) {
            dispatch({
                type: 'CHANGE_ORDER',
                payload: filtered
            });
        }
    }
}
