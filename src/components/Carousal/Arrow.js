import React from "react";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import "./Slider.scss";
const Arrow = ({ direction, handleClick }) => {
  let className = "arrow-styling";

  if (direction === "right") {
    className += " right";
    className += " transformright";
  } else {
    className += " left";
    className += " transformleft";
  }
  return (
    <div onClick={handleClick} className={className}>
      {direction === "right" ? (
        <img src={rightArrow} alt="rightArrow" />
      ) : (
        <img src={leftArrow} alt="leftArrow" />
      )}
    </div>
  );
};

export default Arrow;
