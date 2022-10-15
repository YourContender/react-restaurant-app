import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Promo from "../components/promo/Promo";
import '../components/header/Header.scss';
import Reviews from "../components/reviews/Reviews";
import Footer from "../components/footer/Footer";

function HomePage() {
    return (
        <div className="home">
            <Header/>
            <Nav/>
            <Promo/>
            <Reviews/>
            <Footer/>
        </div>
    )
}

export default HomePage;