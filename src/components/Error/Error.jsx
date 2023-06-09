import Lottie from "lottie-react";
import error from "../../../src/assets/error.json";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ width: "50%" }} className="mx-auto mt-32">
      <Lottie loop={true} animationData={error} />
      <div className="ml-96">
      <Link> <button className="back-to-home "> Back to Home</button> </Link>
      </div>
    </div>
  );
};

export default Error;
