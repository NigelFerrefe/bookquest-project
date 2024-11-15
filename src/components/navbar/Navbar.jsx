import { NavLink } from "react-router-dom";
import profileIcon from "../../assets/profile-icon.png";
import logo from "../../assets/BookQuest.png";
import closeBook from "../../assets/close-book.png";
import openBook from "../../assets/open-book.png";
import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="topnav">
        <img id="logo-img" src={logo} alt="logo image" />
        <button className="menu-btn" onClick={handleMenu}>
          {isOpen ? (
            <img width={"40rem"} src={closeBook} alt="closed btn" />
          ) : (
            <img width={"45rem"} src={openBook} alt="open btn" />
          )}
        </button>
      </div>
      {!isOpen && (
        <ul className="navbar-links">
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/profile">
              <img
                width={"35rem"}
                src={profileIcon}
                alt="profile user button"
              />
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
