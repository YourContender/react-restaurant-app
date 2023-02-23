import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFullListMenu } from '../../redux/actions';
import Filter from './filter/Filter';
import ItemsListMenu from './item-menu/ItemsListMenu';
import './Menu.scss';

const Menu = () => {
    const [fragmentList, setFragmentList] = useState([]);
    
    const [testRedux, setTestRedux] = useState([]);
    const [filter, setFilter] = useState('all');
    const { menu } = useSelector(elem => elem);
    const dispatch = useDispatch();

    useEffect(() => {
        getFullListMenuPositions(menu);
    }, [menu]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://635594e2483f5d2df3b72711.mockapi.io/menu');
            const data = await response.json();

            return dispatch(getFullListMenu(data))
        } catch {
            console.log('error')
        }
    }

    useEffect(() => {
        filteredMenu();
    }, [filter]);

    const filteredMenu = () => {

        // switch (filter) {
        //     case 'all' :
        //         return setFragmentList(
        //             [...menu]
        //         );
        //     case 'kitchen' :
        //         return setFragmentList(
        //             [...menu]
        //                 .filter(item => item.category === 'kitchen')
        //         )
        //     case 'bar' :
        //         return setFragmentList(
        //             [...menu]
        //                 .filter(item => item.category === 'bar')
        //             )
        //     case 'sale' :
        //         return setFragmentList(
        //             [...menu]
        //                 .filter(item => item.category === 'sale')
        //         )
        // }
    }
    const getFullListMenuPositions = (arr) => {
        return setTestRedux(arr);
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
                        // testRedux={testRedux}
                        fragmentList={fragmentList}
                    />
                </div>
            </div>
        </div>
    )
}

export default Menu;