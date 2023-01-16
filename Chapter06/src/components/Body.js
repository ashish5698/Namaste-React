import React from "react";
import RestrauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(filterText, restaurantList) {
  return restaurantList.filter((item) => item.data.name.includes(filterText));
}

const Body = () => {
  [restaurants, setRestaurants] = useState([]);
  [filteredRestaurants, setFilteredRestaurants] = useState([]);
  [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurantData();
  },[]);

  async function getRestaurantData() {
    try {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4560969&lng=78.4889979&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    setRestaurants(result.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(result.data?.cards[2]?.data?.data?.cards);
    } catch(e) {
      console.log("failed to get the data");
    }
  }

  return !restaurants.length? (<Shimmer/>) : (
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
            setFilteredRestaurants(filterData(searchText, restaurants));
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((item) => {
          return <RestrauntCard {...item.data} key={item.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
