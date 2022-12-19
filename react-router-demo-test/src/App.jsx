import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import BookList from './Components/BookList'
import NotFound from './Components/NotFound'
import About from './Components/About'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='books' element={<BookList />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
