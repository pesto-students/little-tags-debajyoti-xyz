import React from "react";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slides from "../Carousal/Slides";

export default function Home() {
  return (
    <div>
      <Header />
      <Slides />
      <Categories />
      <Footer />
    </div>
  );
}
