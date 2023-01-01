import { useState } from "react";
import { Request } from "../../../request";
import CurrentElementView from "./CurrentElementView";

const CurrentElement = ({ currentItem }) => {
    const [doneOrder, setDoneOrder] = useState(false);

    const data = new Request();
    const item = currentItem[0];

    const orderCurrentProduct = () => {
        setDoneOrder(true);
        data 
            .addCurrentProduct(item)
    }

    return (
        <>
            <CurrentElementView  
                item={item} 
                doneOrder={doneOrder}
                orderCurrentProduct={orderCurrentProduct}
            />
        </>
    )
}

export default CurrentElement;