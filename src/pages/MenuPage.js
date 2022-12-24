import Menu from "../components/menu/Menu";
import Nav from "../components/nav/Nav";
import { Request } from "../request";

function MenuPage() {
    let data = new Request();

    
    return (
        <div>
            <Nav/>
            <Menu/>
        </div>
    )
}

export default MenuPage;