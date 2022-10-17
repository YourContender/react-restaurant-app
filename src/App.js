import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import PopularDishesPage from './pages/PopularDishesPage';
import './App.scss';

function App() {
    return (
        <div className='container'>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/menu" element={<MenuPage />}/>
                <Route path="/dishes" element={<PopularDishesPage />}/>
            </Routes>
        </div>
    )
}

export default App;