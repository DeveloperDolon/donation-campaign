
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Donation = ({item}) => {

    const {id, image, category, title, price, colors} = item; 

    return (
        <div style={{background: colors.background_color}} className="flex rounded-md">
            <div className="w-[40%]">
                <img className="h-full w-full rounded-l-md" src={image} alt="" />
            </div>

            <div className="flex flex-col justify-between p-5 gap-3">
                <p style={{background: colors.category_bg, color: colors.text_color}} className="px-3 py-2 rounded-md w-fit">
                    {category}
                </p>

                <h1 className="text-xl font-semibold">{title}</h1>

                <h3 style={{color: colors.text_color}} className="font-bold">${price}.00</h3>

                <div>
                    <Link to={`/donation-item/${id}`} style={{background: colors.text_color}} className="text-white px-5 py-2 font-semibold rounded-md text-sm">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Donation;

Donation.propTypes = {
    item: PropTypes.object
}