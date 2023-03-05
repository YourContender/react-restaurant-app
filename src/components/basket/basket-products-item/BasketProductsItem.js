import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const BasketProductsItem = ({ 
    listBasket, incDecCalc, removeCurrentProduct 
}) => {
    const { basket } = useSelector(state => state.basket);

    useEffect(() => {
        console.log('basket >>>>', basket)
    }, [])

    return (
        <div className="basket_products">
            {
                basket.map(item => {
                    return (
                        <div className="basket_products_list" key={item.id}>
                            <div className="basket_products_list_logo">
                                <img 
                                    src={item.photo} 
                                    alt="item photo" 
                                />
                            </div>

                            <div className="basket_products_list_title">
                                <div>
                                    <h3>{item.title}</h3>
                                </div>

                                <div>
                                    <span>{item.descr}</span>
                                </div>
                            </div>

                            <div className="basket_products_list_quantity">
                                <div className='test'>
                                    <button 
                                        onClick={() => incDecCalc(item)}
                                    >
                                        <FontAwesomeIcon 
                                            icon={faAngleLeft} 
                                        />
                                    </button>
                                </div>

                                <div className='test'>
                                    <h2>{item.quantity}</h2>
                                </div>
                                
                                <div className='test'>
                                    <button 
                                        onClick={() => incDecCalc(item, 'plus')}
                                    >
                                        <FontAwesomeIcon 
                                            icon={faAngleRight} 
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className="basket_products_list_price">
                                <h3>
                                    {parseInt(item.price, 10) * +item.quantity}$
                                </h3>
                            </div>

                            <div className="basket_products_list_remove">
                                <button
                                    onClick={() => removeCurrentProduct(item.id)}
                                >
                                    <FontAwesomeIcon 
                                        icon={faTrash} 
                                    />
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BasketProductsItem;