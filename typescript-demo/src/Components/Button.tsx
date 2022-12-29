import React from 'react'

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={(event) => props.handleClick(event, 1)}
      className='bg-red-600 w-20 h-14 rounded-full'
    >
      Button
    </button>
  )
}

export default Button
