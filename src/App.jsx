import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import BookPage from "./pages/BookPage/BookPage"
import NewBookPage from "./pages/NewBookPage/NewBookPage"
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import GenrePage from './pages/GenrePage/GenrePage'

function App() {


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
