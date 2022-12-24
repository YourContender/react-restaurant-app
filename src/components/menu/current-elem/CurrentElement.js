import CurrentElementView from "./CurrentElementView";

const CurrentElement = ({ currentItem }) => {
    const item = currentItem[0];

    const addCurrentProduct = async (elem) => { 
        const res = await fetch('https://635594e2483f5d2df3b72711.mockapi.io/basket', {
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

    return (
        <>
            <CurrentElementView  
                item={item} 
                addCurrentProduct={addCurrentProduct}
            />
        </>
    )
}

export default CurrentElement;