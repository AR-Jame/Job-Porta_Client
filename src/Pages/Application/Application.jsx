import { useLoaderData, useNavigate } from "react-router-dom";
import application from '../../assets/rb_2536.png'
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
const Application = () => {
    const data = useLoaderData();
    const navigate = useNavigate()
    const { jobTitle, _id, deadline } = data;
    const axiosBase = useAxios();
    const { user } = useContext(AuthContext);
    const emplyeeEmail = data.email;
    const jobId = _id;
    const handleApplication = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const applicantEmail = form.applicantEmail.value;
        const careerSummary = form.careerSummary.value;
        const skills = form.skills.value;
        const resume = form.resume.value;
        const linkedin = form.linkedin.value ? form.linkedin.value : 'Not Found';
        const application = { name, applicantEmail, careerSummary, skills, resume, linkedin, emplyeeEmail, jobTitle, jobId, deadline }
        axiosBase.post('/application', { application })
            .then(res => {
                form.reset();
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Your successfully apply for a job!",
                        icon: "success"
                    });
                    navigate('/myApplication')
                }
            })
    }
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 justify-center min-h-[89vh] px-4 lg:mx-[10%]">
            <div className='lg:block hidden'>
                <img src={application} className='w-full' />
            </div>
            <div className="w-full max-w-[700px] bg-white rounded-lg shadow-lg">
                <header className="text-2xl font-semibold border-b text-center border-gray-300 px-6 py-4">
                    {jobTitle}
                </header>
                <form onSubmit={handleApplication} className="px-6 py-8 space-y-4">
                    <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-4">
                        <div className="relative flex-1">
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Enter applicant name"
                                className="w-full h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                required
                                type="email"
                                name="applicantEmail"
                                defaultValue={user?.email}
                                placeholder="Applicant E-mail"
                                className="w-full h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                            />
                        </div>
                    </div>

                    <div className="">
                        <textarea
                            name="careerSummary"
                            placeholder="Write your career Summary"
                            className="w-full min-h-[130px] max-h-[230px] p-4 pl-4 text-base border border-gray-300 rounded-md outline-none resize-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                        />
                    </div>
                    <div className="">
                        <textarea
                            name="skills"
                            placeholder="Write your skills"
                            className="w-full min-h-[130px] max-h-[230px] p-4 pl-4 text-base border border-gray-300 rounded-md outline-none resize-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                        />
                    </div>

                    <div className="flex flex-col space-y-6 md:flex-row items-center md:space-y-0 md:space-x-4">
                        <p>Resume Link</p>
                        <div className="flex-1">
                            <input
                                required
                                type="text"
                                name="resume"
                                placeholder="Applicant resume link"
                                className="w-full h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6 md:flex-row items-center md:space-y-0 md:space-x-4">
                        <p>Linkedin Link</p>
                        <div className="flex-1">
                            <input
                                type="text"
                                name="linkedin"
                                placeholder="Applicant linkedin link"
                                className="w-full h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-[#fe735c] focus:ring-2 focus:ring-[#fe735c]"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="checkbox" className="border" id="ready" required name="ready" />
                        <label htmlFor="ready">Ready work on preferred location</label>
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="checkbox" className="border" id="believe" required name="believe" />
                        <label htmlFor="believe">I believe i can resolve all the job responsibility</label>
                    </div>



                    <div className="flex flex-col items-center space-y-4">
                        <button
                            type="submit"
                            className="w-full px-6 py-3 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                        >
                            Apply for this job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Application;