import React, { useState, useEffect } from "react";
import "./cards.css";
import Card from "./Card";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useContext } from "react";
import { searchContext } from "../context/SearchContext";

function Cards() {
  const { searchData, setSearchData, query } = useContext(searchContext);
  console.log(searchData, "appeared in cards");
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const url =
    "https://api.unsplash.com/photos?client_id=3Qw8LYxA51BT-xKIqwUkhB1EbZ5A3Zkbe8qqx4qefls&per_page=8";

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          // console.log(res.data);
          setImage(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3000);
  }, []);
  console.log(image, "check image");
  console.log(searchData.length, "check search");
  return (
    <div>
      {loading && <h1>Loading........</h1>}

      <div className="grid-section">
        {searchData.length > 0
          ? searchData.map((item, index) => <Card item={item} key={index} />)
          : image.map((item, index) => <Card item={item} key={index} />)}
      </div>
    </div>
  );
}

export default Cards;
