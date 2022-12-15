import React, { useEffect } from "react";
import { useContext } from "react";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { searchContext } from "../context/SearchContext";

function Header() {
  const { query, setQuery, searchData, setSearchData } =
    useContext(searchContext);
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=3Qw8LYxA51BT-xKIqwUkhB1EbZ5A3Zkbe8qqx4qefls&page=1&query=${query}`
      )
      .then((res) => {
        console.log(res.data, "result");
        setSearchData(res.data.results);
      });
  }, [query]);
  return (
    <div className="header">
      <form className="search-box">
        <FaSearch color="#dbdddf" fontSize="1rem" />
        <input
          type="text"
          placeholder="Search for photo"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Header;
