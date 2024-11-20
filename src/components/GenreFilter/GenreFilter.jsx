import crimeGenre from "../../assets/crime-genre.png";
import historyGenre from "../../assets/history-genre .png";
import businessGenre from "../../assets/business-genre .png";
import selfHelpGenre from "../../assets/selfhelp-genre.png";
import "./GenreFilter.css";
import { Link } from "react-router-dom";
function GenreFilter() {

  return (
    <div className="genre-filter-container">
      <div>
        <Link to="/genre/history">
          <img src={historyGenre} alt="history img" />
        </Link>
      </div>
      <div>
        <Link to="/genre/business">
          <img src={businessGenre} alt="business img" />
        </Link>
      </div>
      <div>
        <Link to="/genre/crime">
          <img src={crimeGenre} alt="crime img" />
        </Link>
      </div>
      <div>
        <Link to="/genre/self-help">
          <img src={selfHelpGenre} alt="self-help img" />
        </Link>
      </div>
    </div>
  );
}

export default GenreFilter;
