import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Searchbar.css";
import Search from "../../assets/search-icon.png";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ title: searchQuery });
    setSearchQuery("");
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="input-search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search for a Book Title"
      />
      <button className="search-button" type="submit">
        <img src={Search} alt="Search-icon" />
      </button>
    </form>
  );
}

export default SearchBar;
