import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const DonationItem = () => {

    const [donationItem, setDonationItem] = useState({});

    const {id} = useParams();
    
    const allData = useLoaderData();

    useEffect(() => {
        const findData = allData?.find(item => item.id === parseInt(id));
        setDonationItem(findData);

    }, [id, allData]);


    return (
        <div className="max-w-7xl mx-auto px-8">
            <div className="lg:w-[100%] md:w-[80%] w-full mx-auto mt-14 relative overflow-hidden
            ">
               <img className="w-full rounded-2xl" src={donationItem.image} alt="" />
               <div style={{background: "rgba(11, 11, 11, 0.50)"}} className="absolute w-full bottom-0 p-10 rounded-b-2xl">
                <button style={
                    {
                        background: donationItem.colors?.text_color,
                        color: "white",
                        padding: "15px 30px",
                        borderRadius: "10px"
                    }
                }>Donate ${donationItem.price}</button>
               </div>
            </div>

            <div className="mb-32">
                <h1 className="mt-10 text-4xl font-semibold">{donationItem.title}</h1>
                <p className="mt-7 leading-relaxed">
                    {donationItem.description}
                </p>
            </div>
        </div>
    );
};

export default DonationItem;