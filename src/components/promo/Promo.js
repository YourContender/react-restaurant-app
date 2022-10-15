import image from '../../img/Frame.png';
import { Link } from 'react-router-dom';
import './Promo.scss';

const Promo = () => {
    return (
        <div className="promo_container">
            <div className="promo_title">
                <h1>Welcome to <br/> Restaurant</h1>

                <span>
                    The people, food and the prime locations make the perfect place <br/>
                    good friends & family to come together and have great time.
                </span>
                
                <div>
                    <Link to="/menu">
                        <button>
                            View menu
                        </button>
                    </Link>
                </div>
            </div>

            <div className="promo_image">
                <img src={image} alt="image" />
            </div>
        </div>
    )
}

export default Promo;