import { NavLink, Routes } from 'react-router-dom'
import { useAuth } from './auth'
import Home from './Home'

const Navbar = () => {
  const auth = useAuth()
  return (
    <nav className='header'>
      <span className='link'>
        <NavLink to='/'>Home</NavLink>
      </span>
      <span className='link'>
        <NavLink to='/products'>Products</NavLink>
      </span>
      <span className='link'>
        <NavLink to='/about'>About</NavLink>
      </span>
      <span className='link'>
        <NavLink to='/users'>Users</NavLink>
      </span>
      <span className='link'>
        <NavLink to='/profile'>Profile</NavLink>
      </span>
      {!auth?.user && (
        <span className='link'>
          <NavLink to='/login'>Login</NavLink>
        </span>
      )}
    </nav>
  )
}

export default Navbar
