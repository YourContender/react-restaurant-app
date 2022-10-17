import date from '../../img/features/date.png';
import delivery from '../../img/features/delivery.png';
import menu from '../../img/features/menu.png';
import './Features.scss';

const Features = () => {
    return (
        <div className="features">
            <div className="features_services">
                <div className="features_title">
                    <span>What we offer</span>
                </div>
                <div className="features_descr">
                    <h2>Our Great Services</h2>
                    <span>
                        The atmosphere set the stage. It’s about more 
                        than just a dining room away from your home. 
                        food takes the spotlight as guests.
                    </span>
                </div>
            </div>

            <div className="features_blocks">
                <div className="features_block">
                    <img src={date} alt="date" />
                    <span>Opened 24/7</span>
                </div>

                <div className="features_block">
                    <img src={delivery} alt="delivery" />
                    <span>Special Menus</span>
                </div>
                
                <div className="features_block">
                    <img src={menu} alt="menu" />
                    <span>Home Delivery</span>
                </div>
            </div>
        </div>
    )
}

export default Features;