import { useState, useEffect } from 'react';
import { initValue } from '../../data';
import { Request } from '../../request';
import Buttons from './buttons/Buttons';
import CurrentElement from './current-elem/CurrentElement';
import InitItem from './current-elem/InitItem';
import Filter from './filter/Filter';
import ItemMenu from './item-menu/ItemMenu';
import './Menu.scss';

const Menu = () => {
    const [count, setCount] = useState(5);
    const [fullListMenu, setFullListMenu] = useState([]);
    const [fragmentList, setFragmentList] = useState([]);
    const [currentItem, setCurrentItem] = useState(initValue);
    const [filter, setFilter] = useState('all');
    const [displayInitCurrentItem, setDisplayInitCurrentItem] = useState(0);

    const data = new Request();
    
    useEffect(() => {
        data 
            .getFullListMenu()
            .then((res) => {
                setFullListMenu(res)
                setFragmentList([...res].filter(item => item.id <= 5))
            })
    }, []);

    const targetCurrentElement = (id) => {
        setDisplayInitCurrentItem(1);
        data
            .getCurrentItemFromList(+id)
            .then((res) => {
                setCurrentItem([res]);
            })
    }

    useEffect(() => {
        filteredMenu();
        setCount(count);
    }, [filter]);

    useEffect(() => {
        if (count > fullListMenu.length + 5 || count <= 0) {
            return setCount(5);
        }
        
        filteredMenu();
    }, [count]);

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

    return (
        <div className="menu">
            {
                displayInitCurrentItem === 0 ? 
                    <InitItem /> :
                        <CurrentElement 
                            currentItem={currentItem} 
                        />
            }

            <div className="menu_container">
                <div>
                    <h4>Base menu</h4>

                    <Filter 
                        setFilter={setFilter}
                    />
                    
                    <ItemMenu 
                        fragmentList={fragmentList} 
                        targetCurrentElement={targetCurrentElement}
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