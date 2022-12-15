import "./App.css";
import { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import { searchContext } from "./context/SearchContext";
function App() {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  return (
    <div className="App">
      <searchContext.Provider
        value={{ query, setQuery, searchData, setSearchData }}
      >
        <Header />
        <Cards />
      </searchContext.Provider>
    </div>
  );
}

export default App;
