import PropTypes from "prop-types";

const DonationItem = ({ item }) => {
    const { id, category, title, image, colors } = item;
    const {background_color, text_color, category_bg} = colors;
    return (
            <div style={{background: background_color}} className={`rounded-lg`}>
                <figure><img  className="w-full" src={image} alt={category} /></figure>
                <div className="card-body p-5">
                    <p style={{
                        background: category_bg,
                        color: text_color
                    }} className={`w-fit py-1 px-3 font-semibold rounded-md`}>{category}</p>
                    <h2
                    style={{color: text_color}}
                    className={`card-title`}>{title}</h2>
                </div>
            </div>
    );
};

export default DonationItem;

DonationItem.propTypes = {
    item: PropTypes.object
}