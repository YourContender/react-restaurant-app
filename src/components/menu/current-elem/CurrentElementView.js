import { useState } from "react";
import TextModal from "../../modal/text-modal/TextModal";

const CurrentElementView = ({ item, currentItem, addCurrentProduct }) => {
    const [doneOrder, setDoneOrder] = useState(false);

    const orderCurrentProduct = () => {
        setDoneOrder(true);

        return addCurrentProduct(item);
    }

    return (
        <div className="menu_target" key={item.id}>
            <div>
                <h4>{item.title}</h4>
                <span>{item.descr}</span>
            </div>


            <div className="menu_target_compound">
                <img src={item.photo} alt="current" />

                <div>
                    <ul>
                        {
                            (item.compound) && (
                                item.compound.map(elem => {
                                    return (
                                        <li key={elem}>
                                            {elem}
                                        </li>
                                    )})
                            )
                        }
                    </ul>
                </div>
            </div>

            { doneOrder && <TextModal/> }

            {
                currentItem[0].id !== 'init' &&
                    <div className="menu_order">
                        <button
                            onClick={() => orderCurrentProduct(item)}
                        >
                            Order
                        </button>
                    </div>
            }
        </div>
    )
}

export default CurrentElementView;