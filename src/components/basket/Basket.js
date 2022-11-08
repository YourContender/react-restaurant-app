import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './Basket.scss';
import { useEffect } from 'react';
import { useState } from 'react';

function Basket() {
    const [listBasket, setListBasket] = useState([]);
    const [count, setCount] = useState(1);
    const [filter, setFilter] = useState([]);

    const getOrderList = async () => {
        const res = await fetch('https://635594e2483f5d2df3b72711.mockapi.io/basket');
        const data = await res.json();

        setListBasket(data);
    }

    const incDecCalc = async (id) => {
        console.log(id);
        let filtered = listBasket.map(item => {
            if (item.id === id) {
                console.log(item);
                return {
                    photo: item.photo,
                    title: item.title,
                    descr: item.descr,
                    price: item.price,
                    id: item.id,
                    category: item.category,
                    quantity: item.quantity + 1
                }
            }
            return item
        })

        console.log(filtered);

        const res = await fetch(`https://635594e2483f5d2df3b72711.mockapi.io/basket/${id}`, {
            method: 'PUT',
            body: JSON.stringify(filtered),
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
    }, [])

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
                                            onClick={() => setCount(item.count - 1)}
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
                                            onClick={() => incDecCalc(item.id)}
                                        >
                                            <FontAwesomeIcon 
                                                icon={faAngleRight} 
                                            />
                                        </button>
                                    </div>
                                </div>

                                <div className="basket_products_list_price">
                                    <h3>{item.price}</h3>
                                </div>

                                <div className="basket_products_list_remove">
                                    <button>X</button>
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