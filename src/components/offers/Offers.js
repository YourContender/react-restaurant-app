import img1 from '../../img/offers/img1.png';
import img2 from '../../img/offers/img2.png';
import './Offers.scss';

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers_titles">
                <div>
                    <span>offers</span>
                </div>

                <div>
                    <h1>Our Offer dishes</h1>
                </div>

                <div>
                    <p>
                        Our chefs create melt-in-your-mouth dishes that'll 
                        satiate even the fussiest eaters now the dishes are 
                        in offers use it based on hunger.
                    </p>
                </div>
            </div>

            <div className="offers_sale_container">
                <div className="offers_sale">
                    <div className="offers_sale_item">
                        <div className="offers_sale_stock">
                            <div className="offers_sale_text">only</div>
                            <div className="offers_sale_price">$10</div>
                        </div>

                        <div>
                            <span>50% Offer Going</span>
                        </div>

                        <div>
                            <h2>Chicken Burger</h2>
                        </div>

                        <div>
                            <p>Chicken burger with the tasty toppings and leaves.</p>
                        </div>
                    </div>

                    <div className="offers_sale_img">
                        <img src={img1} alt="burger" />
                    </div>
                </div>
                
                <div className="offers_sale">
                    <div className="offers_sale_item">
                        <div className="offers_sale_stock">
                            <div className="offers_sale_text">only</div>
                            <div className="offers_sale_price">$9</div>
                        </div>

                        <div>
                            <span>50% Offer Going</span>
                        </div>

                        <div>
                            <h2>Chicken Pizza</h2>
                        </div>

                        <div>
                            <p>Pizza with multiple flavor and the toping are mixed.</p>
                        </div>
                    </div>

                    <div className="offers_sale_img">
                        <img src={img2} alt="burger" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers;