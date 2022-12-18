import React, { useState } from 'react'
import { useNavigate, useLocation, redirect } from 'react-router-dom'
import { useAuth, UserData } from './auth'

const Login = () => {
  const [user, setUser] = useState<UserData>('')

  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectPath = location.state?.path || '/'
  const handleLogin = () => {
    if (user === '') {
      alert('enter user')
      return
    }
    auth?.login(user)
    navigate(redirectPath, { replace: true })
  }
  const handleState = (user: UserData) => {
    setUser(user)
  }
  return (
    <div>
      <label>
        Username:
        <input
          type='text'
          onChange={(e) => handleState(e.target.value)}
        ></input>
      </label>
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  )
}

export default Login
