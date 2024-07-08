import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Spot from "../../Spot/Spot";
import MutchedCountry from "../MatchedCountry/MutchedCountry";


const CountryPlace = () => {
    const { id } = useParams();
    const _country = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);
    // console.log(id);
    const [allCountry, setAllCountry] = useState([]);
    const specificCountry = _country.filter(item => item?._id == id)
    // console.log(specificCountry[0].country);
    const selectedCountry = specificCountry[0].country;

    useEffect(() => {
        fetch('https://hello-world-server.vercel.app/tourists')
            .then(res => res.json())
            .then(data => {
                setAllCountry(data)
                setIsLoading(false);
    });
    }, [])
    const matchedData = allCountry.filter(item => item?.country == selectedCountry)
    // console.log(matchedData, "kjsdkf");
    // console.log(Object.keys(matchedData[0]).join(","));

    return (
        <div className='bg-[#28A993]'>
            <div className="container mx-auto">
            <div className="container mx-auto ">
                <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold pb-8 text-center">All Tourists Spot in {selectedCountry} </h1>
                {isLoading ? ( // Conditionally render loading spinner
                    <div className="text-center"><span className="loading loading-dots loading-lg "></span></div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-3 pb-8">
                        {matchedData.map((mCountry) => <MutchedCountry key={mCountry._id} mCountry={mCountry}></MutchedCountry>)}
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default CountryPlace;