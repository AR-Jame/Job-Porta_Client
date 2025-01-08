import { Outlet } from "react-router-dom";
import Navbar from "../SharedComp/Navbar";
import Footer from "../SharedComp/Footer";

const Root = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="">
                <Outlet />
            </div>
            <div className="mt-16">
                <Footer />
            </div>
        </div>
    );
};

export default Root;