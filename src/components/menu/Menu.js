import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFullListMenu } from '../../redux/actions/actions';
import Filter from './filter/Filter';
import ItemsListMenu from './item-menu/ItemsListMenu';
import './Menu.scss';

const Menu = () => {
    const [fragmentList, setFragmentList] = useState([]);
    const [filter, setFilter] = useState('all');
    const { menu } = useSelector(elem => elem.menu);
 
    const dispatch = useDispatch();

    useEffect(() => {
        setFragmentList(menu);
    }, [menu]);

    useEffect(() => {
        dispatch(getFullListMenu())
    }, []);

    useEffect(() => {
        filteredMenu();
    }, [filter]);

    const filteredMenu = () => {
        switch (filter) {
            case 'all' :
                return setFragmentList(
                    [...menu]
                );
            case 'kitchen' :
                return setFragmentList(
                    [...menu]
                        .filter(item => item.category === 'kitchen')
                )
            case 'bar' :
                return setFragmentList(
                    [...menu]
                        .filter(item => item.category === 'bar')
                    )
            case 'sale' :
                return setFragmentList(
                    [...menu]
                        .filter(item => item.category === 'sale')
                )
        }
    }

    return (
        <div className="menu">
            <div className="menu_container">
                <div>
                    <div className="menu_container_title">
                        <h4>Base menu</h4>
                    </div>

                    <Filter 
                        setFilter={setFilter}
                    />
                    
                    <ItemsListMenu 
                        fragmentList={fragmentList}
                    />
                </div>
            </div>
        </div>
    )
}

export default Menu;