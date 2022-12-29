import { useContext } from 'react'
import { UserContext } from './UserContext'

const User = () => {
  const userContext = useContext(UserContext)
  const handleLogIn = () => {
    userContext?.setUser({
      name: 'leenus',
      email: 'leenus@example.com',
    })
  }
  const handleLogOut = () => {
    userContext.setUser(null)
  }
  return (
    <div className='flex flex-row gap-20 '>
      <button
        onClick={handleLogIn}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
      >
        Login
      </button>
      <button
        onClick={handleLogOut}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
      >
        Logout
      </button>
      <div>User Name is {userContext.user?.name}</div>
      <div>User Email is {userContext.user?.email} </div>
    </div>
  )
}

export default User
