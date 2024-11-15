import { Link } from "react-router-dom";
import profileIcon from "../../assets/profile-icon.png"
import logo from "../../assets/BookQuest.png"

function Navbar() {
  return (
    <div className="navbar-container">
      <img src={logo} alt="" />
      <ul className="navbar-links">
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/about">About</Link>
        </li>
        <li>
          <Link className="link"to="/profile"><img width={"50px"} src={profileIcon} alt="profile user button" /></Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
