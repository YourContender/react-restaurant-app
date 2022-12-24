export class Request {
    API = 'https://635594e2483f5d2df3b72711.mockapi.io/menu';

    getFullListMenu = async () => {
        const response = await fetch(this.API);
        return await response.json();
    };
    
    getCurrentItemFromList = async (id) => {
        let url = id === 0 ? `${this.API}` : `${this.API}/${id}`;
        const response = await fetch(`${url}`);
        return await response.json();
    };
}