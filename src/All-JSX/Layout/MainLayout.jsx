import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Componentes/NavBar/NavBar";
import Banner from "../Componentes/Banner/Banner";
import "../../index.css"


const MainLayout = () => {
    const location = useLocation();



    return (
        <div>
            <div
                className={`${location.pathname === "/" ? "banner-bg" : ""}`}
            >
                <div className="max-w-7xl mx-auto lg:px-0 px-5 z-20">
                    <NavBar></NavBar>
                    {
                        location.pathname === "/" ? <Banner></Banner> : ""
                    }
                </div>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}


export default MainLayout;