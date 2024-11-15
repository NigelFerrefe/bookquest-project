import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/HomePage"
import NotFoundPage from "./pages/HomePage"
import ProfilePage from "./pages/HomePage"
import BookPage from "./pages/HomePage"
import NewBookPage from "./pages/HomePage"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'


function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/details/:bookId' element={<BookPage/>}/>
      <Route path='/newbook' element={<NewBookPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
