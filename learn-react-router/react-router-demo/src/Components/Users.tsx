import { NavLink, Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
      <h2 className='link'>
        <NavLink to='1'>User 1</NavLink>
      </h2>
      <h2 className='link'>
        <NavLink to='2'>User 2</NavLink>
      </h2>
      <h2 className='link'>
        <NavLink to='3'>User 3</NavLink>
      </h2>
      <h2 className='link'>
        <NavLink to='admin'>ADMIN</NavLink>
      </h2>
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({ filter: '' })}>
          Reset Filter
        </button>
        {showActiveUsers ? (
          <h2>Showing Active Users</h2>
        ) : (
          <h2>Showing All users</h2>
        )}
      </div>
      <Outlet />
    </div>
  )
}

export default Users
