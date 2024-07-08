import { IoLocationSharp } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-base-300 ">
            <div className="container mx-auto p-10">
            <footer className="footer   text-base-content">
                <div className="">
                    <h3 className="text-3xl opacity-70 font-bold">About Our Books Hub</h3>
                    <p className="max-w-sm">Tourism Management involves planning, organizing, and managing activities related to travel and hospitality, ensuring memorable experiences for travelers.</p>
                </div>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Travel arrangements</a>
                    <a className="link link-hover">Accommodation booking</a>
                    <a className="link link-hover">Tour packages</a>
                    <a className="link link-hover">Event planning</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Useful Links</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Destinations</a>
                    <a className="link link-hover">Travel guides</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Details</h6>
                    <div className="grid">
                        <a href="" className="flex gap-3 mb-3"><span><IoLocationSharp /></span>Main Street, Tourism City, TC 12345, USA</a>
                        <a href="" className="flex gap-3 mb-3"><span><RiMessage2Line /></span>info@tourismmanagement.com</a>
                        <a href="" className="flex gap-3 mb-3"><span><MdPhoneInTalk /></span>(123) 456-7890</a>
                        <a href="" className="flex gap-3 mb-3"><span><MdOutlineTimer /></span>Mon-Friday: 9am to 5pm</a>
                        <a href="" className="flex gap-3 mb-3"><span><MdOutlineTimer /></span>Sat-Sunday: Closed</a>
                    </div>
                </nav>
            </footer>
            
            <div className=" border-black text-center">
                <a href="">Books Hub. All rights reserved.</a>
            </div>
        </div>
        </div>
    );
};

export default Footer;
