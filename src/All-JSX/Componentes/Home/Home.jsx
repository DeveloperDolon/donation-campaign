import { useLoaderData } from "react-router-dom";
import DonationItems from "../DonationItem/DonationItems";

const Home = () => {

    const donationItems = useLoaderData();

    return (
        <div className="mt-32 mb-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto lg:px-0 px-5">
            {
                donationItems?.map(item => <DonationItems key={item.id} item={item}></DonationItems>)
            }
            </div>
        
        </div>
    );
};

export default Home;