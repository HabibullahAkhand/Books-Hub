import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Root = () => {
    AOS.init();

    return (
        <div >
            <Navbar></Navbar>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;