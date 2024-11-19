import crimeGenre from "../../assets/crime-genre.jpg";
import "./GenreFilter.css";
import { Link } from "react-router-dom";

function GenreFilter() {
  return (
    <div className="genre-filter-container">
      <div>
        <Link to="/genre">
          <img src={crimeGenre} alt="Crime img" />
        </Link>
      </div>
      <div>
        <Link to="/genre">
          <img src={crimeGenre} alt="Business img" />
        </Link>
      </div>
      <div>
        <Link to="/genre">
          <img src={crimeGenre} alt="History img" />
        </Link>
      </div>
      <div>
        <Link to="/genre">
          <img src={crimeGenre} alt="Self-help img" />
        </Link>
      </div>
    </div>
  );
}

export default GenreFilter;
