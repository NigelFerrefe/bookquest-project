import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../../supabase/config";
import "./BookPage.css";
import EditForm from "../../components/EditForm/EditForm.jsx";

function BookDetails() {
  const [bookDetails, setBookDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  async function getBookDetail() {
    try {
      let response = await supabase
        .from("books")
        .select("*")
        .eq("id", bookId)
        .single();

      setBookDetails(response.data);
    } catch (error) {
      console.log(error);
      navigate("/not-found");
    }
  }

  useEffect(() => {
    getBookDetail();
  }, [bookId]);

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

  const handleClick = () => navigate("/");
  const handleMessage = () => setShowMessage(true);

  async function deleteBook() {
    try {
      await supabase.from("books").delete().eq("id", bookDetails.id);

      setBookDetails({});
      navigate("/");
    } catch (error) {
      console.error("This is the error:", error);
    }
  }

  return (
    <>
      <h2 className="title">{title}</h2>
      <div className="details-container">
        <div className="detail-img">
          <img src={image} alt={`Img of ${title}`} />
          <p className="tags">
            {genre.map((eachGenre, index) => (
              <Link to={`/genre/${eachGenre}`} key={index}>
                {eachGenre.toUpperCase()}
              </Link>
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
          <div className="div-btn-details">
            {!isEditing ? (
              <div>
                <button
                  className="btn-detail"
                  onClick={() => setIsEditing(true)}
                >
                  Edit details
                </button>
              </div>
            ) : (
              <EditForm
                bookDetails={bookDetails}
                setBookDetails={setBookDetails}
                setIsEditing={setIsEditing}
              />
            )}

            <div>
              <button className="btn-detail" onClick={handleClick}>
                Back to your list
              </button>
            </div>
            <div>
              <button
                className="btn-detail"
                id="delete"
                onClick={handleMessage}
              >
                Delete book
              </button>
              {showMessage && (
                <div className="screen-message">
                  <div className="message-container">
                    <h4>Are you sure you want to leave this bookquest?</h4>
                    <div className="btns-container">
                      <button
                        onClick={deleteBook}
                        className="btn-message"
                        id="red-delete"
                      >
                        Detele book
                      </button>
                      <button
                        className="btn-message"
                        onClick={() => setShowMessage(false)}
                        id="green"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
