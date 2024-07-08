import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
// import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import {Helmet} from "react-helmet";
import Swal from 'sweetalert2'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import bg from "../../assets/bg-login.jpg"
const Login = () => {

    const { signInUser, signInWithGoogle, signInWithGithub, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    console.log(user);
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                Swal.fire("Successfully login");
                navigate('/');
            })
            .catch(error => {
                // toast(" This email and password not match")
                Swal.fire("please try again");
                console.error(error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                // alert('Google sign in successfully done')
                Swal.fire("Successfully login");
                // toast.success('Successfully toasted!')
                navigate('/');
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                console.log('log in done');
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire("Successfully login");
                navigate('/');

            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
             <Helmet>
                <title>Login || Books Hub</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            {/* < ToastContainer /> */}

            {/* <img src={bg} alt="" /> */}

            <div className="hero min-h-screen flex justify-around" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-3xl md:text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control relative ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" required placeholder="password" className="input input-bordered" />
                                <span className="absolute top-12 right-3 pt-1" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }

                                </span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#cfa25a] border-none text-white hover:bg-[#836535]">Login</button>
                            </div>
                        </form>
                        <p> New to this site? Please <Link to="/register">
                            <button className="btn btn-link">Register</button>
                        </Link> </p>
                        <div className="flex gap-3">
                        <p><button onClick={handleGoogleSignIn} className="btn  w-full"><FcGoogle />Google</button></p>
                        <p><button onClick={handleGithubSignIn} className="btn w-full"><FaGithub />Github</button></p>

                        </div>
                    </div>
                </div>
            </div>
            <div className=""></div>

            </div>


        </div>
    );
};

export default Login;