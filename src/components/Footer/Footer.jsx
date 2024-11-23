import Logo from "../../assets/BookquestNew.png";
import GithubLogo from "../../assets/github-mark.png";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  function scrollToTop() {
    return (
      window.scrollTo(0, 0) // well done! this is a simple and effective way to scroll to the top of the pageç
      // you can also make the scroll smooth by using window.scrollTo({ top: 0, behavior: 'smooth' }
    )
  }
  return (
    <section className="footer">
      <div className="made-by">
        <div className="githublogo">
          <a href="https://github.com/NigelFerrefe/bookquest-project">
            <img width={40} src={GithubLogo} alt="" />
          </a>
        </div>
        <div className="logo">
          <NavLink to="/" >
          <button onClick={scrollToTop} className="home-button">
            <img width={160} src={Logo} alt="book-quest-logo" />
          </button>
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
