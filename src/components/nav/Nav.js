import inst from '../../img/icons/inst.png';
import fb from '../../img/icons/fb.png';
import tw from '../../img/icons/tw.png';
import pt from '../../img/icons/pt.png';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
    return (
        <div className='nav'>
            <div className='nav_container'>
                <div className='nav_menu'>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div> 
                        <Link to="/about">About Us</Link>
                    </div>
                    <div>
                        <Link to="/menu">Our Menu</Link>
                    </div>
                    <div>
                        <a href="#">Pages</a>
                    </div>
                    <div>
                        <a href="#">Blog</a>
                    </div>
                    <div>
                        <a href="#">Contact Us</a>
                    </div>                
                </div>
                
                <div className='nav_profiles'>
                    <div className="instagram">
                        <img src={inst} alt="instagram" />
                    </div>
                    <div className="facebook">
                        <img src={fb} alt="facebook" />
                    </div>
                    <div className="twitter">
                        <img src={tw} alt="twitter" />
                    </div>
                    <div className="pinterest">
                        <img src={pt} alt="pinterest" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;