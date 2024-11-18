import supabase from "../../supabase/config.js";
import { useState, useEffect } from "react";
import BookCard from "../booksCard/BookCard.jsx";
import BookFilterCard from "../bookFilteredCard/BookFilterCard.jsx";

function AllBooks() {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  async function getAllBooks() {
    try {
      let response;
      response = await supabase.from("books").select("*").eq("isBought", false);

      setAllBooks(response.data);
    } catch (e) {
      console.log("Something went wrong", e);
    }
  }
  async function getFilteredBooks() {
    try {
      let response;
      response = await supabase.from("books").select("*").eq("isBought", true);

      setFilteredBooks(response.data);
      console.log("This is the supabase filtered", response.data);
    } catch (e) {
      console.log("Something went wrong", e);
    }
  }
  useEffect(() => {
    getAllBooks();
    getFilteredBooks();
  }, []);

  return (
    <>
      <div>
        <h1>BookList</h1>
        {allBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div>
        <h2> Mistery books 4 componets</h2>
        <p>Extra</p>
      </div>
      <div>
        <h3>Your books filtered</h3>
        {filteredBooks.map((filteredBook) => (
          <BookFilterCard key={filteredBook.id} filteredBook={filteredBook} />
        ))}
      </div>
    </>
  );
}
export default AllBooks;
