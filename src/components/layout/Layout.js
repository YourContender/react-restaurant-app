import Header from "../header/Header";
import Nav from "../nav/Nav";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <Outlet/>
        </>
    )
}

export default Layout;