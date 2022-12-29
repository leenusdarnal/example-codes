import React, { useEffect, useRef } from 'react'

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return <input type='text' ref={inputRef} placeholder='Enter text here' />
}

export default DomRef
