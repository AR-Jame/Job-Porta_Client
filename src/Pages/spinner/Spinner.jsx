import { RotatingTriangles } from "react-loader-spinner";
import PropTypes from "prop-types";
const Spinner = ({ custom = false }) => {
    return (
        <div className={`flex mx-[10%] mt-5 ${custom ? " justify-center items-center h-[87vh]" : 'justify-end'}`}>
            <RotatingTriangles
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="rotating-triangles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};
Spinner.propTypes = {
    custom: PropTypes.bool
}
export default Spinner;