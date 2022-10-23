import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Card({ item }) {
  const { user, urls } = item;
  return (
    <div className="card ">
      <img src={urls.small} alt="items" />
      <div className="card-text">
        <h3>{user.name}</h3>
        <p>{user.location}</p>
      </div>
      <div className="gradient"></div>
    </div>
  );
}

export default Card;
