import { useEffect, useState } from "react";
import Spot from "../../Spot/Spot";
import { Helmet } from "react-helmet";

const AllTouristsSpot = () => {
    const [spots, setSpots] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://hello-world-server.vercel.app/tourists")
            .then(res => res.json())
            .then(data => {
                setSpots(data);
                setIsLoading(false);
            });
    }, []);

    const handleClickSortLTH = () => {
        const sorted = [...spots].sort((a, b) => a.cost - b.cost);
        setSpots(sorted);
    }

    const handleClickSortHTL = () => {
        const sorted = [...spots].sort((a, b) => b.cost - a.cost);
        setSpots(sorted);
    }

    const handleClickNoSort = () => {
        setIsLoading(true); // Set loading to true before fetching data
        fetch("https://hello-world-server.vercel.app/tourists")
            .then(res => res.json())
            .then(data => {
                setSpots(data);
                setIsLoading(false); // Set loading to false after data is fetched
            });
    }

    return (
        <div className="bg-[#28A993]">
            <Helmet>
                <title>Home || All Tourists Spot</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="container mx-auto ">
                <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold pb-8 text-center">All Tourists Spot</h1>
                <div className="text-center">
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn m-1 btn-secondary">Sort All Tourists Spot Average Cost</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#28A993] text-white rounded-box w-52">
                            <li><a onClick={handleClickNoSort}>Default</a></li>
                            <li><a onClick={handleClickSortLTH}>Sort Low to High</a></li>
                            <li><a onClick={handleClickSortHTL}>Sort High to Low</a></li>
                        </ul>
                    </div>
                </div>
                {isLoading ? ( // Conditionally render loading spinner
                    <div className="text-center"><span className="loading loading-dots loading-lg "></span></div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-3 pb-8">
                        {spots.map((spot) => <Spot key={spot._id} spot={spot}></Spot>)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllTouristsSpot;
