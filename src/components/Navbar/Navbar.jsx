import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import profile from "../../assets/profile-circle-icon-2048x2048-cqe5466q.png"
import Lottie from "lottie-react";
import logolottie from "../../../public/logolottie.json";
import { Tooltip } from "react-tooltip";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => alert('user logged out successfully now'))
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allTouristsSpots">All Tourists Spot</NavLink></li>
        {user && <>
            {/* <li><NavLink to="/myList">My List</NavLink></li> */}
        </>}
    </>

    return (
        <div className="bg-[#28A993] ">
            <div className="navbar container mx-auto  rounded-lg ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <Link className="font-semibold normal-case text-xl" to='/'>
                            Books Hub
                        </Link>
                        <Lottie style={{ width: "80px" }} animationData={logolottie}></Lottie>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">

                    {
                        user ? <>
                            {/* <span>{user.email}</span> */}
                            <a onClick={handleLogOut} className="btn btn-sm">Sign out</a>
                        </>
                            : <Link to="/login">
                                <button className="btn btn-sm">Login</button>
                            </Link>
                    }
                    <div >
                        <img id="hoverTooltip" className="bg-white w-8 h-8 mr-4 rounded-full" src={user ? user?.photoURL : profile} alt="" />
                        <Tooltip style={{ zIndex: "20" }} anchorSelect="#hoverTooltip">
                            {(user?.displayName)}
                        </Tooltip>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;