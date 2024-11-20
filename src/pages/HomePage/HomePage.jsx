import AllBooks from "../../components/AllBooks/BookList.jsx";
//import BookListFiltered from "../components/bookListFiltered/bookListFiltered";
import Hero from "../../components/Hero/Hero.jsx";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="main-container">
      <Hero />
      <AllBooks/>

    </div>
  );
}

export default HomePage;
