import React from "react";
import AllCategories from "../components/AllCategories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionShop from "../components/SectionShop";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <SectionShop />
      <AllCategories />
      <Footer />
    </div>
  );
};

export default Shop;
