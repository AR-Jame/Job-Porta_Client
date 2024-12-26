import { Outlet } from "react-router-dom";
import Navbar from "../SharedComp/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;