import Banner from "../Banner/Banner";
import SectionOne from "../ExtraSection/SectionOne";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <SectionOne></SectionOne>            
            <Banner></Banner>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;