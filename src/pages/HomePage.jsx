import AllBooks from "../components/AllBooks/BookList";
//import BookListFiltered from "../components/bookListFiltered/bookListFiltered";
import Hero from "../components/Hero/Hero";
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
