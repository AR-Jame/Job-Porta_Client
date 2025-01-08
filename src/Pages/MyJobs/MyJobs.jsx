import { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../Auth/AuthProvider";
import Job from "../AllJobs/Job";
import Swal from "sweetalert2";
import noPost from '../../assets/surprise.png'
import { Link } from "react-router-dom";

const MyJobs = () => {
    const axiosBase = useAxios()
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosBase.get(`/my-jobs?email=${user?.email}`)
            .then(res => {
                setData(res.data)
            })
    }, [user, axiosBase])

    const handleDeletePost = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosBase.delete(`/my-jobs/${_id}`)
                    .then(() => {
                        const remain = data.filter(single => single._id !== _id)
                        setData(remain)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Post has been deleted.",
                            icon: "success"
                        });
                    })
            }
        });
    }
    if (data.length === 0) {
        return (
            <div className="flex items-center flex-col justify-center h-[89vh]">
                <img src={noPost} className="" />
                <p className="mt-2 text-lg">No post Available</p>
                <Link to='/addJob'>
                    <button
                        className='bg-[#f1f1ef] transition-all hover:bg-[#e2e2e2] text-lg font-medium active:bg-[#ddddd8] cursor-pointer px-3 py-3 rounded-md transition-bg'
                    >
                        Post a new job
                    </button>
                </Link>
            </div>
        )
    }
    return (
        <div className="mx-[10%]">
            <div className="text-center mt-10">
                <h4 className="text-5xl font-semibold mb-4">My Posted jobs</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quisquam laboriosam beatae in odio distinctio!</p>
            </div>
            <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data?.map(job =>
                        <Job
                            key={job._id}
                            job={job}
                            owner={true}
                            handleDeletePost={handleDeletePost}
                        />)
                }
            </div>
        </div>
    );
};

export default MyJobs;