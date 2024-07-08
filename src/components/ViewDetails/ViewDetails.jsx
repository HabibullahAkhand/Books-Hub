import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";
 
const ViewDetails = () => {
    const propertes = useLoaderData();
    const { _id } = useParams();
    console.log(_id);
    const property = propertes.find(property => property._id === _id);
    const {photo,SpotName,country,location,description,cost,seasonality,travelTime,totalVisitorsPerYear} = property;

    
    
    return (
        <div>
            <Helmet>
                <title>View details || Books Hub</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold text-blue-600">{SpotName}</h1>
                        <h1 className="text-3xl font-bold">{country}</h1>
                        <p className="py-6">{description}</p>
                        <p>Cost: {cost}</p>
                        <p>Seasonality: {seasonality}</p>
                        <p>Location: {location}</p>
                        <p>Travel Time: {travelTime} </p>
                        <p>Total Visitors Per Year: {totalVisitorsPerYear} </p>

                        <div className="flex justify-between">

                            <button  className="btn btn-primary bg-[#cfa25a] border-none text-white hover:bg-[#836535]">Reserve</button>
                        <Link
                            to={'/'} 
                            className="btn btn-primary bg-[#cfa25a] border-none text-white hover:bg-[#836535]">Go Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;