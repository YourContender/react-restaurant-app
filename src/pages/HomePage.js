import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Promo from "../components/promo/Promo";
import '../components/header/Header.scss';

function HomePage() {
    return (
        <div className="home">
            <Header/>
            <Nav/>
            <Promo/>
        </div>
    )
}

export default HomePage;