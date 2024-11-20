import { useEffect, useState } from "react";
import supabase from "../../supabase/config";
import { useNavigate, Link } from "react-router-dom";
import "./NewBook.css";

const initialFormData = {
  title: "",
  author: "",
  genre: [],
  publisher: "",
  language: "",
  description: "",
  price: 0,
  pages: 0,
  image: "",
  type_of_book: "novel",
  isBought: false,
};

function NewBookPage() {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  async function getAllBooks() {
    try {
      let response = await supabase
        .from("books")
        .select("*")
        .eq("isBought", false);
      console.log("Fetched books:", response.data);
    } catch (e) {
      console.log("Something went wrong", e);
    }
  }

  function handleOnChange(e) {
    const value = e.target.value;
    const field = e.target.id;

    setFormData({
      ...formData,
      [field]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const dataToSubmit = {
      ...formData,
      genre:
        typeof formData.genre === "string"
          ? formData.genre.split(",").map((g) => g.trim())
          : formData.genre,
    };

    try {
      const { data, error } = await supabase
        .from("books")
        .insert([dataToSubmit]);
      if (error) throw error;

      console.log("Book created successfully:", data);
      getAllBooks();
      setFormData(initialFormData);
      navigate("/");
    } catch (error) {
      console.error("Error creating book:", error);
    }
  }

  return (
    <div className="add-book">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add Your Book</h2>
        <label htmlFor="title">
          <span>*</span> Title:
        </label>
        <input
          onChange={handleOnChange}
          value={formData.title}
          type="text"
          id="title"
          required
        />
        <label htmlFor="author">
          <span>*</span> Author:
        </label>
        <input
          onChange={handleOnChange}
          value={formData.author}
          type="text"
          id="author"
          required
        />
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          placeholder="Separate each genre with commas"
          onChange={handleOnChange}
        />
        <label htmlFor="publisher">Publisher: </label>
        <input
          onChange={handleOnChange}
          value={formData.publisher}
          type="text"
          id="publisher"
        />
        <label htmlFor="language">Language: </label>
        <input
          onChange={handleOnChange}
          value={formData.language}
          type="text"
          id="language"
        />
        <label htmlFor="description">Description: </label>
        <textarea
          onChange={handleOnChange}
          value={formData.description}
          type="text"
          id="description"
        />
        <label htmlFor="price">Price: </label>
        <input
          onChange={handleOnChange}
          value={formData.price}
          type="number"
          id="price"
        />
        <label className="label" htmlFor="pages">
          Pages:{" "}
        </label>
        <input
          onChange={handleOnChange}
          value={formData.pages}
          type="number"
          id="pages"
        />
        <label htmlFor="image">Image URL: </label>
        <input
          onChange={handleOnChange}
          value={formData.image}
          type="text"
          id="image"
        />
        <label htmlFor="type_of_book">Type of Book: </label>
        <select
          id="type_of_book"
          value={formData.type_of_book}
          onChange={handleOnChange}
        >
          <option value="novel">Novel</option>
          <option value="essay">Essay</option>
        </select>
        <button className="submit-button" type="submit">
          Add Book
        </button>
        <Link to="/" className="cancel-button">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default NewBookPage;
