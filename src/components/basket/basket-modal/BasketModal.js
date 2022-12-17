import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import './BasketModal.scss';

const BasketModal = ({ setDisplayModal, listBasket, calcTotalSum }) => {
    return (
        <div className="modal">
            <div className="modal_order">
                <button
                    className="modal_order_close"
                    onClick={() => setDisplayModal(false)}
                >
                    <FontAwesomeIcon 
                        icon={faSquareXmark} 
                    />
                </button>

                <div className="modal_order_content">
                    <div className="modal_order_content_title">
                        <h2>confirm order</h2>
                    </div>

                    <div className="modal_order_content_container">
                        <span><em>your order: </em></span>

                        {
                            listBasket.map(item => {
                                return (
                                    <div key={item.id} className="modal_order_list">
                                        <div className="modal_order_title">
                                            {item.title}
                                        </div>

                                        <div className="modal_order_item">
                                            x{item.quantity}
                                        </div>
                                        
                                        <div className="modal_order_item">
                                            {item.price * item.quantity}$
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="modal_order_sum">
                            <span>
                                {calcTotalSum()} $
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="modal_order_content_title">
                            <h2>enter forms</h2>
                        </div>
                        
                        <div className="modal_forms">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="enter telephone number"
                                />
                            </div>

                            <div>
                                <input 
                                    type="text" 
                                    placeholder="enter your address"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="modal_btn">
                        <button>post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketModal;