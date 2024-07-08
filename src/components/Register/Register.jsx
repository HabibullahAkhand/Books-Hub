import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";
import bg from "../../assets/bg-login.jpg"
const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const url = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, url, password);

        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters.')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one lower case characters.')
            return;
        }

        // create user in firebase
        createUser(email, password)
            .then(() => {
                Swal.fire("Successfully register");
                updateUserProfile(name, url)
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Register || Books Hub</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            


            <div className="hero min-h-screen flex justify-around" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-semibold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    name="photo"
                                    placeholder="Photo URL"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" required placeholder="Password" className="input input-bordered" />
                                <span className="absolute top-12 pt-1 right-3" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }

                                </span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#cfa25a] border-none text-white hover:bg-[#836535]">Register</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-700">{registerError}</p>
                        }
                        <p> Already have account? Please <Link to="/login">
                            <button className="btn btn-link ">Login</button>
                        </Link> </p>
                    </div>
                </div>
            </div>
            <div className=""></div>

            </div>




        </div>
    );
};

export default Register;