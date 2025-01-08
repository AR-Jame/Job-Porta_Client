import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const useAuth = () => {
    const authValue = useContext(AuthContext)
    return authValue
};

export default useAuth;