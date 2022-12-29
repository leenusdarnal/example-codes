import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Box = () => {
  const theme = useContext(ThemeContext)
  return (
    <div
      style={{
        backgroundColor: theme.secondary.main,
        color: theme.primary.text,
      }}
    >
      Box
    </div>
  )
}

export default Box
