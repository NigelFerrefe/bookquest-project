import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../supabase/config";
import "./BookPage.css";

function BookDetails() {
  const [bookDetails, setBookDetails] = useState(null); // Initialize as null
  const { bookId } = useParams();
  const navigate = useNavigate();

  async function getBookDetail() {
    try {
      let response = await supabase
        .from("books")
        .select("*")
        .eq("id", bookId)
        .single(); // Use single to get one book

      setBookDetails(response.data);
    } catch (error) {
      console.log(error);
      navigate("/not-found"); // Redirect if book not found or error occurs
    }
  }

  useEffect(() => {
    getBookDetail();
  }, [bookId]); // Add bookId as a dependency

  if (!bookDetails) return <div>Loading...</div>;

  const {
    title,
    author,
    genre,
    publisher,
    language,
    description,
    price,
    pages,
    image,
    type_of_book,
  } = bookDetails;

  const handleClick = (e) => {
    e.preventDefault();
    if (!bookDetails.isBought) {
      navigate("/");
    } else {
      navigate("/fs");
    }
  };

  return (
    <>
      <h2 className="title">{title}</h2>
      <div className="details-container">
        <div className="detail-img">
          <img src={image} alt={`Img of ${title}`} />
          {/* <p className="tags">{genre.join(" ").toUpperCase()}</p> */}
          <p className="tags">
            {Array.isArray(genre) &&
              genre.map((eachGenre, index) => (
                <button key={index}>{eachGenre.toUpperCase()}</button>
              ))}
          </p>
        </div>
        <div>
          <div className="detail-text">
            <p>
              <strong>Author:</strong> {author}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>
            <p>
              <strong>Publisher:</strong> {publisher}
            </p>
            <p>
              <strong>Language:</strong> {language}
            </p>
            <p>
              <strong>Price:</strong> {price}€
            </p>
            <p>
              <strong>Pages:</strong> {pages}
            </p>
            <p>
              {type_of_book.toLowerCase() === "novel" ? (
                <>
                  <strong>This book is a</strong> {type_of_book.toLowerCase()}
                </>
              ) : (
                <>
                  <strong>This book is an</strong> {type_of_book.toLowerCase()}
                </>
              )}
            </p>
          </div>
          <div className="back-btn-detail">
            <button id="back-btn-detail" onClick={handleClick}>
              Back to your list
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
