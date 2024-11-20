function BookCard({ book, }) {
  return (
    <div>
      <img width={200} src={book.image} alt={book.title} />
      <p>{book.title}</p>
      <p>{book.author}</p>
    </div>
  );
}

export default BookCard;
