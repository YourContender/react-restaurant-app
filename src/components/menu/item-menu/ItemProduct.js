import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ItemProductDescr from "./description-product/ItemProductDescr";
import { useDispatch } from "react-redux";
import { postBasketProduct } from "../../../redux/actions/actions";

const ItemProduct = ({ item }) => {
    const { id, photo, title, descr, price, compound } = item;
    const [handleClick, setHandleClick] = useState(false);

    const dispatch = useDispatch();

    const nameClass = !handleClick ? 'menu_item_100' : 'menu_item_250';
    const upOrDownArrow = handleClick ? "menu_item_arrow_250" : "menu_item_arrow_100";
    const marginPrice = handleClick ? "menu_item_250_price" : undefined;
    const marginTitle = handleClick ? "menu_item_250_title" : undefined;

    const addCurrentProduct = async (elem) => { 
        dispatch(postBasketProduct(elem));
        setHandleClick(true);
    }
    
    const orderCurrentProduct = () => {
        addCurrentProduct(item);
        setHandleClick(true);
    }

    return (
        <div>
            <div 
                className={nameClass} 
                key={id}
  
            >  
                <div 
                    className='menu_item_100_container'
                    onClick={() => setHandleClick(!handleClick)}
                >
                    <div>
                        <img src={photo} alt="star" />
                    </div>
                    
                    <div className={marginTitle}>
                        <div>
                            <span>{title}</span><br/>
                            <p>{descr}</p>
                        </div>
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