import React from "react";
import "./Slider.scss";
const SliderContent = (props) => {
  const mystyle = {
    transform: `translateX(${props.translate}px)`,
    transition: `transform ease-out ${props.transition}s`,
    height: "100px",
    width: "200px",
    display: "flex",
  };
  return <div style={mystyle}>{props.children}</div>;
};

export default SliderContent;
