import React, { useEffect, useState } from 'react';
import SwiperSlider from '../Swiper/SwiperSlider';
import { Helmet } from "react-helmet";
import TouristsSpots from '../Tourists Spots/TouristsSpots';
import Contact from '../Contact/Contact';
import Holiday from '../Holiday/Holiday';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import Country from '../Country/Country';

const Home = () => {
    const [estates, setEstates] = useState([]);
    const [theme, setTheme] = useState('bg-[#28A993]'); // State to track current theme

    useEffect(() => {
        fetch("estates.json")
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [estates]);

    // Function to toggle between dark and light themes
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'bg-[#28A993]' ? 'bg-black' : 'bg-[#28A993]'));
        console.log(theme);
    };

    return (
        <div >
            <div className="relative container mx-auto ">
            <button className='absolute z-10 bg-white rounded-full p-2 text-3xl' onClick={toggleTheme}>
                {theme === 'bg-[#28A993]' ? <MdDarkMode /> : <CiLight />}

            </button>
            </div>
            
            <SwiperSlider />
            <Helmet>
                <title>Home || Books Hub</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <TouristsSpots theme={theme}/>
            <Country theme={theme}></Country>
            <Holiday theme={theme}/>
            <Contact />
            {/* Theme toggle button */}
            
        </div>
    );
};

export default Home;
