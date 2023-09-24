import { useLoaderData } from "react-router-dom";
import DonationItem from "../DonationItem/DonationItem";

const Home = () => {

    const donationItems = useLoaderData();

    return (
        <div className="mt-32 mb-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto lg:px-0 px-5">
            {
                donationItems?.map(item => <DonationItem key={item.id} item={item}></DonationItem>)
            }
            </div>
            
        </div>
    );
};

export default Home;