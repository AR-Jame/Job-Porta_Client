import { Outlet } from "react-router-dom";
import Navbar from "../SharedComp/Navbar";

const Root = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;