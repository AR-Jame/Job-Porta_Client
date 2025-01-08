import { useLoaderData } from "react-router-dom";
import SingleApplication from "./singleApplication";

const ViewApplication = () => {
    const data = useLoaderData();
    return (
        <div className="mx-[7%] lg:mx-[10%]">
            <div className="text-center mt-10">
                <h4 className="text-5xl font-semibold mb-4">My Posted jobs</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quisquam laboriosam beatae in odio distinctio!</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                {
                    data.map(single =>
                        <SingleApplication
                            key={single._id}
                            data={single}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default ViewApplication;