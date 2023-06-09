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

const Banner = () => {
  
    const imgText = (
    <div className="content">
      <h1 className="text-7xl font-caveat">Frippo Sports Academy</h1>
      <p className="text-3xl">
        Professional sports instruction in a traditional camp environment.
      </p>
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


  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="font-caveat text-4xl text-center my-5">
        Some Moments Gallery
      </div>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img className="carousel-image" src={img1} alt="" />
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
        <div className="keen-slider__slide number-slide7">
          <img className="carousel-image" src={img7} alt="" />
          {imgText}
        </div>
        <div className="keen-slider__slide number-slide8">
          <img className="carousel-image" src={img8} alt="" />
          {imgText}
        </div>
        <div className="keen-slider__slide number-slide9">
          <img className="carousel-image" src={img9} alt="" />
          {imgText}
        </div>
      </div>
    </>
  );
};

export default Banner;
