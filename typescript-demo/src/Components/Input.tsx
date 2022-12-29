import React from 'react'

type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, handleChange }: InputProps) => {
  return (
    <input
      type='text'
      value={value}
      onChange={handleChange}
      placeholder='Enter Text Here'
      className=' border-stone-900 border-2'
    />
  )
}

export default Input
