import './BurgerMenu.scss';

const BurgerMenu = ({setClickMenu, clickMenu}) => {
    return (
        <div className="burger" onClick={() => setClickMenu(!clickMenu)}>
            <div className="burger_menu">
                <div className="burger_menu_line"></div>
                <div className="burger_menu_line"></div>
                <div className="burger_menu_line"></div>
            </div>
            
            
        </div>
    )
}

export default BurgerMenu;