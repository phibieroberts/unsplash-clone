import React, { useState, useEffect } from "react";
import "./cards.css";
import Card from "./Card";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Cards() {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(false);
  const url = query
    ? `https://api.unsplash.com/search/photos?client_id=3Qw8LYxA51BT-xKIqwUkhB1EbZ5A3Zkbe8qqx4qefls&page=1&query=${query}`
    : "https://api.unsplash.com/photos?client_id=3Qw8LYxA51BT-xKIqwUkhB1EbZ5A3Zkbe8qqx4qefls&per_page=8";

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
  console.log(image);
  return (
    <div>
      {loading && <h1>Loading........</h1>}

      <div className="grid-section">
        {image?.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
