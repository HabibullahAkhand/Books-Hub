import { useEffect, useState } from "react";
import 'animate.css';

const Holiday = ({theme}) => {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch("../../../public/HoliDay.json")
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])


    return (
        <div className={`${theme}`}>
            <div className="container mx-auto">
                <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-center pt-20 text-white">BEST HOLIDAY PACKAGES</h1>
                <p className="w-2/3 text-center mx-auto text-white">Experience the ultimate getaway with our curated selection of the best holiday packages. From the mesmerizing Sundarbans in Bangladesh to the vibrant streets of Bangkok in Thailand, and the serene beaches of Bali in Indonesia, embark on unforgettable journeys across Southeast Asia.</p>
            <div className="space-y-4 mt-20 grid md:grid-cols-2 gap-4">
                {
                    spots.map((bl,idx)=>(<div key={idx} className="hero md:p-4 rounded-lg lg:p-6 bg-white">
                    <div className="hero-content  flex-col lg:flex-row-reverse">
                        <div className="h-72 ">
                        <img src={bl.image} className="h-72 rounded-lg shadow-2xl animate__animated animate__bounceOut animate__slow	2s animate__infinite	infinite" />
                        </div>
                        <div  className=' space-y-3'>
                            <h1 className="text-xl lg:text-2xl md:lg:text-3xl font-bold text-[#cfa25a]">{bl.place_name}</h1>
                            <p>No Of Days:{bl.No_Of_Days} </p>
                            <h3>Cost: {bl.per_Night_Cost}$</h3>
                            <p>peaple:{bl.peaple} </p>
                            <p className="py-6 text-white">{bl.description}</p>
                        <button className="btn btn-success">Booking</button>
                        </div>
                    </div>
                </div>))
                }
            </div>
            </div>
        </div>
    );
};

export default Holiday;