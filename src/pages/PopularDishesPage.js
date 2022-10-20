import Dishes from "../components/dishes/Dishes";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Offers from "../components/offers/Offers";

const PopularDishesPage = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <Dishes/>
            <Offers/>
        </div>
    )
}

export default PopularDishesPage;