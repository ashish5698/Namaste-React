import React from "react";
import { restaurantList } from "../constants";
import RestrauntCard from "./RestaurantCard";
import { useState } from "react";

const filterData = (filterText) => {
    return restaurantList.filter((item) => item.data.name.includes(filterText));
  };

const Body = () => {
  [restaurants, setRestaurants] = useState(restaurantList);
  [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            setRestaurants(filterData(searchText));
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((item) => {
          return <RestrauntCard {...item.data} key={item.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
