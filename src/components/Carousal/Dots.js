import React from "react";
import "./Slider.scss";
const Dot = ({ active }) => {
  let className = "dot";
  if (active) {
    className += " black";
  } else {
    className += " white";
  }
  return <span className={className} />;
};
const Dots = ({ slides, activeIndex }) => (
  <div className="dots">
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </div>
);

export default Dots;
