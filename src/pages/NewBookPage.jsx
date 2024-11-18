import { useEffect, useState } from "react";
import supabase from "../supabase/config";


const initialFormData = {
  title: "",
  author: "",
  genre: [],
  publisher: "",
  language: "",
  description: "",
  price: 0,
  pages: 0,
  image:"",
  type_of_book: "novel",
  isBought: false
};

function NewBookPage() {
  const [formData, setFormData] = useState(initialFormData);
//   const [genres, setGenres] = useState([])

//     useEffect(() => {
//         async function fetchGenres() {
//             try {
//                 const {data, error} = await supabase.from("books").select("genre");
//                 if (error) throw error;
//                 setGenres(data);
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         fetchGenres();
//     }, [])

      async function getAllBooks() {
        try {
          let response;
          response = await supabase
            .from("books")
            .select("*")
            .eq("isBought", false);
        } catch (e) {
          console.log("Something went wrong", e);
        }
      }

       function handleOnChange(e) {
        const value =
            e.target.type === "number"
            ? Number(e.target.value)
            : e.target.value;
            const field = e.target.id;

            setFormData({
            ...formData,
            [field]: value
        })
       }



    async function handleSubmit(e) {
      e.preventDefault();

        supabase
        .from("books")
        .insert([formData])
        .then((res) => {
            console.log(res);
            getAllBooks();
            setFormData(initialFormData);
        })
        .catch ((error) => {
            console.log(error);
        })
    }

  return (
    <>
      <div className="add-book">
        <h1>Add a Book</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            onChange={handleOnChange}
            value={formData.title}
            type="text"
            id="title"
          />
          <label htmlFor="author">Author: </label>
          <input
            onChange={handleOnChange}
            value={formData.author}
            type="text"
            id="author"
          />
        {/* <label htmlFor="genre">Genre: </label>
        <select id="genre" value={formData.genre} onChange={handleOnChange}>
        <option value=""> Select a Genre </option>
            {genres.map((genre, index) => {
            <option key={index} value={genre}>
                {genre}
            </option>
            })}
        </select> */}

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
          <input
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
          <label htmlFor="pages">Pages: </label>
          <input
            onChange={handleOnChange}
            value={formData.pages}
            type="number"
            id="pages"
          />
          <label htmlFor="image">Image URL: </label>
          <input
            onChange={handleOnChange}
            type="text"
            id="image"
          />
          <label htmlFor="type_of_book">Type of Book: </label>
          <select id="type_of_book" onChange={handleOnChange}>
            <option value="novel">Novel</option>
            <option value="essay">Essay</option>
          </select>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
}

export default NewBookPage;
