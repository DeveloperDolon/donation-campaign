import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Componentes/NavBar/NavBar";
import Banner from "../Componentes/Banner/Banner";
import "../../index.css"
import { createContext, useEffect, useState } from "react";

export const SearchCategoryContext = createContext();

const MainLayout = () => {
    const location = useLocation();

    const [showDropdown, setShowDropdown] = useState(false);
    
    const [searchingCategory, setSearchingCategory] = useState("");

    useEffect(() => {

        if(location.pathname === "/") {
            document.title = `Donation Campaign - Home`;
            return;
        }
        const pathName = location.pathname.replace("/", "");
        document.title = `Donation Campaign - ${pathName}`


        return () => {
            document.title = "Donation Campaign";
        }
    }, [location.pathname]);
    
    return (
        <SearchCategoryContext.Provider value={{searchingCategory, setSearchingCategory}}>
            <div onClick={(e) => {
                e.stopPropagation();
                setShowDropdown(false);
            }}>
                <div
                    className={`${location.pathname === "/" ? "banner-bg" : ""}`}
                >
                    <div className="max-w-7xl mx-auto lg:px-0 px-5 z-20">
                        <NavBar showDropdown={showDropdown} setShowDropdown={setShowDropdown}></NavBar>
                        {
                            location.pathname === "/" ? <Banner></Banner> : ""
                        }
                    </div>
                </div>

                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </SearchCategoryContext.Provider>
    )
}


export default MainLayout;