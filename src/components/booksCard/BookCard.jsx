import './BookCard.css'


function BookCard({ book }) {
  return (
    <div className='book-card'>
      <img width={200} src={book.image} alt={book.title} />
      <p>{book.title}</p>
      <p>{book.author}</p>
    </div>
  );
}

export default BookCard;
