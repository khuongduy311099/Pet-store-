import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

import styles from "./image-slider.scss";
function ImageSlider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timerID = setTimeout(() => {
      const newSlide =
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(newSlide);
    }, 5000);

    return () => clearTimeout(timerID);
  }, [currentSlide]);

  const sliderImageStyle = {
    backgroundImage: `url(${slides[currentSlide].url})`,
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const handlePrevious = () => {
    const isFirstSlide = currentSlide === 0;
    setCurrentSlide(isFirstSlide ? slides.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    setCurrentSlide(isLastSlide ? 0 : currentSlide + 1);
  };

  const handleMoveSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="slider-wrapper">
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        className="previous-btn"
        onClick={handlePrevious}
      />
      <div style={sliderImageStyle} className="slider-image"></div>
      <FontAwesomeIcon
        icon={faCircleChevronRight}
        className="next-btn"
        onClick={handleNext}
      />
      <div className="dot-container">
        {slides.map((slide, index) => (
          <FontAwesomeIcon
            style={
              currentSlide === index ? { opacity: "1" } : { opacity: "0.3" }
            }
            icon={faCircleDot}
            className="dot"
            key={index}
            onClick={() => handleMoveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
