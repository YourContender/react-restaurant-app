import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './Basket.scss';
import { useEffect } from 'react';
import { useState } from 'react';

function Basket() {
    const [listBasket, setListBasket] = useState([]);
    const [priceOrder, setPriceOrder] = useState(0);
    const [promoCode, setPromoCode] = useState('');

    const getSumPriceOrder = () => {
        let sum = 0;

        listBasket.forEach(item => sum += item.price * item.quantity);
    
        return setPriceOrder(sum);
    }

    useEffect(() => {
        getSumPriceOrder();
    }, [listBasket])

    const getOrderList = async () => {
        const res = await fetch('https://635594e2483f5d2df3b72711.mockapi.io/basket');
        const data = await res.json();

        setListBasket(data);

    }

    const removeCurrentProduct = async (id) => {
        console.log('remove: ', id);
        let filtered = listBasket.filter(item => item.id !== id);

        const res = await fetch(`https://635594e2483f5d2df3b72711.mockapi.io/basket/${id}`, {
            method: 'DELETE'
        });

        if (res.status === 200) {
            setListBasket(filtered);
        }
    }

    const incDecCalc = async (elem, action) => {
        let filtered = listBasket.map(item => {
            if (item.id === elem.id) {
                console.log('item', item.quantity - 1);
                return {
                    photo: item.photo,
                    title: item.title,
                    descr: item.descr,
                    price: item.price,
                    id: item.id,
                    category: item.category,
                    quantity: action ? +item.quantity + 1 : item.quantity - 1
                }
            }
            return item;
        })

        let data = {
            photo: elem.photo,
            title: elem.title,
            descr: elem.descr,
            price: elem.price,
            id: elem.id,
            category: elem.category,
            quantity: action ? +elem.quantity + 1 : elem.quantity - 1
        }

        const res = await fetch(`https://635594e2483f5d2df3b72711.mockapi.io/basket/${elem.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        if (res.status === 200) {
            setListBasket(filtered);
        }
    }

    useEffect(() => {
        getOrderList();
    }, []);

    return (
        <div className="basket">
            <div className="basket_products">
                {
                    listBasket.map(item => {
                        return (
                            <div className="basket_products_list" key={item.id}>
                                <div>
                                    <img src={item.photo} alt="item photo" />
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
                                    <h3>{parseInt(item.price, 10) * +item.quantity}$</h3>
                                </div>

                                <div className="basket_products_list_remove">
                                    <button
                                        onClick={() => removeCurrentProduct(item.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="basket_order">
                <div className="basket_order_promo">
                    <div>
                        <span>Promo code</span>
                    </div>

                    <div>
                        <input 
                            type="text" 
                            placeholder="enter promo code"
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                    </div>

                    <button>apply promo code</button>
                </div>

                <div className="basket_order_line"></div>

                <div className="basket_order_price">
                    <div className="basket_order_price_item">
                        {
                            (promoCode === '777') ? (
                                <div>
                                    <div>
                                        <span className="promo_code">
                                            price with promo code : <br/>
                                            {priceOrder - priceOrder * 0.2}$
                                        </span>
                                    </div>
                                    
                                    <div className="promo_code_message">
                                        <span>
                                            20% to the total cost of products
                                        </span>
                                    </div>
                                </div>

                                ) : (
                    
                                <span>
                                    order price : {priceOrder}$
                                </span> )
                        }
                    </div>

                    <div>
                        <span>
                            delivery price : {priceOrder * 0.1}$ 
                        </span>
                    </div>

                    <div className="basket_order_line"></div>
                    
                    <div>
                        <h2>
                            total: {promoCode ? 
                                (priceOrder - priceOrder * 0.2) + priceOrder * 0.1 : (
                                priceOrder + priceOrder * 0.1)}$
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