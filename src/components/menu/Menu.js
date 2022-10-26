import { initValue } from '../../data';
import { useState, useEffect } from 'react';
import current from '../../img/menu/curr.png';
import star9 from '../../img/menu/9.png';
import star10 from '../../img/menu/10.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import ItemMenu from './item-menu/ItemMenu';
import './Menu.scss';

const Menu = () => {
    const [count, setCount] = useState(true);
    const [fullListMenu, setFullListMenu] = useState([]);
    const [fragmentList, setFragmentList] = useState([]);
    const [currentItem, setCurrentItem] = useState(initValue);

    const getFullListMenu = async () => {
        const response = await fetch('https://635594e2483f5d2df3b72711.mockapi.io/menu');
        const data = await response.json();

        setFullListMenu(data);
        setFragmentList([...data].splice(0, 5))
    }
    
    const getCurrentItemFromList = async (id) => {
        console.log(id);
        const response = await fetch(`https://635594e2483f5d2df3b72711.mockapi.io/menu/${id}`);
        const data = await response.json();

        setCurrentItem([data]);
    }

    useEffect(() => {
        getFullListMenu();
    }, []);

    useEffect(() => {
        if (count) {
            setFragmentList([...fullListMenu].splice(0, 5));
        } else {
            setFragmentList([...fullListMenu].splice(5, 10));
        }
    }, [count]);

    return (
        <div className="menu">
            {
                currentItem.map(item => {
                    return (
                        <div className="menu_target" key={item.id}>
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
                                <ItemMenu 
                                    item={item} 
                                    key={item.id}
                                    getCurrentItemFromList={getCurrentItemFromList}
                                />
                            )
                        })
                    }

                    <div className="menu_btns">
                        <button >
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        
                        <button disabled={false} onClick={() => setCount(!count)}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Menu;