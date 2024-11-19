import { useState } from "react";
import supabase from "../../supabase/config";
import "./EditForm.css";

function EditForm({ bookDetails, setBookDetails, setIsEditing }) {
  const [editBook, setEditBook] = useState(bookDetails);

  const handleInputChange = (field, value) => {
    setEditBook((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    editBook.genre =
      typeof editBook.genre === "string"
        ? editBook.genre.split(",")
        : editBook.genre;

    try {
      const { data } = await supabase
        .from("books")
        .update(editBook)
        .match({ id: bookDetails.id })
        .select("*");

      setBookDetails(data[0]);
      setIsEditing(false);
      alert("Book details updated successfully!");
    } catch (error) {
      console.error("This is the error:", error.message);
      alert("Failed to update book. Please try again.");
    }
  };

  return (
    <div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="form-tag">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={editBook.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
        </div>

        <div className="form-tag">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={editBook.author}
            onChange={(e) => handleInputChange("author", e.target.value)}
          />
        </div>

        <div className="form-tag">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            value={editBook.genre}
            onChange={(e) => handleInputChange("genre", e.target.value)}
          />
          <small>Separate each genre with commas</small>
        </div>

        <div className="form-tag">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            rows="2"
            value={editBook.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </div>

        <div className="form-tag">
          <label htmlFor="publisher">Publisher:</label>
          <input
            type="text"
            id="publisher"
            value={editBook.publisher}
            onChange={(e) => handleInputChange("publisher", e.target.value)}
          />
        </div>

        <div className="form-tag">
          <label htmlFor="language">Language:</label>
          <input
            type="text"
            id="language"
            value={editBook.language}
            onChange={(e) => handleInputChange("language", e.target.value)}
          />
        </div>

        <div className="form-tag">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={editBook.price}
            onChange={(e) => handleInputChange("price", e.target.value)}
          />
        </div>

        <div className="form-tag">
          <label htmlFor="pages">Pages:</label>
          <input
            type="number"
            id="pages"
            value={editBook.pages}
            onChange={(e) => handleInputChange("pages", e.target.value)}
          />
        </div>

        <div className="form-tag">
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            value={editBook.image}
            onChange={(e) => handleInputChange("image", e.target.value)}
          />
        </div>

        <div className="form-tag">
          <label htmlFor="type_of_book">Type of Book:</label>
          <select
            id="type_of_book"
            value={editBook.type_of_book}
            onChange={(e) => handleInputChange("type_of_book", e.target.value)}
          >
            <option value="novel">Novel</option>
            <option value="essay">Essay</option>
          </select>
        </div>

        <div className="form-tag">
          <label htmlFor="isBought">Have you bought this book?</label>
          <input
            type="checkbox"
            id="isBought"
            checked={editBook.isBought}
            onChange={(e) => handleInputChange("isBought", e.target.checked)}
          />
        </div>

        <div className="btns-form">
          <button id="green-btn" type="submit">Save changes</button>
          <button id="red-btn" onClick={() => setIsEditing(false)}>Cancel changes</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
