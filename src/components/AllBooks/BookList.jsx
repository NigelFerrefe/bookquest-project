import supabase from "../../supabase/config.js";
import { useState, useEffect } from "react";
import BookCard from "../booksCard/BookCard.jsx";
import BookFilterCard from "../bookFilteredCard/BookFilterCard.jsx";
import { Link } from "react-router-dom";

function AllBooks() {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  async function getAllBooks() {
    try {
      let response;
      response = await supabase.from("books").select("*").eq("isBought", false).order("id", { ascending: false });

      setAllBooks(response.data);
    } catch (e) {
      console.log("Something went wrong", e);
    }
  }
  async function getFilteredBooks() {
    try {
      let response;
      response = await supabase.from("books").select("*").eq("isBought", true).order("id", { ascending: false });

      setFilteredBooks(response.data);
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
          <Link key={book.id} to={`/details/${book.id}`}>
            <BookCard key={book.id} book={book} />
          </Link>
        ))}
      </div>
      <div>
        <h2> Mistery books 4 componets</h2>
        <p>Extra</p>
      </div>
      <div>
        <h3>Your books filtered</h3>
        {filteredBooks.map((filteredBook) => (
          <Link key={filteredBook.id} to={`/details/${filteredBook.id}`}>
            <BookFilterCard key={filteredBook.id} filteredBook={filteredBook} />
          </Link>
        ))}
      </div>
    </>
  );
}
export default AllBooks;
