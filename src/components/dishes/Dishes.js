import { useEffect } from 'react';
import { useState } from 'react';
import './Dishes.scss';

const Dishes = () => {
    const [listMenu, setListMenu] = useState([]);
    const [count, setCount] = useState(4);

    useEffect(() => {
        getFullListMenu(count);       
    }, [count])

    const getFullListMenu = async (num) => {
        const response = await fetch('https://635594e2483f5d2df3b72711.mockapi.io/menu');
        const data = await response.json();

        setListMenu([...data].filter(item => item.id <= num));
    }

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

                <div className="dishes_menu">
                    {
                        listMenu.map(item => {
                            return (
                                <div className="dishes_menu_item">
                                    <div className="dishes_img">
                                        <img src={item.photo} alt="dishes 1" />
                                    </div>

                                    <div className="dishes_text">
                                        <div>
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div>
                                            <span>{item.price}$</span>
                                        </div>
                                    </div>
                                    
                                    <div className="dishes_line"></div>

                                    <div className="dishes_descr">
                                        <p>
                                            {item.descr}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="dishes_btn">
                    <button
                        onClick={() => setCount(count + 4)}
                    >
                        See all dishes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dishes;