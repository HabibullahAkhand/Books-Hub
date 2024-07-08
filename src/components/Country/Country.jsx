import { useEffect, useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import CountrySpot from '../CountrySpots/CountrySpot';
const Country = ({ theme }) => {
    const [Country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://hello-world-server.vercel.app/Country")
            .then(res => res.json())
            .then(data => {
                setCountry(data);
                setIsLoading(false);
            });
    }, []);
    // console.log(Country);
    return (
        <div className={`${theme}`}>
            <div className="">
                <h1 className='lg:text-6xl md:text-4xl text-2xl font-bold pb-8 text-center text-white pt-10'>Southeast Asia Country</h1>
                <p className='w-2/3 text-center mx-auto text-white'>Southeast Asia is a diverse region of lush landscapes, vibrant cultures, and bustling economies. From ancient temples to bustling markets, it blends tradition with modernity. Despite challenges like poverty and environmental issues, its dynamism and beauty captivate visitors worldwide.</p>

                <div className="">
                    {isLoading ? (
                        <div className="text-center"><span className="loading loading-dots loading-lg "></span></div>
                    ) : (
                        <>
                            <div className="grid  md:grid-cols-2 gap-3 container mx-auto pt-10">
                                {Country.map((country) => <CountrySpot key={country._id} _country={country}></CountrySpot>)}
                            </div>
                        </>
                    )}
                </div>
            </div>


        </div>
    );
};

export default Country;