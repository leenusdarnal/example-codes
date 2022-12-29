import React from 'react'

type TextOwnProps<E extends React.ElementType> = {
  size?: 'sm' | 'lg' | 'xl'
  color?: 'red' | 'green'
  children: React.ReactNode
  as?: E
}
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>
const Text = <E extends React.ElementType = 'div'>({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || 'div'
  const style = `text-${size} text-${color}-800 `
  return <Component className={`${style}`}>{children}</Component>
}

export default Text
