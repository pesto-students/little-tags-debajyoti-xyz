import React from "react";
import "./Slider.scss";
const SliderContent = ({ translate, transition, width }) => {
  const mystyle = {
    transform: `translateX(${translate}px)`,
    transition: `transform ease-out ${transition}s`,
    height: "100px",
    width: "200px",
    display: "flex",
  };
  return <div style={mystyle}></div>;
};

export default SliderContent;
