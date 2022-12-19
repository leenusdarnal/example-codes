import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <nav>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='books'>BookList</Link>
        </div>
        <div>
          <Link to='about'>About</Link>
        </div>
      </nav>
    </>
  )
}

export default Home
