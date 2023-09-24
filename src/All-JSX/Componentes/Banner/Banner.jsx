
const Banner = () => {
    return (
        <div className="h-[calc(100vh-109px)] flex items-center justify-center flex-col">
            <h1 className="md:text-5xl text-xl font-bold">I Grow By Helping People In Need</h1>

            <div className="w-full flex justify-center items-center mt-10">
                <input className="md:px-5 px-3 md:w-[35%] w-[50%] md:py-5 py-3 border-2 md:text-lg text-xs focus:outline-none rounded-l-lg" type="text" placeholder="Search here" />
                <button className="md:px-10 px-7  md:py-5 py-3 rounded-r-lg bg-[#FF444A] text-white md:text-lg text-xs font-semibold">Search</button>
            </div>
        </div>
    );
};

export default Banner;