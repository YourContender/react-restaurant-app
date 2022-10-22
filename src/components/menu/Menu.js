import { menu } from '../../data';
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

    useEffect(() => {
        return count ? setData([...menu].splice(0, 4)) : setData([...menu].splice(4, 8));     
    }, [count]);

    return (
        <div className="menu">
            <div className="menu_target">
                <div>
                    <h4>Try Our Special dishes</h4>
                    <span>
                        Every time you perfectly dine with us, it should <br/>
                        happy for great inspired food in an environment <br/>
                        designed with individual touches unique to the local <br/>
                        area.
                    </span>
                </div>

                <img src={current} alt="current" />
            </div>

            <div className="menu_container">
                <div>
                    <h4>Base menu</h4>

                    {
                        data.map(item => {
                            return (
                                <div className="menu_descr" key={item.id}>  
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