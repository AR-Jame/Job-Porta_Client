import Header from "./Header";
import SomeJob from "./SomeJob";

const Home = () => {
    return (
        <div className="space-y-32">
            <Header />
            <div className="lg:mx-[15%] md:mx-[10%] mx-[3%] ">
                <SomeJob />
            </div>
        </div>
    );
};

export default Home;