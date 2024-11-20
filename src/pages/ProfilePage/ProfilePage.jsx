import supabase from "../../supabase/config";
import { useState, useEffect } from "react";
import BookCard from "../../components/BooksCard/BookCard";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import Profile from "../../assets/Profile-picture.png";

function ProfilePage() {
  const [filteredBooks, setFilteredBooks] = useState([]);

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
    getFilteredBooks();
  });

  return (
    <section>
      <div className="yourprofile">
        <div className="profile-info">
          <h2>Your Profile</h2>
          <img width={150} src={Profile} alt="profile-picture" />
          <p>Name: </p>
          <p>Favorite author: </p>
          <p>Reading-Goals: </p>
          <p>BookLinks: </p>
        </div>
        <div className="book-statistics">
          <p>Books: {`${filteredBooks.length}`} </p>
        </div>
        <div className="genres">
          <p>Genres: </p>
        </div>
      </div>
      <div className="book-titles">
        <h3>Your Books</h3>
      </div>
      <div className="books-container">
        {filteredBooks.map((filteredBook) => (
          <div className="personal-book">
            <Link to={`/details/${filteredBook.id}`}>
              <BookCard book={filteredBook} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfilePage;
