import { Link } from "react-router-dom";

function BookFilterCard({ genreBook }) {
  return (
    <div>
      <Link to={`/details/${genreBook.id}`}>
        <h4>{genreBook.title}</h4>
        <img width={50} src={genreBook.image} alt={genreBook.title} />
        <p>{genreBook.author}</p>
      </Link>
    </div>
  );
}

export default BookFilterCard;
