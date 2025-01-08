import { Link, useLoaderData } from "react-router-dom";

const JobsDetails = () => {
    const data = useLoaderData()
    const { description, _id, requirement, companyInfo, companyName, email, timing, deadline, category, minLen, maxLen } = data
    return (
        <div className="mx-[7%] lg:mx-[10%] flex flex-col-reverse lg:flex-row gap-10">
            <div className="lg:w-2/3 space-y-20">
                <div className="space-y-8">
                    <h5 className="text-3xl border-l-[6px] pl-3">Job Description</h5>
                    <p className="text-lg">{description}</p>
                </div>
                <div className="space-y-8">
                    <h5 className="text-3xl border-l-[6px] pl-3">Job Requirement</h5>
                    <pre className="font-sans whitespace-pre-wrap text-lg">{requirement}</pre>
                </div>
                <div className="space-y-8">
                    <h5 className="text-3xl border-l-[6px] pl-3">Company Info</h5>
                    <p className="text-lg">{companyInfo}</p>
                </div>
            </div>
            <div className="lg:w-1/3">
                <div className="border rounded-sm p-7 text-xl space-y-5">
                    <h2 className="font-medium pb-5">Job overview</h2>
                    <div className="flex justify-between items-center">
                        <p>Company Name: </p>
                        <p>{companyName}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>E-mail:</p>
                        <p>{email}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Job Nature:</p>
                        <p>{timing}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Category:</p>
                        <p>{category}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Salary:</p>
                        <p className="font-medium">${minLen} - ${maxLen}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Application Deadline:</p>
                        <p>{deadline}</p>
                    </div>
                    <Link to={`/application/apply/${_id}`}>
                        <button className="border mt-12 w-full py-3 transition-all duration-300 hover:text-white hover:bg-[#fb246a] ">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobsDetails;