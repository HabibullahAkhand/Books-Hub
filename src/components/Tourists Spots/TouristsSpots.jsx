import { useEffect, useState } from "react";
import Spot from "../../Spot/Spot";
import { Link } from "react-router-dom";

const TouristsSpots = ({theme}) => {
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

    const newSpots = spots.slice(0, 6);

    return (
        <div className={`${theme}`}>
            <div className="container mx-auto ">
                <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold mb-8 text-center text-white"> Tourists Spots </h1>
                <p className="w-3/4 text-center mx-auto mb-7 text-white">Explore enchanting tourist spots worldwide! From pristine beaches to historic landmarks, delve into diverse cultures, breathtaking landscapes, and unforgettable experiences. Whether you seek adventure or tranquility, these destinations promise to captivate your senses and create cherished memories. Embark on a journey of discovery and wonder today!</p>
                
                {isLoading ? (
                    <div className="text-center"><span className="loading loading-dots loading-lg "></span></div>
                ) : (
                    <>
                        <div className="grid md:grid-cols-2 gap-3 ">
                            {newSpots.map((spot) => <Spot key={spot._id} spot={spot}></Spot>)}
                        </div>
                        {spots.length > 6 && (
                            <div className="text-center mt-7">
                                <Link to='/allTouristsSpots'>
                                    <button className="text-white btn btn-secondary">Show All Tourists Spots</button>
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default TouristsSpots;
