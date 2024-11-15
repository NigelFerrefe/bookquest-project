import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1>BookQuest</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
