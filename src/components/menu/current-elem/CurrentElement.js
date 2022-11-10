import CurrentElementView from "./CurrentElementView";

const CurrentElement = ({ currentItem }) => {
    const addCurrentProduct = async (elem) => { 
        console.log('elem: ', elem);
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
            {
                currentItem.map(item => {
                    return (
                        <CurrentElementView 
                            key={item.id} 
                            item={item} 
                            currentItem={currentItem}
                            addCurrentProduct={addCurrentProduct}
                        />
                    )
                })
            }
        </>
    )
}

export default CurrentElement;