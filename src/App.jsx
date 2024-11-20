import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProfilePage from "./pages/ProfilePage"
import BookPage from "./pages/BookPage"
import NewBookPage from "./pages/NewBookPage"
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import GenrePage from './pages/GenrePage'

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
