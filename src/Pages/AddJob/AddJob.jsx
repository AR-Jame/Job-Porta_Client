import Swal from 'sweetalert2';
import post from '../../assets/post.png'
import useAxios from '../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';

const AddJob = () => {
    const axiosBase = useAxios();
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const email = user.email;
    const handleJobAdd = (e) => {
        e.preventDefault()
        const form = e.target;
        const jobTitle = form.jobTitle.value;
        const category = form.category.value;
        const location = form.location.value;
        const timing = form.timing.value;
        const minLen = form.minLen.value;
        const maxLen = form.maxLen.value;
        const description = form.description.value
        const companyInfo = form.info.value;
        const companyName = form.companyName.value;
        const requirement = form.requirement.value;
        const deadline = form.deadline.value;
        const data = {
            jobTitle,
            category,
            location,
            timing,
            minLen,
            maxLen,
            companyInfo,
            description,
            email,
            companyName,
            requirement,
            deadline

        }
        axiosBase.post('/jobs', { data })
            .then(() => {
                Swal.fire({
                    title: "Great!!!",
                    text: "You successfully post a job!!",
                    icon: "success"
                });
                form.reset();
                navigate('/myPost')
            }
            )


    }
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 justify-center min-h-[89vh] px-4 lg:mx-[10%] mx-[7%]">
            <div className=''>
                <img src={post} className='w-full' />
            </div>
            <div className="w-full max-w-[700px] bg-white rounded-lg shadow-lg">
                <header className="text-2xl font-semibold border-b text-center border-gray-300 px-6 py-4">
                    Post a New Job
                </header>
                <form onSubmit={handleJobAdd} className="px-6 py-8 space-y-4">
                    <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-4">
                        <div className="relative flex-1">
                            <input
                                required
                                type="text"
                                name="jobTitle"
                                placeholder="Enter the Job title"
                                className="w-full h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                required
                                type="text"
                                name="location"
                                placeholder="Enter the Job location"
                                className="w-full h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-4">

                        <div className="flex-1">
                            <select required name='category' className='w-full h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]'>
                                <option hidden>Select Your category</option>
                                <option value="Graphics Design">Graphics Design</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Ai Engineer">Ai Engineer</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <select name='timing' required className='w-full h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]'>
                                <option hidden>Timing</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                            </select>
                        </div>
                        <div className="relative flex-1">
                            <input
                                required
                                type="date"
                                name="deadline"
                                placeholder="Application deadline"
                                className="w-full h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-4">
                        <div className="flex-1">
                            <input
                                required
                                type="text"
                                name="companyName"
                                placeholder="Enter company name"
                                className="w-full h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                required
                                type="number"
                                name="minLen"
                                placeholder="Enter minimum salary"
                                className="w-full h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                required
                                type="number"
                                name="maxLen"
                                placeholder="Enter maximum salary"
                                className="w-full h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                            />
                        </div>
                    </div>

                    <div className="">
                        <textarea
                            name="description"
                            placeholder="Write your job description"
                            className="w-full min-h-[130px] max-h-[230px] p-4 pl-4 text-base border border-gray-300 rounded-md outline-none resize-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                        />
                    </div>
                    <div className="">
                        <textarea
                            name="info"
                            placeholder="Write your company info"
                            className="w-full min-h-[130px] max-h-[230px] p-4 pl-4 text-base border border-gray-300 rounded-md outline-none resize-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                        />
                    </div>
                    <div className="">
                        <textarea
                            name="requirement"
                            placeholder="Write your job requirement"
                            className="w-full min-h-[130px] max-h-[230px] p-4 pl-4 text-base border border-gray-300 rounded-md outline-none resize-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                        />
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <button
                            type="submit"
                            className="w-full px-6 py-3 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                        >
                            Post A New Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;