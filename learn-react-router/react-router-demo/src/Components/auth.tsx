import {
  createContext,
  useState,
  PropsWithChildren,
  useContext,
  SetStateAction,
} from 'react'
import Users from './Users'

export type UserData = string

type IAuth = {
  user: UserData | null
  login: (user: UserData) => SetStateAction<void>
  logout: () => SetStateAction<void>
}

const AuthContext = createContext<IAuth | null>(null)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserData | null>(null)

  const login = (user: UserData) => setUser(user)

  const logout = () => setUser(null)

  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
