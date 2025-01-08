import PropTypes from "prop-types";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Job = ({ job, owner, handleDeletePost }) => {
    const {
        jobTitle,
        category,
        location,
        timing,
        minLen,
        maxLen,
        description,
        _id,
        deadline
    } = job

    return (
        <div className="border rounded-lg p-10">
            <div className="flex justify-between items-center">
                <p className={`${timing === "Part Time" ? 'text-green-600 bg-green-100 border-green-200' : 'bg-orange-100 text-orange-600 border-orange-200'} border text-[13px] transition-all duration-500 py-1 px-2 rounded-[6px]`}>{timing}</p>
                <p
                    className={`
                ${category === "Web Development" ? 'text-[#98a4f0] bg-[#c6cdff62] border-[#adb7f57e]'
                            : category === "Graphics Design" ? 'bg-[#ffcece6b] text-[#f16161be] border-orange-200'
                                : 'text-[#c77dff] bg-[#e1bbff4f] border-[#c77dff59]'}
                 border text-[13px] transition-all duration-500 py-1 px-2 rounded-[6px]`}
                >{category}
                </p>
            </div>
            <h5 className="text-3xl font-semibold my-6">{jobTitle}</h5>
            <p>{description.length > 100 ? description.slice(0, 99) + ' ...' : description}</p>
            <p className="mt-4"><span className="font-medium">Deadline :</span> {deadline}</p>
            <p className="my-4 text-xl font-medium">Salary : ${minLen} - ${maxLen}</p>
            <div className="text-lg flex items-baseline gap-1 my-3">
                <FaLocationDot className="text-2xl text-[#e23f47]" />
                <p className="mt-2">{location}</p>
            </div>
            <div className="space-y-2">
                <Link to={`/jobs/details/${_id}`}>
                    <button className="mb-3 flex items-center gap-2 justify-end w-full hover:text-orange-500 hover:scale-x-105 transition-all text-lg">View Details <FaArrowRight /></button>
                </Link>
                {
                    owner ?
                        <>
                            <Link to={`/viewApplications/${_id}`}>
                                <button className="mb-3 flex items-center gap-2 justify-end w-full hover:text-orange-500 hover:scale-x-105 transition-all text-lg">View Applications <FaArrowRight /></button>
                            </Link>
                            <Link to={`/editPost/${_id}`}>
                                <button className="mb-3 flex items-center gap-2 justify-end w-full hover:text-orange-500 hover:scale-x-105 transition-all text-lg">Edit Post <FaArrowRight /></button>
                            </Link>
                            <button onClick={() => handleDeletePost(_id)} className="mb-3 text-red-600 flex items-center gap-2 justify-end w-full hover:text-orange-500 hover:scale-x-105 transition-all text-lg">Delete Post <FaArrowRight /></button>
                        </> : <></>
                }
            </div>
        </div>
    );
};
Job.propTypes = {
    job: PropTypes.object,
    owner: PropTypes.bool,
    handleDeletePost: PropTypes.func,
}
export default Job;