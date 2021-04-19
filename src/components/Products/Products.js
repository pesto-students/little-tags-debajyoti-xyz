import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as data from "../../data/data.json";
import ProductCard from "../ProductCard/ProductCard";
export default function Products() {
  let { category } = useParams();
  const [categoryData, setCategoryData] = useState([]);

  if (category === "jewellery") {
    category = "jewelery";
  }
  useEffect(() => {
    const newData = data.default.filter((value) =>
      value.category.includes(category)
    );
    setCategoryData(newData);
  }, [category]);
  const content = categoryData.map((value, i) => (
    <ProductCard key={i} value={value} />
  ));
  return <div style={{ display: "flex", flexWrap: "wrap" }}>{content}</div>;
}
