import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
      <div>
        <input type='search' placeholder='Search products'></input>
      </div>
      <nav className='secondary-header'>
        <span className='link-secondary'>
          <Link to='featured'>Featured</Link>
        </span>
        <span className='link-secondary'>
          <Link to='new'>New</Link>
        </span>
        <Outlet />
      </nav>
    </>
  )
}

export default Product
