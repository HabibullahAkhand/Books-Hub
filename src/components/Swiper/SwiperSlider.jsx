import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperSlider = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >



                <SwiperSlide>
                    <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/87Xmp9x/424974.jpg)' }}>
                        <div className="hero-overlay rounded-lg"></div>
                        <div className="hero-content  text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold  text-white">Tour Packages</h1>
                                <p className="mb-5 text-white">Embark on unforgettable journeys with our curated tour packages. From exotic destinations to cultural experiences, our tours offer the perfect blend of adventure and relaxation. Discover the world with us!</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/fCMYCNw/437797.jpg)' }}>
                        <div className="hero-overlay rounded-lg"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold text-white">Travel Consultation</h1>
                                <p className="mb-5 text-white">Seek expert advice and personalized recommendations from our travel consultants. Whether you're planning a solo adventure or a group trip, we're here to guide you every step of the way. Let's turn your travel dreams into reality!</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/NVW8m6m/735066.jpg)' }}>
                        <div className="hero-overlay rounded-lg"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold text-white">Destination Experiences</h1>
                                <p className="mb-5 text-white">Immerse yourself in the beauty and culture of our handpicked destinations. Whether it's exploring ancient ruins, indulging in local cuisine, or embarking on thrilling adventures, our destination experiences promise unforgettable memories.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/bX5yb47/wallpaperflare-com-wallpaper-12.jpg)' }}>
                        <div className="hero-overlay rounded-lg"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold text-white">Customer Testimonials</h1>
                                <p className="mb-5 text-white">Discover what our satisfied customers have to say about their travel experiences with us. From breathtaking sights to exceptional service, our testimonials speak volumes about the quality and care we provide. Join our community of happy travelers!</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperSlider;
