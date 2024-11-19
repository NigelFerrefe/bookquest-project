import AllBooks from "../components/AllBooks/BookList";
//import BookListFiltered from "../components/bookListFiltered/bookListFiltered";
import Hero from "../components/Hero/Hero";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <Hero />
      <AllBooks/>
      
    </div>
  );
}

export default HomePage;
