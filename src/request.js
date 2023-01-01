export class Request {
    API_menu = 'https://635594e2483f5d2df3b72711.mockapi.io/menu';
    API_basket = 'https://635594e2483f5d2df3b72711.mockapi.io/basket'

    getFullListMenu = async () => {
        const response = await fetch(this.API_menu);
        return await response.json();
    };
    
    getCurrentItemFromList = async (id) => {
        const response = await fetch(`${this.API_menu}/${id}`);
        return await response.json();
    };

    addCurrentProduct = async (elem) => { 
        console.log('element', elem);
        const res = await fetch(`${this.API_basket}`, {
            method: 'POST',
            body: JSON.stringify({
                photo: elem.photo,
                title: elem.title,
                descr: elem.descr,
                price: elem.price,
                id: elem.id,
                category: elem.category,
                quantity: elem.quantity
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });    
    }
}