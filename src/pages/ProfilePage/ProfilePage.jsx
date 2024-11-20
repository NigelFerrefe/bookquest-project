import supabase from "../../supabase/config";
import { useState, useEffect } from "react";
import BookCard from "../../components/BooksCard/BookCard";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import Profile from "../../assets/Profile-picture.png";

function ProfilePage() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [favouriteBooks, setFavouriteBooks] = useState([]);

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
        .eq("isFavourite", true)


      setFavouriteBooks(response.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  useEffect(() => {
    getFilteredBooks();
    getFavouriteBooks();
  });

  return (
    <section>
      <div className="yourprofile">
        <div className="profile-info">
          <h2>Your Profile</h2>
          <img width={150} src={Profile} alt="profile-picture" />
          <p>Name: Piet-Hein</p>
          <p>Favorite author: Marcel Bosch</p>
          <p>Reading-Goals: Read a book every month </p>
          <p>
            Your Reading Spaces:{" "}
            <a href="https://www.tomirisllibreria.com/">
              tomirisllibreria
            </a>
          </p>
          <div className="books-amount">
            <h3> Books: {`${filteredBooks.length}`} </h3>
          </div>
        </div>
      </div>
      <div className="book-titles">
        <h2>Your Book-Collection</h2>
      </div>
      <div className="books-container">
        {filteredBooks.map((filteredBook) => (
          <Link to={`/details/${filteredBook.id}`}>
            <div className="personal-book">
              <BookCard book={filteredBook} />
            </div>
          </Link>
        ))}
      </div>
      <div className="favourite-books">
        {favouriteBooks.map((favouriteBook) => (
          <Link to={`/details/${favouriteBook.id}`}>
            <div className="personal-book">
              <BookCard book={favouriteBook} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProfilePage;
