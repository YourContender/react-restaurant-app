import { useEffect, useState } from 'react';
import BasketModal from './basket-modal/BasketModal';
import './Basket.scss';
import BasketProductsItem from './basket-products-item/BasketProductsItem';

function Basket() {
    const [listBasket, setListBasket] = useState([]);
    const [priceOrder, setPriceOrder] = useState(0);
    const [promoCode, setPromoCode] = useState('');
    const [displayModal, setDisplayModal] = useState(false);

    const getSumPriceOrder = () => {
        let sum = 0;

        listBasket.forEach(item => sum += item.price * item.quantity);
    
        return setPriceOrder(sum);
    }

    const calcPriceWithPromoCode = () => {
        return priceOrder - priceOrder * 0.2;
    }

    const calcDeliveryPrice = () => {
        return priceOrder > 500 ? 0 : priceOrder * 0.1;
    }

    const calcTotalSum = () => {
        if (promoCode === '777' && priceOrder < 500) {
            return calcPriceWithPromoCode() + calcDeliveryPrice();
        } else if (promoCode === '777' && priceOrder > 500) {
            return calcPriceWithPromoCode();
        } else if (promoCode === '' && priceOrder > 500) {
            return priceOrder;
        } else {
            return priceOrder + calcDeliveryPrice();
        }
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
            {
                displayModal ? 
                    <BasketModal 
                        setDisplayModal={setDisplayModal}
                        listBasket={listBasket}
                        calcTotalSum={calcTotalSum}
                    /> : null
            } 

            <BasketProductsItem listBasket={listBasket} incDecCalc={incDecCalc} removeCurrentProduct={removeCurrentProduct}/>

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
                                            {calcPriceWithPromoCode()}$
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
                            delivery price : {calcDeliveryPrice()}$ 
                        </span>
                    </div>

                    <div className="basket_order_line"></div>
                    
                    <div>
                        <h2>
                            total: {calcTotalSum()}$
                        </h2>
                    </div>
                </div>

                <div className="basket_order_message">
                    <button
                        onClick={() => setDisplayModal(true)}
                    >
                        design
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Basket;