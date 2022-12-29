import { useState } from 'react'

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogIn = () => {
    setIsLoggedIn(true)
  }
  const handleLogOut = () => {
    setIsLoggedIn(false)
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
      <div>User is {isLoggedIn ? `Logged In` : `Logged Out`}</div>
    </div>
  )
}

export default LoggedIn
