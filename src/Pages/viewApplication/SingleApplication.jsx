import PropTypes from "prop-types";
import Swal from "sweetalert2";
const SingleApplication = ({ data }) => {
    const { name,
        applicantEmail,
        careerSummary,
        skills,
        resume,
        linkedin,

    } = data
    const handleReveal = (title, text) => {
        Swal.fire({
            imageAlt: "A tall image",
            title: title,
            text: text,
            customClass: {
                title: 'text-2xl',
                htmlContainer: 'swal2-content'

            }
        });
    }
    return (
        <div className="border-8 p-5 flex gap-10 text-lg">
            <div className="space-y-4">
                <p>Name:</p>
                <p>Email:</p>
                <p>Linkedin:</p>
                <p>skills</p>
                <p>Career Summary:</p>
                <p>Resume:</p>
            </div>
            <div className="space-y-4 break-words over">
                <p>{name}</p>
                <p>{applicantEmail}</p>
                <a href={linkedin} target="blank" className="text-blue-600">{linkedin}</a>
                <p>{skills.length > 80 ? skills.slice(0, 80) + '...' : skills} <button onClick={() => handleReveal(`Skills of ${name}`,skills)} className="text-blue-700">Read More</button></p>
                {/* <p className="overflow-scroll border max-h-28">{skills}</p> */}
                <p>{careerSummary.length > 80 ? careerSummary.slice(0, 80) + '...' : careerSummary} <button onClick={() => handleReveal(`Career summery of ${name}`,careerSummary)} className="text-blue-700">Read More</button></p>
                <p>{resume}</p>
            </div>
        </div>
    );
};

SingleApplication.propTypes = {
    data: PropTypes.object,
};
export default SingleApplication;