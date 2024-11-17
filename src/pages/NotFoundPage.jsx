import notFoundImg from "../assets/not-found-book.png";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";
function NotFoundPage() {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    navigate("/")
  }
  
  return (
    <>
      <div className="container-error">
        <div className="container-text">
          <aside className="quote">
            <blockquote>“Not all those who wander are lost.”</blockquote>
            <p>— J.R.R. Tolkien</p>
          </aside>
          <div>
            <img src={notFoundImg} alt="error img" id="not-found-img" />
            <h3>Error 404</h3>
          </div>
          <p>
            While it seems like you have stumbled upon a page that is no longer
            here, your journey is far from over.
          </p>
          <p>The next great discovery awaits.</p>
          <p>Let&apos;s find it.</p>
        </div>
        <button id="not-found-btn" onClick={handleClick}>Embark on a new adventure</button>
      </div>
    </>
  );
}

export default NotFoundPage;
