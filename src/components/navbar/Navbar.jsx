import { NavLink } from "react-router-dom";
import profileIcon from "../../assets/profile-icon.png";
import logo from "../../assets/BookQuest.png";
import closeBook from "../../assets/close-book.png";
import openBook from "../../assets/open-book.png";
import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handleMenu = () => setIsOpen(!isOpen);

  const handleCloseMenu = () => setIsOpen(false); // Always close the menu

  // Handle screen size changes
  useEffect(() => {
    // Function to resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsOpen(false); // Close menu on screen resize
    };
    // Add an event listener to the window to listen for resize events.
    // Each time the window resizes, handleResize will be called.
    window.addEventListener("resize", handleResize);

    // Function to remove the resize event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="topnav">
        <NavLink to="/" onClick={handleCloseMenu}>
          <img id="logo-img" src={logo} alt="logo" />
        </NavLink>
        {isMobile && (
          <button className="menu-btn" onClick={handleMenu}>
            {isOpen ? (
              <img width={"40rem"} src={openBook} alt="close menu" />
            ) : (
              <img width={"45rem"} src={closeBook} alt="open menu" />
            )}
          </button>
        )}
      </div>
      {(!isMobile || isOpen) && (
        <ul className="navbar-links">
          <li>
            <NavLink className="link" to="/" onClick={handleCloseMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about" onClick={handleCloseMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link profile-img"
              to="/profile"
              onClick={handleCloseMenu}
            >
              <img
                id="profile-icon"
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
