import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { SearchCategoryContext } from "../../Layout/MainLayout";

const useInputState = (defaultVal = null) => {
    const [value, setValue] = useState(defaultVal);

    
    const handleChange = (e) => {
        if(e.target.value.length > 0) {
            setValue(e.target.value);
        }else if(e.target.value === "") {
            setValue("ALL");
        }
    }

    return [
        value, 
        handleChange
    ]
}


const Banner = () => {

    const {setSearchingCategory} = useContext(SearchCategoryContext);
    const [searchVal, handleSearchVal] = useInputState("All");

    const handleSearch = () => {
        setSearchingCategory(searchVal);
    }

    return (
        <div className="h-[calc(100vh-109px)] flex items-center justify-center flex-col">
            <h1 className="md:text-5xl text-xl font-bold">I Grow By Helping People In Need</h1>

            <div className="w-full flex justify-center items-center mt-10">
                <input onChange={handleSearchVal} className="md:px-5 px-3 md:w-[35%] w-[50%] md:py-5 py-3 border-2 md:text-lg text-xs focus:outline-none rounded-l-lg" type="text" placeholder="Search here" />
                <button onClick={handleSearch} className="md:px-10 px-7  md:py-5 py-3 rounded-r-lg bg-[#FF444A] text-white md:text-lg text-xs font-semibold">Search</button>
            </div>
        </div>
    );
};

export default Banner;

Banner.propTypes = {
    setSearchingCategory: PropTypes.func,
}