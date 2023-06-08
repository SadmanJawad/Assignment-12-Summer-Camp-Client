import videoBg from "../../../assets/videobg.mp4"
import './SectionOne.css'

const SectionOne = () => {
    return (
        <div className="main">
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            <div className="content font-caveat">
                <h1 className="text-7xl">Welcome</h1>
                <p className="text-3xl">To Frippo Summer Camp Sports Academy.</p>
            </div>
        </div>
    );
};

export default SectionOne;