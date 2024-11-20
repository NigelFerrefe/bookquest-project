import supabase from "../../supabase/config.js";
import { useState, useEffect } from "react";
import BookCard from "../BooksCard/BookCard.jsx";
import BookFilterCard from "../BookFilteredCard/BookFilterCard.jsx";
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../Searchbar/SearchBar.jsx";
import "./BookList.css";
import GenreFilter from "../GenreFilter/GenreFilter.jsx";
import unlikeIcon from "../../assets/heart-unlike.png";
import likeIcon from "../../assets/heart-like.png";

function AllBooks() {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentSlideAllBooks, setCurrentSlideAllBooks] = useState(0);
  const [currentSlideFilteredBooks, setCurrentSlideFilteredBooks] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLike, setIsLike] = useState(false);

  const booksPerSlidePhone = 1; // Number of books on phones screen

  async function getAllBooks() {
    const queryname = searchParams.get("title");

    console.log("this is the query name: ", queryname);
    let response;

    try {
      if (queryname) {
        response = await supabase
          .from("books")
          .select("*")
          .ilike("title", `%${queryname}`);
      } else {
        response = await supabase
          .from("books")
          .select("*")
          .eq("isBought", false)
          .order("id", { ascending: false });
      }

      if (response.data.length === 0) {
        alert("No Results Found");
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

  const totalSlidesAllBooks = Math.ceil(allBooks.length / booksPerSlidePhone);
  const totalSlidesFilteredBooks = Math.ceil(
    filteredBooks.length / booksPerSlidePhone
  );

  const handleNextAllBooks = () => {
    setCurrentSlideAllBooks((prev) => (prev + 1) % totalSlidesAllBooks);
  };

  const handlePrevAllBooks = () => {
    setCurrentSlideAllBooks((prev) =>
      prev === 0 ? totalSlidesAllBooks - 1 : prev - 1
    );
  };

  const handleNextFilteredBooks = () => {
    setCurrentSlideFilteredBooks(
      (prev) => (prev + 1) % totalSlidesFilteredBooks
    );
  };

  const handlePrevFilteredBooks = () => {
    setCurrentSlideFilteredBooks((prev) =>
      prev === 0 ? totalSlidesFilteredBooks - 1 : prev - 1
    );
  };

  
  
  const handleLike = (id) => {
    setIsLike((prev) => ({ ...prev, [id]: !prev[id] }));
    console.log("this book is favourite now");
  };

  return (
    <>
      <SearchBar />
      <div className="all-books">
        <h2>All Books</h2>
        <div className="carousel-container">
          <button
            onClick={handlePrevAllBooks}
            className="carousel-button prev-button"
          >
            ‹
          </button>
          <div className="carousel-track-container">
            <ul className="carousel-track">
              {allBooks
                .slice(
                  currentSlideAllBooks * booksPerSlidePhone,
                  (currentSlideAllBooks + 4) * booksPerSlidePhone
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
          <button
            onClick={handleNextAllBooks}
            className="carousel-button next-button"
          >
            ›
          </button>
        </div>
      </div>
      <div className="all-books">
        <h2>Genres</h2>
        <GenreFilter />
      </div>
      <div className="all-books">
        <h2>Your Books</h2>
      </div>
      <div className="carousel-container">
        <button
          onClick={handlePrevFilteredBooks}
          className="carousel-button prev-button"
        >
          ‹
        </button>
        <div className="carousel-track-container">
          <ul className="carousel-track">
            {filteredBooks
              .slice(
                currentSlideFilteredBooks * booksPerSlidePhone,
                (currentSlideFilteredBooks + 4) * booksPerSlidePhone
              )
              .map((filteredBook) => (
                <li key={filteredBook.id} className="carousel-slide">
                  <Link to={`/details/${filteredBook.id}`}>
                    <BookCard book={filteredBook} />
                  </Link>
                  <button
                    className="like-btn"
                    onClick={() => handleLike(filteredBook.id)}
                  >
                    <img
                      width={"50px"}
                      src={isLike[filteredBook.id] ? likeIcon : unlikeIcon}
                      alt="heart icon"
                    />
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <button
          onClick={handleNextFilteredBooks}
          className="carousel-button next-button"
        >
          ›
        </button>
      </div>
    </>
  );
}

export default AllBooks;
