import React from "react";

const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="shimmer"></div>
        ))}
    </div>
  );
};

export default Shimmer;