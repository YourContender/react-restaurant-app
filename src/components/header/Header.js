import logo from '../../img/IMAGE.png';
import './Header.scss';

const Header = () => {
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
                    <button>Reservation</button>
                </div>
            </div>
        </div>
    )
}

export default Header;