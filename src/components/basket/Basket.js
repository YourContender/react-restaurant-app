import { changeQuantityOrder, getBasketList, removeProductFromBasket } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import BasketProductsItem from './basket-products-item/BasketProductsItem';
import BasketSideMenu from './basket-side-menu/BasketSideMenu';
import BasketModal from './basket-modal/BasketModal';
import empty_card from '../../img/empty_cart.png';
import spinner from '../../img/spinner.gif';
import './Basket.scss';

function Basket() {
    const [priceOrder, setPriceOrder] = useState(0);
    const [promoCode, setPromoCode] = useState('');
    const [displayModal, setDisplayModal] = useState(false);
    const [gifSpinner, setGifSpinner] = useState(false);

    const { basket } = useSelector(state => state.basket)

    const dispatch = useDispatch();

    useEffect(() => {
        getSumPriceOrder()
    }, [basket]);

    useEffect(() => {
        dispatch(getBasketList())
    }, []);

    const getSumPriceOrder = () => {
        let sum = 0;

        basket.forEach(item => sum += item.price * item.quantity);
    
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

    const removeCurrentProduct = async (id) => {
        setGifSpinner(true);

        dispatch(removeProductFromBasket(basket, id));

        setTimeout(() => {
            setGifSpinner(false)
        }, 500);
    }

    const incDecCalc = async (elem, action) => {
        dispatch(changeQuantityOrder(basket, elem, action))
    }

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
                        listBasket={basket}
                        calcTotalSum={calcTotalSum}
                    />
            } 

            {
                basket.length !== 0 ? 
                    <BasketProductsItem 
                        listBasket={basket} 
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