import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return 
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' state={location.pathname} />
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;