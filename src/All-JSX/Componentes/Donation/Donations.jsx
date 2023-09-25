import { useEffect, useState } from "react";
import { getLocalDonateID } from "../../LocalStorage/localStorage";
import { useLoaderData } from "react-router-dom";
import Donation from "./Donation";

const Donations = () => {

    const storedDonationId = getLocalDonateID();
    const allData = useLoaderData();
    const [donations, setDonations] = useState([]);
    const [donateLength, setDonateLength] = useState(4);

    useEffect(() => {
        const donationItems = allData.filter(item => storedDonationId.includes(item.id))
        
        setDonations(donationItems);
    }, []);

    const handleClick = () => {
        if(donateLength === donations.length) {
            setDonateLength(4);
            return
        }
        setDonateLength(donations.length);
    }

    
    return (
        <div className="max-w-7xl mx-auto lg:p-0 p-5 mb-36 mt-20">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">

                {
                    donations.length > 0 ? donations.slice(0, donateLength).map(item => <Donation key={item.id} item={item}>
                    </Donation>) : <div className="flex h-[35vh] justify-center items-center text-2xl font-semibold col-span-2">Donation Empty</div>
                }

            </div>

            <div className="flex justify-center mt-14">
                {
                    donations.length > 4 ? <button onClick={handleClick} className="bg-green-700 text-white px-7 py-3 rounded-md">
                        {donateLength === 4 ? "See All" : "See Less"}
                    </button> : ""
                } 
            </div>
        </div>
    );
};

export default Donations;