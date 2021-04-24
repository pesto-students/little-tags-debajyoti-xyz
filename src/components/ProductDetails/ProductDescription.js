import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as data from "../../data/data.json";
import { FaShoppingBag } from "react-icons/fa";
import "./ProductDetails.scss";

export default function ProductDescription() {
  let { category, id } = useParams();
  const [dataItem, setDataItem] = useState([]);
  console.log("printing id", parseInt(id));
  console.log("type of", typeof parseInt(id));
  console.log("printing category", category);
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
  const radioChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="sec-half">
      <h2 className="prod-title">{dataItem.title}</h2>
      <p className="desc">{dataItem.description}</p>
      <p className="product-price"> &#x20b9;{dataItem.price}</p>
      <p className="tax">inclusive of all taxes</p>
      <div class="stv-radio-buttons-wrapper">
        <input
          type="radio"
          class="stv-radio-button"
          name="radioButtonTest"
          value="XS"
          id="button1"
          onChange={radioChange}
        />
        <label for="button1">XS</label>
        <input
          type="radio"
          class="stv-radio-button"
          name="radioButtonTest"
          value="S"
          id="button2"
          onChange={radioChange}
        />
        <label for="button2">S</label>
        <input
          type="radio"
          class="stv-radio-button"
          name="radioButtonTest"
          value="M"
          id="button3"
          onChange={radioChange}
        />
        <label for="button3">M</label>
        <input
          type="radio"
          class="stv-radio-button"
          name="radioButtonTest"
          value="L"
          id="button4"
          onChange={radioChange}
        />
        <label for="button4">L</label>
        <input
          type="radio"
          class="stv-radio-button"
          name="radioButtonTest"
          value="XL"
          id="button5"
          onChange={radioChange}
        />
        <label for="button5">XL</label>
      </div>
      <div class="buy-button-container">
        <button class="buy-button" id="explosion">
          <span>
            {" "}
            <FaShoppingBag size={20} />
          </span>
          <span> ADD TO BAG</span>
        </button>
        <button class="buy-button buttonmargin" id="explosion">
          <span> ORDER NOW</span>
        </button>
      </div>
    </div>
  );
}
