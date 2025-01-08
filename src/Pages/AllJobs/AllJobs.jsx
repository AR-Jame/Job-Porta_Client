import Job from "./Job";
import { useEffect, useState } from "react";
import useAxios from '../../hooks/useAxios'
import surprise from '../../assets/surprise.png'
const AllJobs = () => {
    const [jobsCount, setJobsCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');
    const axiosBase = useAxios();
    const limit = 2;
    useEffect(() => {
        fetch(`https://job-portal-server-neon-nu.vercel.app/jobsCount?filter=${filter}&search=${search}`)
            .then(res => res.json())
            .then(response => {
                setJobsCount(response.jobsCount)
            })
    }, [filter, search])
    useEffect(() => {
        axiosBase.get(`/jobs-query?page=${currentPage}&limit=${limit}&filter=${filter}&sort=${sort}&search=${search}`, { withCredentials: true })
            .then(res => {
                setJobs(res.data)
            })
    }, [currentPage, axiosBase, filter, sort, search])
    const numOfPage = Math.ceil(jobsCount / limit);
    const pages = [...Array(numOfPage).keys()].map(e => e + 1);

    const handlePagination = (page) => {
        setCurrentPage(page)
    }
    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text)
        e.target.reset()
    }
    const handleReset = () => {
        setFilter('');
        setSort('');
        setSearch('')
    }
    return (
        <div className="mx-[10%]">
            <div className="text-center mt-10">
                <h4 className="text-5xl font-semibold mb-4">All jobs</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quisquam laboriosam beatae in odio distinctio!</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 my-10">
                <select
                    name='category'
                    onChange={
                        (e) => {
                            setFilter(e.target.value)
                            setCurrentPage(1)
                        }
                    }
                    className='h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-black focus:ring-2 focus:ring-black'
                >
                    <option hidden value=''>Select by Category</option>
                    <option value=''>Nothing</option>
                    <option value="Ai Engineer">AI Engineer</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphics Design">Graphics Design</option>
                </select>

                <form onSubmit={handleSearch}>
                    <div className="join">
                        <div>
                            <div>
                                <input name="search" className="h-[46px] border p-4 join-item" placeholder="Search" />
                            </div>
                        </div>
                        <div className="indicator">
                            <button className="btn border join-item">Search</button>
                        </div>
                        <div className="hidden lg:block">
                            <button onClick={handleReset} className="btn">Reset</button>
                        </div>
                    </div>
                </form>

                <select
                    name='category'
                    onChange={
                        (e) => {
                            setSort(e.target.value)
                            setCurrentPage(1)
                        }
                    }
                    className='h-12 pl-4 pr-4 text-base border border-gray-300 rounded-md outline-none focus:border-black focus:ring-2 focus:ring-black'
                >
                    <option hidden value=''>Sort by Deadline</option>
                    <option value=''>Nothing</option>
                    <option value="ascending">Sort in ascending order</option>
                    <option value="descending">Sort by descending order</option>
                </select>
                <div className="block lg:hidden">
                    <button onClick={handleReset} className="btn">Reset</button>
                </div>
            </div>

            {/* loading jobs */}
            <div className="">
                {
                    jobs.length === 0 ?
                        <div className="flex items-center w-full flex-col justify-center h-[50vh]">
                            <img src={surprise} className="" />
                            <p>No items Found</p>
                        </div>
                        :
                        <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                jobs?.map(job => <Job key={job._id} job={job} owner={false} />)
                            }
                        </div>
                }
            </div>

            {/* pagination */}
            {
                jobs.length === 0 ? '' :
                    <div className='flex justify-center items-center mt-10 mb-4'>
                        <button onClick={() => handlePagination(currentPage === 1 ? 1 : currentPage - 1)} className="btn mr-2">Previous</button>
                        {
                            pages.map(page =>
                                <button
                                    className={`btn btn-square mr-2 ${currentPage === page ? 'bg-teal-300' : ''}`}
                                    onClick={() => handlePagination(page)}
                                    key={page}>{page}</button>
                            )
                        }
                        <button onClick={() => handlePagination(currentPage === numOfPage ? 1 : currentPage + 1)} className="btn mr-2">Next</button>
                    </div>
            }
        </div >
    );
};

export default AllJobs;