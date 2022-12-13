import React from "react";
function Stars({ numStars, reviews }) {
  const starMapper = [0, 1, 2, 3, 4];
  return (
    <span>
      {starMapper.map((stars) => (
        <span>
          {numStars >= stars + 1 ? (
            <span
              style={{ color: "orange" }}
              className="fa fa-star checked"
            ></span>
          ) : numStars >= stars + 0.5 ? (
            <i style={{ color: "orange" }} className="fa fa-star-half-o"></i>
          ) : (
            <i
              style={{ marginLeft: "3px", color: "black" }}
              className="fa fa-star-o"
            ></i>
          )}
        </span>
      ))}
      <span style={{ color: "black", marginLeft: "7px" }}>
        {reviews} reviews
      </span>
    </span>
  );
}
export default Stars;
