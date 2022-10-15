import ins from '../../img/icons/inst.png';
import fb from '../../img/icons/fb.png';
import tw from '../../img/icons/tw.png';
import pnt from '../../img/icons/pt.png';
import logo from '../../img/IMAGE.png';
import './Footer.scss';

const Footer = () => {
    return (
        <div>
            <div className="footer_container">
                <div className="footer_inner">
                    <div>
                        <h1>#TheTastEat</h1>
                    </div>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className='footer_profiles'>
                        <div className="in">
                            <img src={ins} alt="instagram" />
                        </div>
                        <div className="fb">
                            <img src={fb} alt="facebook" />
                        </div>
                        <div className="tw">
                            <img src={tw} alt="twitter" />
                        </div>
                        <div className="pn">
                            <img src={pnt} alt="pinterest" />
                        </div>
                    </div>
                </div>

                <div className="footer_info">
                    <div className="footer_contact">
                        <h2>Contact</h2>

                        <div>
                            <span>5 Rue Dalou, 75015 Paris</span>
                            <p>+123 456 789</p>
                            <p>josefin@mail.com</p>
                        </div>
                    </div>

                    <div className="footer_input">
                        <div>
                            <span>
                                Join our mailing list for updates,<br/>
                                Get news & offers events.
                            </span>
                        </div>

                        <div>
                            <input type="text" placeholder="Email"/>
                            <button>Subscribe</button>
                        </div>
                    </div>

                    <div className="footer_working">
                        <h2>Working Hours</h2>

                        <div className="footer_time">
                            <span>Mon – Fri: 7.00am – 6.00pm</span><br/>
                            
                            <span>Sat: 7.00am – 6.00pm</span><br/>
                            
                            <span>Sun:– Fri: 8.00am – 6.00pm</span>
                        </div>
                    </div>
                </div>
                
                <div className="footer_line"></div>

                <div className="footer_author">
                    <span>
                        © Kryvyi Rih 2022 - React-restaurant-app
                    </span>
                    <p> Junior developer - Sergey Sayenko</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;