import './Hero.css'
import { Link, NavLink } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <h1>What's your new BookQuest?</h1>
      <NavLink to="/newbook">
        <button className="add-book-button">Add Book </button>
      </NavLink>
    </div>
  );
}

export default Hero
