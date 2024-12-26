import loginPic from '../../assets/login.png'
import google from '../../assets/google.png'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const { signIn, googlLogin, passReset } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err.message)
                if (err.message === 'Firebase: Error (auth/invalid-credential).') {
                    setError('your data is not Found...')
                } else {
                    setError(err.message)
                }
            });
    }
    const handleGoogle = () => {
        googlLogin()
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });
    }

    const handleForgot = () => {
        Swal.fire({
            title: "Forget Password??",
            text: "Type your password",
            icon: "info",
            input: "text",
        });
        Swal.fire({
            title: "Forget your password??",
            text: "Inter your password",
            icon: "info",
            input: 'text',
            showCancelButton: true,
            confirmButtonText: "sent",
            preConfirm: (data) => {
                console.log(data)
                passReset(data)
                    .then(() => {
                        Swal.fire({
                            title: "Recovery email sent!!!",
                            text: `Email sent in ${data}`,
                            icon: "success"
                        });
                    })
                    .catch(() => {
                        Swal.fire({
                            title: "",
                            text:'Anything might be wrong!!!',
                            icon: "error"
                        });
                    })
            }
        })

    }

    return (
        <div className="flex flex-col-reverse mt-10 lg:mt-0 lg:flex-row justify-center items-center gap-16 lg:h-[89vh] lg:mx-[10%] md:mx-[7%] mx-[10%]">
            <div className=''>
                <img src={loginPic} className='w-full' />
            </div>
            <div className='w-full'>
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg p-8 shadow-lg">
                    <h3 className="text-2xl text-center font-semibold mb-8">Log in with</h3>

                    <div className="flex justify-between items-center mb-6">
                        {/* Google button */}
                        <div className="w-[calc(100%-12px)]">
                            <a
                                onClick={handleGoogle}
                                className="flex items-center justify-center h-14 gap-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 font-medium hover:bg-gray-200 hover:border-indigo-500 transition"
                            >
                                <img src={google} alt="Google" className="w-6" />
                                <span>Google</span>
                            </a>
                        </div>
                    </div>

                    {/* Login option separator */}
                    <p className="relative text-center text-gray-500 font-medium mb-6">
                        <span className="bg-white px-3 relative z-10">or</span>
                        <span className="absolute inset-0 border-t border-gray-300 top-1/2 transform -translate-y-1/2"></span>
                    </p>

                    {/* Email input box */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            placeholder="Enter email address"
                            required
                            className="w-full h-14 border border-gray-300 rounded-lg bg-gray-100 px-4 text-lg focus:outline-none focus:border-indigo-500 transition"
                        />
                    </div>

                    {/* Password input box */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor="password" className="font-medium">
                                Password
                            </label>
                            <a onClick={handleForgot} className="cursor-pointer text-indigo-600 hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            name='password'
                            required
                            className="w-full h-14 border border-gray-300 rounded-lg bg-gray-100 px-4 text-lg focus:outline-none focus:border-indigo-500 transition"
                        />
                    </div>
                    {error && <p className='-mt-3 mb-3 text-red-400'>{error}</p>}

                    {/* Login button */}
                    <button
                        type="submit"
                        className="w-full h-14 bg-indigo-600 text-white rounded-lg font-semibold text-lg uppercase hover:bg-indigo-500 transition"
                    >
                        Log In
                    </button>

                    <p className="text-center text-gray-500 font-medium mt-4">
                        Don’t have an account?{' '}
                        <Link to='/signUp' className="text-indigo-600 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>

        </div>
    );
};

export default Login;