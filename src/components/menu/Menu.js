import { initValue } from '../../data';
import { useState, useEffect } from 'react';
import Buttons from './buttons/Buttons';
import CurrentElement from './current-elem/CurrentElement';
import Filter from './filter/Filter';
import ItemMenu from './item-menu/ItemMenu';
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

        setFullListMenu(data);
        setFragmentList([...data].filter(item => item.id <= 5))
    }
    
    const getCurrentItemFromList = async (id) => {
        const response = await fetch(`https://635594e2483f5d2df3b72711.mockapi.io/menu/${id}`);
        const data = await response.json();

        setCurrentItem([data]);
    }

    const incDecCalc = (action) => {
        return action === 'plus' ? setCount(count + 5) : setCount(count - 5);
    }

    const filteredMenu = () => {
        switch (filter) {
            case 'all' :
                return setFragmentList(
                    [...fullListMenu]
                        .slice(count - 5, count)
                );
            case 'kitchen' :
                return setFragmentList(
                    [...fullListMenu]
                        .filter(item => item.category === 'kitchen')
                )
            case 'bar' :
                return setFragmentList(
                    [...fullListMenu]
                        .filter(item => item.category === 'bar')
                    )
            case 'sale' :
                return setFragmentList(
                    [...fullListMenu]
                        .filter(item => item.category === 'sale')
                )
        }
    }

    useEffect(() => {
        getFullListMenu();
    }, []);

    useEffect(() => {
        filteredMenu();
        setCount(count);
    }, [filter]);

    useEffect(() => {
        if (count > fullListMenu.length + 5) {
            return setCount(5);
        }
        
        filteredMenu();
    }, [count]);

    return (
        <div className="menu">
            <CurrentElement 
                currentItem={currentItem} 
            />

            <div className="menu_container">
                <div>
                    <h4>Base menu</h4>

                    <Filter 
                        setFilter={setFilter}
                    />
                    
                    <ItemMenu 
                        fragmentList={fragmentList} 
                        getCurrentItemFromList={getCurrentItemFromList}
                    />

                    <Buttons 
                        filter={filter} 
                        setFilter={setFilter} 
                        incDecCalc={incDecCalc} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Menu;