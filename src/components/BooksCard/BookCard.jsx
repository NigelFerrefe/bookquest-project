import './BookCard.css'


function BookCard({ book }) {
  return (
    <div className='book-card'>
      <h4>{book.title}</h4>
      <img width={200} src={book.image} alt={book.title} />
      <p>{book.author}</p>
    </div>
  );
}

export default BookCard;
