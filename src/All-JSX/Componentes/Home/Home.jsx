import { useLoaderData } from "react-router-dom";
import DonationItems from "../DonationItem/DonationItems";
import { useContext, useEffect, useState } from "react";
import { SearchCategoryContext } from "../../Layout/MainLayout";


const Home = () => {
    const donationItems = useLoaderData();

    const {searchingCategory} = useContext(SearchCategoryContext);
    const [searchingItems, setSearchingItems] = useState(donationItems);

    useEffect(() => {
        if(searchingCategory.toUpperCase() === "ALL" || searchingCategory === "" ) {
            setSearchingItems(donationItems);
            return;
        }
        const newArr = donationItems.filter(item => item.category.toLowerCase() === searchingCategory.toLowerCase());
        setSearchingItems(newArr);
    },[searchingCategory]);

    return (
        <div className="mt-32 mb-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto lg:px-0 px-5">
            {
                searchingItems.length > 0 ? searchingItems.map(item => <DonationItems key={item.id} item={item}></DonationItems>) : <div className="h-[20vh] flex justify-center items-center col-span-4 text-2xl font-semibold">Sorry invalid search...</div>
            }
            </div>
        
        </div>
    );
};

export default Home;