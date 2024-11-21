import supabase from "../../supabase/config";
import { useState, useEffect } from "react";
import BookCard from "../../components/BooksCard/BookCard";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import Profile from "../../assets/Profile-picture.png";
import ChevronLeft from "../../assets/chevron-left.svg";
import ChevronRight from "../../assets/chevron-right.svg";

function ProfilePage() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [favouriteBooks, setFavouriteBooks] = useState([]);
  const [currentSlideFavouriteBooks, setCurrentSlideFavouriteBooks] =
    useState(0);

  const booksPerSlidePhone = 1;

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
  async function getFavouriteBooks() {
    try {
      const response = await supabase
        .from("books")
        .select("*")
        .eq("isFavourite", true);

      setFavouriteBooks(response.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  useEffect(() => {
    getFilteredBooks();
    getFavouriteBooks();
  }, []);

  const totalSlidesFavouriteBooks = Math.ceil(
    favouriteBooks.length / booksPerSlidePhone
  );

  const handleNextFavouriteBooks = () => {
    setCurrentSlideFavouriteBooks(
      (prev) => (prev + 1) % totalSlidesFavouriteBooks
    );
  };

  const handlePrevFavouriteBooks = () => {
    setCurrentSlideFavouriteBooks((prev) =>
      prev === 0 ? totalSlidesFavouriteBooks - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Profile Section */}
      <section className="main-container">
        <div className="yourprofile">
          <div className="profile-info">
            <div className="user-info">
              <h2>Profile</h2>
              <img width={150} src={Profile} alt="profile-picture" />
              <p>Name: Piet-Hein</p>
              <p>Favorite Author: Marcel Bosch</p>
              <p>Reading Goals: Reading a book every month</p>
              <p>
                Your Reading Spaces:{" "}
                <a href="https://www.tomirisllibreria.com/">Tomirisllibreria</a>
              </p>
              <p>Don't forget to support your local Libraries!</p>
            </div>
            <div className="profile-stats">
              <div className="books-amount">
                <h3>Books: {`${filteredBooks.length}`}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="favourite-books">
          {/* Carousel Section */}
          <h2>Your Favourite Books</h2>
          <div className="carousel-container">
            <div className="carousel-track-container">
              <button
                onClick={handlePrevFavouriteBooks}
                className="carousel-button prev-button"
              >
                <img src={ChevronLeft} alt="chevron-left" />
              </button>
              <ul className="carousel-track">
                {favouriteBooks
                  .slice(
                    currentSlideFavouriteBooks * booksPerSlidePhone,
                    (currentSlideFavouriteBooks + 4) * booksPerSlidePhone
                  )
                  .map((favouriteBook) => (
                    <li key={favouriteBook.id} className="favourite-book-slide">
                      <Link to={`/details/${favouriteBook.id}`}>
                        <BookCard book={favouriteBook} />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <button
              onClick={handleNextFavouriteBooks}
              className="carousel-button next-button"
            >
              <img src={ChevronRight} alt="chevron-right" />
            </button>
          </div>
        </div>
        {/* Book-collection */}
        <div className="book-titles">
          <h2>Book-Collection</h2>
        </div>
        <div className="books-container">
          {filteredBooks.map((filteredBook) => (
            <Link key={filteredBook.id} to={`/details/${filteredBook.id}`}>
              <div className="personal-book">
                <BookCard book={filteredBook} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProfilePage;
