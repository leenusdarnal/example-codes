import React, { useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchUsers } from './userSlice'

const UserView = () => {
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <h2>List of Users </h2>

      {user.loading && <div>Loading ...</div>}
      {!user.loading && user.error ? <div>{user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id} className='card'>
              <div className='name'>{user.name}</div>
              <div className='email'>Email:{user.email}</div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default UserView
