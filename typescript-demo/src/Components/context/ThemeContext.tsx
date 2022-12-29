import { createContext } from 'react'
import { theme } from './theme'

export const ThemeContext = createContext(theme)

type ThemeContextProviderProp = {
  children: React.ReactNode
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProp) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
