import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import './App.scss';

function App() {
    return (
        <div className='container'>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/menu" element={<MenuPage />}/>
            </Routes>
        </div>
    )
}

export default App;