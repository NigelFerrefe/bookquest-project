import { Link } from "react-router-dom";

function BookFilterCard({ genreBook }) {
  return (
    <div>
      <Link to={`/details/${genreBook.id}`}>
        <img width={50} src={genreBook.image} alt={genreBook.title} />
        <p>{genreBook.title}</p>
        <p>{genreBook.author}</p>
      </Link>
      <h1>hello</h1>
    </div>
  );
}

export default BookFilterCard;
