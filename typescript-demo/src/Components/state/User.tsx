import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogIn = () => {
    setUser({
      name: 'Leenus',
      email: 'leenus@example.com',
    })
  }
  const handleLogOut = () => {
    setUser({} as AuthUser)
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
      <div>User Name is {user.name}</div>
      <div>User Email is {user.email}</div>
    </div>
  )
}

export default User
