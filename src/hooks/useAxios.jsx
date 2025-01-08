import axios from "axios";
import useAuth from "./useAuth";

const axiosBase = axios.create({
    baseURL: 'https://job-portal-server-neon-nu.vercel.app',
    withCredentials: true,
})
const useAxios = () => {
    const authValue = useAuth();
    axiosBase.interceptors.response.use(
        res => {
            return res
        },
        error => {
            if (error.response.status === 401 || error.response.status === 403) {
                authValue?.logOut?.()
                    .then(() => {
                        // this si res
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            return Promise.reject(error)
        }
    )
    return axiosBase
};

export default useAxios;