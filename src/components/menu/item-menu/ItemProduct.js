import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ItemProductDescr from "./description-product/ItemProductDescr";
import { Request } from "../../../request";

const ItemProduct = ({ item, targetCurrentElement }) => {
    const { id, photo, title, descr, price, compound } = item;
    const [testClick, setTestClick] = useState(false);

    const nameClass = !testClick ? 'menu_item_100' : 'menu_item_250';
    const upOrDownArrow = testClick ? "menu_item_arrow_250" : "menu_item_arrow_100";
    const marginPrice = testClick ? "menu_item_250_price" : undefined;
    const marginTitle = testClick ? "menu_item_250_title" : undefined;

    const data = new Request();

    const orderCurrentProduct = () => {
        data 
            .addCurrentProduct(item)
    }

    return (
        <div>
            <div 
                className={nameClass} 
                key={id}
                onClick={() => targetCurrentElement(id)}
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
                            onClick={() => setTestClick(!testClick)}  
                            icon={testClick ? faArrowDown : faArrowUp} 
                        />
                    </div>
                </div>


                {
                    testClick && 
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