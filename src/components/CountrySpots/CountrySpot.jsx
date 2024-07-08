import { Link } from "react-router-dom";

const CountrySpot = ({ _country }) => {
    const {_id,image,country,description}=_country;
    return (
        <div>
            <div className=" " >
                <Link to={`/countryPlace/${_id}`} >
                <div  className="card card-compact bg-base-100 shadow-xl pt-10 btn w-full h-full">
                    <figure><img className=" h-80 rounded-lg" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{country}</h2>
                        <p>{description}</p>
                    </div>
                </div></Link>
            </div>
        </div>
    );
};

export default CountrySpot;