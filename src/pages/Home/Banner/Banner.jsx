import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "./Banner.css";

import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.jpg";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.jpg";
import img6 from "../../../assets/home/06.jpg";
import img7 from "../../../assets/home/07.jpg";
import img8 from "../../../assets/home/08.jpg";
import img9 from "../../../assets/home/09.jpg";
import { useState } from "react";

import { Fade, Slide } from "react-awesome-reveal";


const Banner = () => {
  
    const imgText = (
    <div className="content">
<Slide>
<h1 className="text-7xl font-caveat">Frippo Sports Academy</h1>
</Slide>

      <Fade delay={1e3} cascade damping={1e-1}>
      <p className="text-3xl">
        Professional sports instruction in a traditional camp environment.
      </p>
      </Fade>
   <div className="flex gap-12">
   <button>
        <span>Camp Video</span>
      </button>
      <button>
        <span>Rates</span>
      </button>
      <button>
        <span>Day Camp</span>
      </button>
      <button>
        <span>Enroll Now!</span>
      </button>
   </div>
    </div>
  );


  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });

  return (
      <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
      
          <img className="carousel-image" src={img7} alt="" />
          {imgText}
          </div>
          <div className="keen-slider__slide number-slide2">
         
          <img className="carousel-image" src={img2} alt="" />
          {imgText}
          </div>
          <div className="keen-slider__slide number-slide3">
          
          <img className="carousel-image" src={img3} alt="" />
          {imgText}
          </div>
          <div className="keen-slider__slide number-slide4">
          
          <img className="carousel-image" src={img4} alt="" />
          {imgText}
          </div>
          <div className="keen-slider__slide number-slide5">
         
            <img className="carousel-image" src={img5} alt="" />
          {imgText}
          </div>
          <div className="keen-slider__slide number-slide6">
      
          <img className="carousel-image" src={img6} alt="" />
          {imgText}
          </div>
          <div className="keen-slider__slide number-slide6">
       
          <img className="carousel-image" src={img1} alt="" />
          {imgText}
          </div>
          <div className="keen-slider__slide number-slide6">
      
          <img className="carousel-image" src={img8} alt="" />
          {imgText}
          </div>
          <div className="keen-slider__slide number-slide6">
        
          <img className="carousel-image" src={img9} alt="" />
          {imgText}
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys()
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}


export default Banner;
