import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import inst from '../../img/icons/inst.png';
import fb from '../../img/icons/fb.png';
import tw from '../../img/icons/tw.png';
import pt from '../../img/icons/pt.png';
import './Nav.scss';

const Nav = () => {
    const [listOrder, setListOrder] = useState([]);

    const getOrderList = async () => {
        const res = await fetch('https://635594e2483f5d2df3b72711.mockapi.io/basket');
        const data = await res.json();

        setListOrder(data);
    }

    useEffect(() => {
        getOrderList();
    }, [])

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
                        <Link to="/dishes">Popular Dishes</Link>
                    </div>
                    <div>
                        <Link to="/blog">Blog</Link>
                    </div>
                    <div>
                        <Link to="/basket">
                            Basket 
                            <span>{listOrder.length >= 1 ? 'x' + listOrder.length : null}</span>
                        </Link>
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