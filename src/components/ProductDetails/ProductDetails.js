import React from "react";
import Slider from "../Slider/Slider";
import ProductDescription from "../ProductDetails/ProductDescription";
import "./ProductDetails.scss";

export default function ProductDetails() {
  return (
    <div className="prod-details">
      <Slider sliderWidth="300" sliderHeight="400" />
      <ProductDescription></ProductDescription>
    </div>
  );
}
