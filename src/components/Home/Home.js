import React from "react";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <Footer />
    </div>
  );
}
