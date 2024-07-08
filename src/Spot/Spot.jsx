import { Link } from "react-router-dom";

const Spot = ({ spot }) => {
    const { _id, photo, SpotName, country, location, description, cost, seasonality, travelTime, totalVisitorsPerYear, email, userName } = spot;
    return (
        <div data-aos="zoom-in-up">
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl md:h-60 lg:h-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Spot Name:{SpotName}</h2>
                    <p>Country: {country}</p>
                    <div className=" ">
                        <div className="">
                            <p> Average Costs: {cost}$ </p>
                            <p>Total Visitors Per Year: {totalVisitorsPerYear}</p>
                        </div>
                        <div className="">
                            <p> Travel Time: {travelTime}$ </p>
                            <p>Seasonality: {seasonality}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <Link
                            to={`/viewDetails/${_id}`}
                            className="btn btn-primary bg-[#cfa25a] border-none text-white hover:bg-[#836535] ">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spot;