import { useState } from "react";

const ItemProductDescr = ({ compound, orderCurrentProduct }) => {
    const [click, setClick] = useState(false);

    const clickOnOrderButton = () => {
        orderCurrentProduct();
        setClick(true);
    }

    return (
        <div className="menu_descr_item">
            <ul>
                {
                    compound.map(elem => {
                        return (
                            <li key={elem}>
                                {elem}
                            </li>
                        )
                    })
                }
            </ul>

            <div>
                <div className="menu_order">
                    {
                        (click) ? ( 
                            <div className="test">
                                <span>
                                    your order has been added to the cart
                                </span>
                            </div>
                        ) : (
                            <button onClick={clickOnOrderButton}>
                                Order
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemProductDescr;