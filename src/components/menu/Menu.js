import { initValue } from '../../data';
import { useState, useEffect } from 'react';
import current from '../../img/menu/curr.png';
import star9 from '../../img/menu/9.png';
import star10 from '../../img/menu/10.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './Menu.scss';

const Menu = () => {
    const [count, setCount] = useState(true);
    const [data, setData] = useState([]);
    const [fullListMenu, setFullListMenu] = useState([]);
    const [fragmentList, setFragmentList] = useState([]);
    const [currentItem, setCurrentItem] = useState(initValue);

    const getFullListMenu = async () => {
        const response = await fetch('https://635594e2483f5d2df3b72711.mockapi.io/menu');
        const data = await response.json();

        setFullListMenu(data);
        setFragmentList([...data].splice(0, 4))
    }
    
    const getCurrentItemFromList = async (id) => {
        const response = await fetch(`https://635594e2483f5d2df3b72711.mockapi.io/menu/${id}`);
        const data = await response.json();

        setCurrentItem([data]);
    }

    useEffect(() => {
        getFullListMenu();
    }, []);

    useEffect(() => {
        count ? setFragmentList([...fullListMenu].splice(0, 4)) : setFragmentList([...fullListMenu].splice(4, 8));
    }, [count]);

    return (
        <div className="menu">
            {
                currentItem.map(item => {
                    return (
                        <div className="menu_target">
                            <div>
                                <h4>{item.title}</h4>
                                <span>{item.descr}</span>
                            </div>

                            <div className="menu_target_compound">
                                <img src={item.photo} alt="current" />

                                <div>
                                    <ul>
                                        <li>apple</li>
                                        <li>milk</li>
                                        <li>coffee</li>
                                        <li>juice</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div className="menu_container">
                <div>
                    <h4>Base menu</h4>

                    {
                        fragmentList.map(item => {
                            return (
                                <div 
                                    className="menu_descr" 
                                    key={item.id}
                                    onClick={() => getCurrentItemFromList(item.id)}
                                >  
                                    <div className="menu_descr_container">
                                        <div>
                                            <img src={item.photo} alt="star" />
                                        </div>
                                        
                                        <div>
                                            <span>{item.title}</span><br/>
                                            <p>{item.descr}</p>
                                        </div>
                                    </div>
                
                                    <div>
                                        <span>{item.price}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="menu_btns">
                    <button>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    
                    <button onClick={() => setCount(!count)}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>

                <div className="menu_child">
                    <h4>Dessert</h4>

                    <div className="menu_descr">  
                        <div className="menu_descr_container">
                            <div>
                                <img src={star9} alt="star" />
                            </div>
                            
                            <div>
                                <span>Apple Pie with Cream</span><br/>
                                <p>Whipping cream, egg white, cinnamon</p>
                            </div>
                        </div>
    
                        <div>
                            <span>15$</span>
                        </div>
                    </div>

                    <div className="menu_descr">  
                        <div className="menu_descr_container">
                            <div>
                                <img src={star10} alt="star" />
                            </div>
                            
                            <div>
                                <span>Lemon Meringue Pie</span><br/>
                                <p>Frozen pie crust, meringue, lemon</p>
                            </div>
                        </div>
    
                        <div>
                            <span>30$</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Menu;