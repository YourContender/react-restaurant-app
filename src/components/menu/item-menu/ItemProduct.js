import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ItemProductDescr from "./description-product/ItemProductDescr";

const ItemProduct = ({ item }) => {
    const { id, photo, title, descr, price, compound } = item;
    const [handleClick, setHandleClick] = useState(false);

    const nameClass = !handleClick ? 'menu_item_100' : 'menu_item_250';
    const upOrDownArrow = handleClick ? "menu_item_arrow_250" : "menu_item_arrow_100";
    const marginPrice = handleClick ? "menu_item_250_price" : undefined;
    const marginTitle = handleClick ? "menu_item_250_title" : undefined;

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

    const orderCurrentProduct = () => {
        return addCurrentProduct(item);
    }

    return (
        <div>
            <div 
                className={nameClass} 
                key={id}
                onClick={() => setHandleClick(!handleClick)}  
            >  
                <div className='menu_item_100_container'>
                    <div>
                        <img src={photo} alt="star" />
                    </div>
                    
                    <div className={marginTitle}>
                        <span>{title}</span><br/>
                        <p>{descr}</p>
                    </div>

                    <div className={marginPrice}>
                        <span>{price} $</span>
                    </div>

                    <div className={upOrDownArrow}>
                        <FontAwesomeIcon 
                            icon={handleClick ? faArrowDown : faArrowUp} 
                        />
                    </div>
                </div>

                {
                    handleClick && 
                        <ItemProductDescr 
                            compound={compound}
                            orderCurrentProduct={orderCurrentProduct}    
                        />
                }
            </div>

        </div>
            
    )
}

export default ItemProduct;