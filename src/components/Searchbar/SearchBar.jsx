import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Searchbar.css";
import Search from "../../assets/search-icon.png";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [submit, setSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ title: searchQuery }); // nice!
    setSearchQuery("");
    setSubmit(true) // you are changing the state of submit to true, but I don't see where you use the submit state
  }

  return (
    <form className= "search-bar" onSubmit={handleSubmit} >
      <input
        className="input-search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search for a Book Title"
      />
      <button className="back-button">x</button>
      <button className= "search-button" type="submit" >
        <img src={Search} alt="Search-icon" />
      </button>
    </form>
  );
}

export default SearchBar;
