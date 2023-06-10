import videoBg from "../../../assets/videobg.mp4";
import "./SectionOne.css";

import { Fade, Slide } from "react-awesome-reveal";


const SectionOne = () => {
  return (
    <div className="main mb-5">
      <video src={videoBg} autoPlay loop muted />
      <div className="content font-caveat">
        <Slide>
        <h1 className="text-7xl">Welcome</h1>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
        <p className="text-3xl">To Frippo Summer Camp Sports Academy.</p>
        </Fade>
      </div>
    </div>
  );
};

export default SectionOne;
