import React, { useEffect, useRef } from "react";
import Body from "./Body";
import { useState } from "react";
import { ResturantContext } from "../Contexts/ContextResturant";
import Carousel from "./Carousel";
import useRestaurant from "../customHooks/useRestaurant";
import { getMoreRestaurants } from "../Utilities/helpers";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import HomPageShimmer from "./HomPageShimmer";

export const Homepage = () => {
  const [restaurants, showRestaurants] = useState([]);
  const[filterRestaurants,setFilterRestaurants] = useState()
  const [showRestaurant, setShowRestaurant] = useState(15); 
  useRestaurant(restaurants, showRestaurants);
  window.onscroll = () => {
    getMoreRestaurants(
      restaurants,
      showRestaurants,
      showRestaurant,
      setShowRestaurant
    );
  };

  if (restaurants.length <= 0) return <HomPageShimmer />;
  else
    return (
      <div className="Homepage">
        <ResturantContext.Provider value={restaurants}>
          <Carousel />
          <Body />
        </ResturantContext.Provider>
      </div>
    );
};
