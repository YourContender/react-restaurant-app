import current from '../../img/menu/curr.png';
import star1 from '../../img/menu/1.png';
import star2 from '../../img/menu/2.png';
import star3 from '../../img/menu/3.png';
import star4 from '../../img/menu/4.png';
import star5 from '../../img/menu/5.png';
import star6 from '../../img/menu/6.png';
import star7 from '../../img/menu/7.png';
import star8 from '../../img/menu/8.png';
import star9 from '../../img/menu/9.png';
import star10 from '../../img/menu/10.png';
import './Menu.scss';

const Menu = () => {
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
                    <h4>Starters</h4>

                    <div className="menu_descr">  
                        <div className="menu_descr_container">
                            <div>
                                <img src={star1} alt="star" />
                            </div>
                            
                            <div>
                                <span>Raw Scallops from Erquy</span><br/>
                                <p>Shuck the scallop to that used for oysters</p>
                            </div>
                        </div>
    
                        <div>
                            <span>40$</span>
                        </div>
                    </div>

                    <div className="menu_descr">  
                        <div className="menu_descr_container">
                            <div>
                                <img src={star2} alt="star" />
                            </div>
                            
                            <div>
                                <span>Spring Roll</span><br/>
                                <p>Add oil to a hot pan spring onion whites</p>
                            </div>
                        </div>
    
                        <div>
                            <span>20$</span>
                        </div>
                    </div>

                    <div className="menu_descr">  
                        <div className="menu_descr_container">
                            <div>
                                <img src={star3} alt="star" />
                            </div>
                            
                            <div>
                                <span>French Onion Soup</span><br/>
                                <p>Wheat flour, apple cider vinegar, bread</p>
                            </div>
                        </div>
    
                        <div>
                            <span>20$</span>
                        </div>
                    </div>

                    <div className="menu_descr">  
                        <div className="menu_descr_container">
                            <div>
                                <img src={star4} alt="star" />
                            </div>
                            
                            <div>
                                <span>Tomato Bruschetta</span><br/>
                                <p>Bread, olive oil, garlic, black pepper</p>
                            </div>
                        </div>
    
                        <div>
                            <span>30$</span>
                        </div>
                    </div>

                </div>

                <div className="menu_child">
                    <h4>Main Dish</h4>

                    <div className="menu_descr">  
                        <div className="menu_descr_container">
                            <div>
                                <img src={star5} alt="star" />
                            </div>
                            
                            <div>
                                <span>Grilled Salmon with Dill Sauce</span><br/>
                                <p>Brown sugar, salmon fillet, Dijon mustard</p>
                            </div>
                        </div>
    
                        <div>
                            <span>40$</span>
                        </div>
                    </div>

                    <div className="menu_descr">  
                        <div className="menu_descr_container">
                            <div>
                                <img src={star6} alt="star" />
                            </div>
                            
                            <div>
                                <span>Roast Beef with Vegetable</span><br/>
                                <p>Green beans, rib eye, olive oil, beef</p>
                            </div>
                        </div>
    
                        <div>
                            <span>20$</span>
                        </div>
                    </div>

                    <div className="menu_descr">  
                        <div className="menu_descr_container">
                            <div>
                                <img src={star7} alt="star" />
                            </div>
                            
                            <div>
                                <span>Marrkesh Vegetetarian Curruy</span><br/>
                                <p>Sweet potato, eggplant, garbanzo bean</p>
                            </div>
                        </div>
    
                        <div>
                            <span>25$</span>
                        </div>
                    </div>  

                    <div className="menu_descr">  
                        <div className="menu_descr_container">
                            <div>
                                <img src={star8} alt="star" />
                            </div>
                            
                            <div>
                                <span>Spicy Vegan Potato Curry</span><br/>
                                <p>Coconut milk, beans, potatoes, curry powder</p>
                            </div>
                        </div>
    
                        <div>
                            <span>35$</span>
                        </div>
                    </div>
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