import { initValue } from '../../data';
import { useState, useEffect } from 'react';
import Buttons from './buttons/Buttons';
import ItemMenu from './item-menu/ItemMenu';
import CurrentElement from './current-elem/CurrentElement';
import './Menu.scss';

const Menu = () => {
    const [count, setCount] = useState(5);
    const [fullListMenu, setFullListMenu] = useState([]);
    const [fragmentList, setFragmentList] = useState([]);
    const [currentItem, setCurrentItem] = useState(initValue);
    const [filter, setFilter] = useState('all');

    const getFullListMenu = async () => {
        const response = await fetch('https://635594e2483f5d2df3b72711.mockapi.io/menu');
        const data = await response.json();
        console.log(data);

        setFullListMenu(data);
        setFragmentList([...data].filter(item => item.id <= 5))
    }
    
    const getCurrentItemFromList = async (id) => {
        const response = await fetch(`https://635594e2483f5d2df3b72711.mockapi.io/menu/${id}`);
        const data = await response.json();

        setCurrentItem([data]);
    }

    const incDecCalc = () => {
        return setCount(count + 5);
    }

    useEffect(() => {
        getFullListMenu();
    }, []);

    useEffect(() => {
        if (count > fullListMenu.length + 5) {
            return setCount(5);
        }
        setFragmentList([...fullListMenu].slice(count - 5, count));
    }, [count]);

    return (
        <div className="menu">
            {
                currentItem.map(item => {
                    return (
                        <CurrentElement key={item.id} item={item}/>
                    )
                })
            }

            <div className="menu_container">
                <div>
                    <h4>Base menu</h4>

                    <div className="menu_filters">
                        <div>
                            <button>All</button>
                        </div>
                        <div>
                            <button>Kitchen</button>
                        </div>
                        <div>
                            <button>Bar</button>
                        </div>
                        <div>
                            <button>Sale</button>
                        </div>
                    </div>
                    
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

                    <Buttons incDecCalc={incDecCalc} />
                </div>
            </div>
        </div>
    )
}

export default Menu;