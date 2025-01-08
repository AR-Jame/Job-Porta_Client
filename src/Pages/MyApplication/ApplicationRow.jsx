import PropTypes from "prop-types";
const ApplicationRow = ({ data, count, handleDelete }) => {
    return (
        <tr className='text-lg'>
            <th className="">{count + 1}</th>
            <td>{data.jobTitle}</td>
            <td>{data.emplyeeEmail}</td>
            <td>{data.deadline}</td>
            <td><button onClick={() => handleDelete(data._id)} className="border text-base border-red-500 p-2 hover:bg-red-500 hover:text-white hover:border-transparent transition-all rounded-md text-red-500">Withdraw</button></td>

        </tr>
    );
};
ApplicationRow.propTypes = {
    data: PropTypes.object,
    count: PropTypes.number,
    handleDelete: PropTypes.func,
}
export default ApplicationRow;