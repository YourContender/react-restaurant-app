import { useState, useEffect } from 'react';
import Buttons from './buttons/Buttons';
import Filter from './filter/Filter';
import ItemsListMenu from './item-menu/ItemsListMenu';
import './Menu.scss';

const Menu = () => {
    const [fullListMenu, setFullListMenu] = useState([]);
    const [fragmentList, setFragmentList] = useState([]);
    const [filter, setFilter] = useState('all');
    
    useEffect(() => {
        (async function fetchData() {
            const response = await fetch('https://635594e2483f5d2df3b72711.mockapi.io/menu');
            const data = await response.json();

            setFullListMenu(data);
            setFragmentList(data);
        })()
    }, []);

    useEffect(() => {
        filteredMenu();
    }, [filter]);

    const filteredMenu = () => {
        switch (filter) {
            case 'all' :
                return setFragmentList(
                    [...fullListMenu]
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
            <div className="menu_container">
                <div>
                    <h4>Base menu</h4>

                    <Filter 
                        setFilter={setFilter}
                    />
                    
                    <ItemsListMenu 
                        fullListMenu={fullListMenu}
                        fragmentList={fragmentList} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Menu;