import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage.jsx"
import AboutPage from "./pages/AboutPage/AboutPage.jsx"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx"
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx"
import BookPage from "./pages/BookPage/BookPage.jsx"
import NewBookPage from "./pages/NewBookPage/NewBookPage.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from './components/Footer/Footer.jsx'
import GenrePage from './pages/GenrePage/GenrePage.jsx'

function App() {
  // the app component is very clean and simple, well done! 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/details/:bookId' element={<BookPage/>}/>
      <Route path='/genre/:genre' element={<GenrePage/>}/>
      <Route path='/newbook' element={<NewBookPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
