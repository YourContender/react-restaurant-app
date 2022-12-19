import { useEffect, useState } from 'react';
import BasketModal from './basket-modal/BasketModal';
import BasketProductsItem from './basket-products-item/BasketProductsItem';
import BasketSideMenu from './basket-side-menu/BasketSideMenu';
import spinner from '../../img/spinner.gif';
import empty_card from '../../img/empty_cart.png';
import './Basket.scss';

function Basket() {
    const [listBasket, setListBasket] = useState([]);
    const [priceOrder, setPriceOrder] = useState(0);
    const [promoCode, setPromoCode] = useState('');
    const [displayModal, setDisplayModal] = useState(false);
    const [gifSpinner, setGifSpinner] = useState(false);

    const getSumPriceOrder = () => {
        let sum = 0;

        listBasket.forEach(item => sum += item.price * item.quantity);
    
        return setPriceOrder(sum);
    }

    const calcPriceWithPromoCode = () => {
        return priceOrder - priceOrder * 0.2;
    }

    const calcDeliveryPrice = () => {
        return priceOrder >= 500 ? 0 : priceOrder * 0.1;
    }

    const calcTotalSum = () => {
        if (promoCode === '777' && priceOrder <= 500) {
            return calcPriceWithPromoCode() + calcDeliveryPrice();
        } else if (promoCode === '777' && priceOrder >= 500) {
            return calcPriceWithPromoCode();
        } else if (promoCode === '' && priceOrder >= 500) {
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
        setGifSpinner(true);
        console.log('remove: ', id);
        let filtered = listBasket.filter(item => item.id !== id);

        const res = await fetch(`https://635594e2483f5d2df3b72711.mockapi.io/basket/${id}`, {
            method: 'DELETE'
        });

        if (res.status === 200) {
            setTimeout(() => {
                setListBasket(filtered);
                setGifSpinner(false);
            }, 1500)
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
                gifSpinner && 
                    <img 
                        className="spinner"
                        src={spinner}
                    />
            }
            {
                displayModal &&
                    <BasketModal 
                        setDisplayModal={setDisplayModal}
                        listBasket={listBasket}
                        calcTotalSum={calcTotalSum}
                    />
            } 

            {
                listBasket.length !== 0 ? 
                    <BasketProductsItem 
                        listBasket={listBasket} 
                        incDecCalc={incDecCalc} 
                        removeCurrentProduct={removeCurrentProduct}
                    /> : 
                    <img src={empty_card}/> 
            }

            <BasketSideMenu
                setPromoCode={setPromoCode}
                promoCode={promoCode}
                calcPriceWithPromoCode={calcPriceWithPromoCode}
                calcDeliveryPrice={calcDeliveryPrice}
                priceOrder={priceOrder}
                calcTotalSum={calcTotalSum}
                setDisplayModal={setDisplayModal}
            />
        </div>
    )
}

export default Basket;