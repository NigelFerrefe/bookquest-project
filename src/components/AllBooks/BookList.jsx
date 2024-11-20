import supabase from "../../supabase/config.js";
import { useState, useEffect } from "react";
import BookCard from "../BooksCard/BookCard.jsx";
import BookFilterCard from "../BookFilteredCard/BookFilterCard.jsx";
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../Searchbar/SearchBar.jsx";
import "./BookList.css";
import GenreFilter from "../GenreFilter/GenreFilter.jsx";

function AllBooks() {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentSlideAllBooks, setCurrentSlideAllBooks] = useState(0);
  const [currentSlideFilteredBooks, setCurrentSlideFilteredBooks] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams()

  const booksPerSlidePhone = 1; // Number of books on phones screen
  const booksPerSlideTablet = 3; // Number of books on tablets screen
  const booksPerSlideDesktop = 4; // Number of books on desktops screen

  async function getAllBooks() {
    const queryname = searchParams.get("title");

    console.log("this is the query name: " , queryname)
    let response;


    try {

      if (queryname) {
        response = await supabase
        .from("books")
        .select("*")
        .ilike("title", `%${queryname}`)


      } else {
        response = await supabase
          .from("books")
          .select("*")
          .eq("isBought", false)
          .order("id", { ascending: false });
      }

      if (response.data.length === 0){
        alert("No Results Found")
      } else {
        setAllBooks(response.data);
      }
    } catch (error) {
      console.log("Something went wrong", error);
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
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  useEffect(() => {
    getAllBooks();
    getFilteredBooks();
  }, [searchParams]);

  const totalSlidesAllBooks = Math.ceil(allBooks.length / booksPerSlideDesktop);
  const totalSlidesFilteredBooks = Math.ceil(filteredBooks.length / booksPerSlideDesktop);

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
        <SearchBar />
      <div className="carousel">
        <h2>All Books</h2>
        <div className="carousel-container">
          <button onClick={handlePrevAllBooks} className="carousel-button prev-button">
            ‹
          </button>
          <div className="carousel-track-container">
            <ul className="carousel-track">
              {allBooks
                .slice(
                  currentSlideAllBooks * booksPerSlideDesktop,
                  (currentSlideAllBooks + 1) * booksPerSlideDesktop
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
        <h2>Search your books by your favourites genre</h2>
        <GenreFilter/>
      </div>
      <div>
        <h2>Your Books</h2>
        <div className="carousel-container">
          <button onClick={handlePrevFilteredBooks} className="carousel-button prev-button">
            ‹
          </button>
          <div className="carousel-track-container">
            <ul className="carousel-track">
              {filteredBooks
                .slice(
                  currentSlideFilteredBooks * booksPerSlideDesktop,
                  (currentSlideFilteredBooks + 1) * booksPerSlideDesktop
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
