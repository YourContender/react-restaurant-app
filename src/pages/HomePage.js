import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Promo from "../components/promo/Promo";
import Reviews from "../components/reviews/Reviews";
import Footer from "../components/footer/Footer";
import Features from "../components/features/Features";
import '../components/header/Header.scss';

function HomePage() {
    return (
        <div className="home">
            <Header/>
            <Nav/>
            <Promo/>
            <Reviews/>
            <Features/>
            <Footer/>
        </div>
    )
}

export default HomePage;