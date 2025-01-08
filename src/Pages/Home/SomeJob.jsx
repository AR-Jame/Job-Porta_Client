import { useEffect, useState } from "react";
import Job from "../AllJobs/Job";

const SomeJob = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://job-portal-server-neon-nu.vercel.app/latest-jobs?limit=10`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [])
    return (
        <div>
            <div className="text-center">
                <h4 className="text-5xl font-semibold mb-4">Latest Jobs For You</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quisquam laboriosam beatae in odio distinctio!</p>
            </div>
            <div className="">
                {

                    <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            data?.map(job => <Job key={job._id} job={job} owner={false} />)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default SomeJob;