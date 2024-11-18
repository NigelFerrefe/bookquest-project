import supabase from "../../supabase/config.js";
import { useState, useEffect } from "react";
import BookCard from "../booksCard/BookCard.jsx";

function BookListFiltered() {
  const [filteredBooks, setFilteredBooks] = useState([]);

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
    getFilteredBooks();
  }, []);

  return (
    <div>
      <h3>Your books filtered</h3>
      {filteredBooks.map((filteredBook) => (
        <p key={filteredBook.id}> filteredBook={filteredBook}</p>
      ))}
    </div>
  );
}

export default BookListFiltered;
