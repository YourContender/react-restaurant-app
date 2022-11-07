import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import PopularDishesPage from './pages/PopularDishesPage';
import BlogPage from './pages/BlogPages';
import ReservationPage from './pages/ReservationPage';
import BasketPages from './pages/BasketPages';
import './App.scss';

function App() {
    return (
        <div className='container'>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/menu" element={<MenuPage />}/>
                <Route path="/dishes" element={<PopularDishesPage />}/>
                <Route path="/blog" element={<BlogPage />}/>
                <Route path="/reservation" element={<ReservationPage />}/>
                <Route path="/basket" element={<BasketPages/>}/>
            </Routes>
        </div>
    )
}

export default App;