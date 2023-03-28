import logo from '../../img/IMAGE.png';
import { Link } from 'react-router-dom';
import './Header.scss';
import BurgerMenu from '../nav/burger-menu/BurgerMenu';
import { useState } from 'react';

const Header = () => {
    const [clickMenu, setClickMenu] = useState(false);

    return (
        <div className="header">
            <div className="header_container">
                <div className="header_phone">
                    <button>Call - 123 456 789</button>
                </div>
                
                <div className="header_logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="header_reservation">
                    <Link to="/reservation">
                        <button>Reservation</button>
                    </Link>
                </div>

                <BurgerMenu setClickMenu={setClickMenu} clickMenu={clickMenu}/>

                {clickMenu ? <div className='header_modal'>
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
                        <Link to="/dishes">Offers</Link>
                    </div>
                    <div>
                        <Link to="/blog">Blog</Link>
                    </div>
                    <div>
                        <Link to="/basket">
                            Basket 
                            {/* { displayQuantityProductsOrder() } */}
                        </Link>
                    </div>      
                </div> : null}
            </div>
        </div>
    )
}

export default Header;