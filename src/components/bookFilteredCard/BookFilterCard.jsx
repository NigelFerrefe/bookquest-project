function BookFilterCard({ filteredBook }) {
  return (
    <div>
       <img width={50} src={filteredBook.image} alt={filteredBook.title} />
    <p>{filteredBook.title}</p>
    <p>{filteredBook.author}</p>
    </div>
  );
}

export default BookFilterCard;
