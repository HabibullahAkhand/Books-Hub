import { Helmet } from "react-helmet";
import bg from "../../assets/bg-login.jpg"

const Contact = () => {
    return (
        <div className="">
            <Helmet>
                <title>Home || Books Hub</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className="hero min-h-screen flex justify-around" style={{ backgroundImage: `url(${bg})` }}>
            <div className="lg:grid container mx-auto lg:grid-cols-4 gap-8 mt-6 md:mt-10 space-y-5">
                <div className="col-span-3">
                    <h1 className="p-8 text-xl font-bold lg:text-5xl md:lg:text-3xl ">Contact Us</h1>
                    <hr />
                    <div className="mt-8 space-y-5">
                        <p>Welcome to our Tourism Management website, your gateway to unforgettable journeys and seamless travel experiences. Explore our meticulously curated selection of destinations, from exotic getaways to cultural treasures, each offering a blend of adventure, relaxation, and discovery. With expertly crafted itineraries, personalized services, and insider tips, were here to turn your travel dreams into reality. Whether you seek pristine beaches, historic landmarks, or vibrant cityscapes, let us guide you on a journey of exploration and wonder. Start planning your next adventure with us today!</p>
                        <p><span className="font-bold">Email: </span>contact@example.com</p>
                        <p><span className="font-bold">Phone: </span> (123) 456-7890</p>
                        <p><span className="font-bold">Fax: </span>  +123-456-7891</p>
                        <p><span className="font-bold">Address: </span>
                            Books Hub ,
                            123 Main Street,
                            Tourism City,
                            TC 12345, USA</p>
                    </div>
                    <div className="lg:flex gap-4 my-10">
                        <form className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text"
                                    name="name"
                                    placeholder="Your First Name"
                                    required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text"
                                    name="name"
                                    placeholder="Your Last Name"
                                    required className="input input-bordered" />
                            </div>
                            
                        </form>
                        <form className="flex-1">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address:</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    name="Email"
                                    placeholder="Email Address"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    type="Number"
                                    required
                                    name="Phone"
                                    placeholder="Phone number"
                                    className="input input-bordered" />
                            </div>
                        </form>

                    </div>
                    <p className="font-semibold">How may we help you?</p>
                    <textarea placeholder="Help me Understand How can help you?" className="textarea textarea-bordered textarea-lg w-full mb-10" ></textarea>
                    <button onClick={()=>{alert('submitted successfully done')}} className="btn btn-primary bg-[#cfa25a] border-none md:mb-10 text-white hover:bg-[#836535] w-full" >Submit</button>
                </div>
                <div className="col-span-1 space-y-3">
                    <div className="p-8 text-xl font-bold lg:text-2xl bg-white rounded-lg">
                        Call Us At (123) 456-7890
                    </div>
                    <div className="">
                        <img src='https://i.ibb.co/TcV2HDY/contact-us-image.jpg' className="rounded-lg" alt="" />
                    </div>
                </div>
            </div>
                <div className=""></div>
            </div>
        </div>
    );
};

export default Contact;