import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as data from "../../data/data.json";
import "./Slider.scss";

export default function Slider({ sliderWidth, sliderHeight }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [left, setLeft] = useState(0);
  const [slider, setSlider] = useState([
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
  ]);
  const [dataItem, setDataItem] = useState([]);

  let { category, id } = useParams();
  console.log("printing id", parseInt(id));
  console.log("type of", typeof parseInt(id));
  console.log("printing category", category);
  console.log("set slider", setSlider);
  if (category === "jewellery") {
    category = "jewelery";
  }

  useEffect(() => {
    console.log("data is", data.default);
    const filteredProduct = data.default.filter((value) =>
      value.category.includes(category)
    );

    console.log("filteredProduct", filteredProduct);
    setDataItem(filteredProduct[id - 1]);
  }, [category, id]);

  const prevSlide = () => {
    setActiveIndex(activeIndex - 1);
    setLeft(left + (parseInt(sliderWidth) - 230 + activeIndex * 20));

    if (activeIndex === 1) {
      setActiveIndex(activeIndex + slider.length - 1);
      setLeft(left - parseInt(sliderWidth) * (slider.length - 1));
    }
  };

  const nextSlide = () => {
    setActiveIndex(activeIndex + 1);
    setLeft(left - (parseInt(sliderWidth) + 230 + activeIndex * 20));

    if (activeIndex === slider.length) {
      setActiveIndex(activeIndex - slider.length + 1);
      setLeft(0);
    }
  };

  const clickIndicator = (e) => {
    setActiveIndex(parseInt(e.target.textContent));
    setLeft(sliderWidth - parseInt(e.target.textContent) * sliderWidth);
  };
  var mystyle = {
    width: `${sliderWidth}px`,
    height: `${sliderHeight}px`,
    left: left,
    margin: "140px",
  };

  return (
    <div className="sec-half">
      <center>
        <div className="slider-wrapper">
          <ul className="slider">
            {slider.map(function (item, index) {
              return (
                <li
                  style={mystyle}
                  className={index + 1 === activeIndex ? "slider-item" : "hide"}
                >
                  <img
                    src={dataItem.image}
                    alt=""
                    className="image"
                    width="100%"
                  />
                </li>
              );
            }, this)}
          </ul>
        </div>
      </center>
      <div className="buttons-wrapper">
        <button className="prev-button" onClick={prevSlide}></button>
        <button className="next-button" onClick={nextSlide}></button>
      </div>
      <div className="indicators-wrapper">
        <ul className="indicators">
          {slider.map(function (item, index) {
            return (
              <li
                className={index + 1 === activeIndex ? "active-indicator" : ""}
                onClick={clickIndicator}
              >
                {index + 1}
              </li>
            );
          }, this)}
        </ul>
      </div>
    </div>
  );
}
