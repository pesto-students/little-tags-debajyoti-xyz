import React, { useState } from "react";
import SliderContent from "./SliderContent.js";
import Slide from "./Slide.js";
import Arrow from "./Arrow.js";
import Dots from "./Dots.js";
import "./Slider.scss";
const Slider = ({ slides }) => {
  const getWidth = () => window.innerWidth;
  console.log("kirti", slides);
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;
  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * getWidth(),
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };
  const contentis = slides.map((slide, i) => (
    <Slide key={i} content={slide} alt={"icon"} />
  ));
  console.log("content is @@@", contentis);

  return (
    <div className="sliderCSS">
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {contentis}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Dots slides={slides} activeIndex={activeIndex} />
    </div>
  );
};

export default Slider;
