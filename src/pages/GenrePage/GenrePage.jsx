import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../../supabase/config";
import BookFilterCard from "../../components/BookFilteredCard/BookFilterCard.jsx";
import "./GenrePage.css"


function GenrePage() {
  const { genre } = useParams();
  const [genreBooks, setGenreBooks] = useState([]);

  useEffect(() => {
    // the useEffect is well written and the code is clean
    async function fetchBooksByGenre() {
      try {
        const { data, error } = await supabase // you used the supabase as it is in their documentation, make sure you understand it!
          .from("books")
          .select("*")
          .contains("genre", [genre]);

        if (error) throw error;
        setGenreBooks(data);
      } catch (err) {
        console.error("This is the error:", err);
      }
    }

    fetchBooksByGenre();
  }, [genre]);

  return (
    <div className="genre-container">
      <h1>
        {genre.toLocaleUpperCase()} BOOKS
      </h1>

      <div className="genre-cards">
        {genreBooks.map((genreBook) => (
          <div key={genreBook.id} className="each-book">
            <BookFilterCard genreBook={genreBook} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenrePage;
