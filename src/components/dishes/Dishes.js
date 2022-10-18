import dishes1 from '../../img/dishes/dishes1.png';
import dishes2 from '../../img/dishes/dishes2.png';
import dishes3 from '../../img/dishes/dishes3.png';
import dishes4 from '../../img/dishes/dishes4.png';
import './Dishes.scss';

const Dishes = () => {
    return (
        <div className="dishes">
            <div className="dishes_container">
                <div className="dishes_subtitle">
                    <span>menu</span>
                </div>

                <div className="dishes_title">
                    <h1>Popular Dishes</h1>
                </div>

                <div className="dishes_descr">
                    <span>
                        There is a game between the waiters in restaurant to see who serves the food to<br/>
                        each table fastest. That led to attempting the Guinness Record.
                    </span>
                </div>
            </div>

            <div className="dishes_menu">
                <div className="dishes_menu_item">
                    <div className="dishes_img">
                        <img src={dishes1} alt="dishes 1" />
                    </div>

                    <div className="dishes_text">
                        <div>
                            <h2>Chicken Manjoori</h2>
                        </div>
                        <div>
                            <span>15$</span>
                        </div>
                    </div>
                    
                    <div className="dishes_line"></div>

                    <div className="dishes_descr">
                        <p>
                            Dish relished by all age groups as a starter dish at parties.
                        </p>
                    </div>
                </div>

                <div className="dishes_menu_item">
                    <div className="dishes_img">
                        <img src={dishes2} alt="dishes 1" />
                    </div>

                    <div className="dishes_text">
                        <div>
                            <h2>Hotdog</h2>
                        </div>
                        <div>
                            <span>10$</span>
                        </div>
                    </div>

                    <div className="dishes_line"></div>
                    
                    <div className="dishes_descr">
                        <p>
                            Grilled sausage served in the slit of a partially sliced bun.
                        </p>
                    </div>
                </div>

                <div className="dishes_menu_item">
                    <div className="dishes_img">
                        <img src={dishes3} alt="dishes 1" />
                    </div>

                    <div className="dishes_text">
                        <div>
                            <h2>Fresh Salmon</h2>
                        </div>
                        <div>
                            <span>5$</span>
                        </div>
                    </div>

                    <div className="dishes_line"></div>
                    
                    <div className="dishes_descr">
                        <p>
                            Beat the health blues with our Super Immune Blue Juice Recipe.
                        </p>
                    </div>
                </div>

                <div className="dishes_menu_item">
                    <div className="dishes_img">
                        <img src={dishes4} alt="dishes 1" />
                    </div>

                    <div className="dishes_text">
                        <div>
                            <h2>Veg Burger</h2>
                        </div>
                        <div>
                            <span>10$</span>
                        </div>
                    </div>

                    <div className="dishes_line"></div>
                    
                    <div className="dishes_descr">
                        <p>
                            Burgers may be made from ingredients like beans.
                        </p>
                    </div>
                </div>
            </div>

            <div className="dishes_btn">
                <button>See all dishes</button>
            </div>
        </div>
    )
}

export default Dishes;