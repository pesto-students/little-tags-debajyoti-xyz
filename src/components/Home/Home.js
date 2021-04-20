import React from "react";
import Categories from "../Categories/Categories";
import Slider from "../Carousal/Slider";

export default function Home() {
  return (
    <div>
      <Slider sliderWidth="1500" sliderHeight="750" />
      <Categories />
    </div>
  );
}
