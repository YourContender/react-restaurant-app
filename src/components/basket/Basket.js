import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './Basket.scss';

function Basket() {
    return (
        <div className="basket">
            <div className="basket_products">
                <div className="basket_products_list">
                    <div>
                        <img src="https://i.pinimg.com/564x/11/c6/71/11c67116d2ddd7f65b4fba70539caf8f.jpg" alt="" />
                    </div>

                    <div className="basket_products_list_title">
                        <div>
                            <h3>Raw Scallops from Erquy</h3>
                        </div>

                        <div>
                            <span>Shuck the scallop to that used for oysters</span>
                        </div>
                    </div>

                    <div className="basket_products_list_quantity">
                        <div className='test'>
                            <button >
                                <FontAwesomeIcon 
                                    icon={faAngleLeft} 
                                />
                            </button>
                        </div>

                        <div className='test'>
                            <h2>5</h2>
                        </div>
                        
                        <div className='test'>
                            <button>
                                <FontAwesomeIcon 
                                    icon={faAngleRight} 
                                />
                            </button>
                        </div>
                    </div>

                    <div className="basket_products_list_price">
                        <h3>40$</h3>
                    </div>

                    <div className="basket_products_list_remove">
                        <button>X</button>
                    </div>
                </div>
            </div>

            <div className="basket_order">
                <div className="basket_order_promo">
                    <div>
                        <span>Promo code</span>
                    </div>

                    <div>
                        <input type="text" placeholder="enter promo code"/>
                    </div>

                    <button>apply promo code</button>
                </div>

                <div className="basket_order_line"></div>

                <div className="basket_order_price">
                    <div>
                        <span>
                            order price : 100$
                        </span>
                    </div>

                    <div className="basket_order_line"></div>
                    
                    <div>
                        <h2>
                            total: 100$
                        </h2>
                    </div>
                </div>

                <div className="basket_order_message">
                    <button>
                        design
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Basket;