import supabase from "../../supabase/config.js";
import { useState, useEffect } from "react";
import BookCard from "../booksCard/BookCard.jsx";
import BookFilterCard from "../bookFilteredCard/BookFilterCard.jsx";
import { Link } from "react-router-dom";
import "./BookList.css";

function AllBooks() {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentSlideAllBooks, setCurrentSlideAllBooks] = useState(0);
  const [currentSlideFilteredBooks, setCurrentSlideFilteredBooks] = useState(0);

  const booksPerSlidePhone = 1; // Number of books on phones screen
  const booksPerSlideTablet = 3; // Number of books on tablets screen
  const booksPerSlideDesktop = 4; // Number of books on desktops screen

  async function getAllBooks() {
    try {
      const response = await supabase
        .from("books")
        .select("*")
        .eq("isBought", false)
        .order("id", { ascending: false });

      setAllBooks(response.data);
    } catch (e) {
      console.log("Something went wrong", e);
    }
  }

  async function getFilteredBooks() {
    try {
      const response = await supabase
        .from("books")
        .select("*")
        .eq("isBought", true)
        .order("id", { ascending: false });

      setFilteredBooks(response.data);
    } catch (e) {
      console.log("Something went wrong", e);
    }
  }

  useEffect(() => {
    getAllBooks();
    getFilteredBooks();
  }, []);

  const totalSlidesAllBooks = Math.ceil(allBooks.length / booksPerSlidePhone);
  const totalSlidesFilteredBooks = Math.ceil(filteredBooks.length / booksPerSlidePhone);

  const handleNextAllBooks = () => {
    setCurrentSlideAllBooks((prev) => (prev + 1) % totalSlidesAllBooks);
  };

  const handlePrevAllBooks = () => {
    setCurrentSlideAllBooks((prev) => (prev === 0 ? totalSlidesAllBooks - 1 : prev - 1));
  };

  const handleNextFilteredBooks = () => {
    setCurrentSlideFilteredBooks((prev) => (prev + 1) % totalSlidesFilteredBooks);
  };

  const handlePrevFilteredBooks = () => {
    setCurrentSlideFilteredBooks((prev) => (prev === 0 ? totalSlidesFilteredBooks - 1 : prev - 1));
  };

  return (
    <>
      <div>
        <h2>BookList</h2>
        <div className="carousel-container">
          <button onClick={handlePrevAllBooks} className="carousel-button prev-button">
            ‹
          </button>
          <div className="carousel-track-container">
            <ul className="carousel-track">
              {allBooks
                .slice(
                  currentSlideAllBooks * booksPerSlidePhone,
                  (currentSlideAllBooks + 1) * booksPerSlidePhone
                )
                .map((book) => (
                  <li key={book.id} className="carousel-slide">
                    <Link to={`/details/${book.id}`}>
                      <BookCard book={book} />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <button onClick={handleNextAllBooks} className="carousel-button next-button">
            ›
          </button>
        </div>
      </div>
      <div>
        <h2>Mystery books for components</h2>
        <p>Extra</p>
      </div>
      <div>
        <h2>Filtered Books</h2>
        <div className="carousel-container">
          <button onClick={handlePrevFilteredBooks} className="carousel-button prev-button">
            ‹
          </button>
          <div className="carousel-track-container">
            <ul className="carousel-track">
              {filteredBooks
                .slice(
                  currentSlideFilteredBooks * booksPerSlidePhone,
                  (currentSlideFilteredBooks + 1) * booksPerSlidePhone
                )
                .map((filteredBook) => (
                  <li key={filteredBook.id} className="carousel-slide">
                    <Link to={`/details/${filteredBook.id}`}>
                      <BookCard book={filteredBook} />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <button onClick={handleNextFilteredBooks} className="carousel-button next-button">
            ›
          </button>
        </div>
      </div>
    </>
  );
}

export default AllBooks;
