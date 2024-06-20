import React from "react";
import Hero from "../components/Hero/Hero";
import Populars from "../components/Populars/Populars";
import Offer from "../components/Offers/Offer";
import NewCollections from "../components/NewCollections/NewCollections";
import Newsletter from "../components/Newsletter/Newsletter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Populars />
      <Offer />
      <NewCollections />
      <Newsletter />
    </div>
  );
};

export default Shop;
