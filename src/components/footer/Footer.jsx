import Logo from "../../assets/BookquestNew.png";
import GithubLogo from "../../assets/github-mark.png";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="made-by">
        <div className="githublogo">
          <a href="https://github.com/NigelFerrefe/bookquest-project">
            <img width={40} src={GithubLogo} alt="" />
          </a>
        </div>
        <div className="logo">
          <NavLink to="/">
            <img width={160} src={Logo} alt="book-quest-logo" />
          </NavLink>
        </div>
      </div>
      <div className="copyright">
        <small>Developed by Piet & Nigel</small>
      </div>
    </section>
  );
}

export default Footer;
