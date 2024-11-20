import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../../supabase/config";
import BookFilterCard from "../../components/BookFilteredCard/BookFilterCard";

function GenrePage() {
  const { genre } = useParams();
  const [genreBooks, setGenreBooks] = useState([]);

  useEffect(() => {
    async function fetchBooksByGenre() {
      try {
        const { data, error } = await supabase
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
    <div>
      <h1>
        {genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase()} books
      </h1>

      <div>
        {genreBooks.map((genreBook) => (
          <div key={genreBook.id}>
            <BookFilterCard genreBook={genreBook} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenrePage;
