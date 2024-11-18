function BookCard({ book }) {
  return (<div>
    <img width={50} src={book.image} alt={book.title} />
    <p>{book.title}</p>
    <p>{book.author}</p>

  </div>);
}

export default BookCard;
