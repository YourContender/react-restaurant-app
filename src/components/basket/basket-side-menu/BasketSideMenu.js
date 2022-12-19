const BasketSideMenu = ({ 
    setPromoCode, promoCode, calcPriceWithPromoCode, priceOrder, calcTotalSum, setDisplayModal, calcDeliveryPrice 
}) => {
    return (
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
    )
}

export default BasketSideMenu;