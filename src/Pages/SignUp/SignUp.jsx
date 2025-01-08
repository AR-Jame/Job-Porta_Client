import { useContext, useState } from 'react';
import loginPic from '../../assets/login.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import Swal from 'sweetalert2';
const SignUp = () => {
    const { signUp, updateUser, setUser, user } = useContext(AuthContext)
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [confirmPassErr, setConfirmPassErr] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const ConfirmPassword = form.ConfirmPassword.value
        setEmailErr('');
        setPasswordErr('');
        setConfirmPassErr('');

        if (password !== ConfirmPassword) {
            return setConfirmPassErr('Please match the two passWord')
        }
        if (password.length < 6) {
            return setPasswordErr('Your password should have at least six char of long')
        }

        signUp(email, password)
            .then(() => {
                Swal.fire({
                    title: "Thanks for Join",
                    text: "You successfully join with us!!!!",
                    icon: "success"
                });
                updateUser(name)
                    .then(() => {
                        setUser(() => {
                            setUser({ ...user, displayName: name })
                        })
                    })
                form.reset()
                navigate('/')
            }).catch((err) => {
                console.log(err)
                if (err.message === 'Firebase: Error (auth/invalid-email).') {
                    setEmailErr('Please Enter a valid email address')
                } else {
                    setEmailErr(err.message)
                }
            });
    }
    return (
        <div className='flex flex-col-reverse mt-10 lg:mt-0 lg:flex-row justify-center items-center gap-16 lg:h-[89vh] lg:mx-[10%] md:mx-[7%] mx-[10%]'>
            <div className=''>
                <img src={loginPic} className='w-full' />
            </div>
            <div className='w-full'>
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg p-8 shadow-lg">
                    <h3 className="text-2xl text-center font-semibold mb-8">Sign Up</h3>

                    {/* Name input Box */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name='name'
                            placeholder="Enter Your Name"
                            className="w-full h-14 border border-gray-300 rounded-lg bg-gray-100 px-4 text-lg focus:outline-none focus:border-indigo-500 transition"
                        />
                    </div>

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
                    {emailErr && <p className='-mt-3 mb-3 text-red-400'>{emailErr}</p>}
                    {/* Password input box */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor="password" className="font-medium">
                                Password
                            </label>
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
                    {passwordErr && <p className='-mt-3 mb-3 text-red-400'>{passwordErr}</p>}
                    {/* Password Confirmation input box */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor="password" className="font-medium">
                                Confirm Password
                            </label>
                        </div>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Enter your password"
                            name='ConfirmPassword'
                            required
                            className="w-full h-14 border border-gray-300 rounded-lg bg-gray-100 px-4 text-lg focus:outline-none focus:border-indigo-500 transition"
                        />
                    </div>
                    {confirmPassErr && <p className='-mt-3 mb-3 text-red-400'>{confirmPassErr}</p>}

                    {/* Login button */}
                    <button
                        type="submit"
                        className="w-full h-14 bg-indigo-600 text-white rounded-lg font-semibold text-lg uppercase hover:bg-indigo-500 transition"
                    >
                        Sign Up
                    </button>

                    <p className="text-center text-gray-500 font-medium mt-4">
                        Already have an account?{' '}
                        <Link to='/login' className="text-indigo-600 hover:underline">
                            Log In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;