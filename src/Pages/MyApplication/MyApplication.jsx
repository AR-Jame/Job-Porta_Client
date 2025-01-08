import useAxios from "../../hooks/useAxios";
import ApplicationRow from "./ApplicationRow";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../spinner/Spinner";

const MyApplication = () => {
    const axiosBase = useAxios();
    const { user } = useAuth();

    const fetchApplication = async () => {
        const url = `/application?email=${user?.email}`;
        // const res = await axiosBase.get(url);
        // return res.data
        return axiosBase.get(url)
            .then(res => {
                return res.data
            })
    }

    const {
        data: application = [],
        isLoading,
        isError,
        error } = useQuery({
            queryFn: () => fetchApplication(),
            queryKey: ['application'],
        })


    const handleDelete = (_id) => {
        axiosBase.delete(`/application/${_id}`)
            .then(() => {

            })
    }



    if (isError) {
        return <div>{error.message}</div>
    }
    if (isLoading) {
        return <Spinner custom={true} />
    }

    return (
        <div className="mx-[5%] lg:mx-[10%]">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job name</th>
                            <th>Employee email</th>
                            <th>Deadline</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {application?.map((row, idx) =>
                            <ApplicationRow
                                key={idx}
                                data={row}
                                count={idx}
                                handleDelete={handleDelete}
                            />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplication;