type ButtonProps = {
  variant: 'red' | 'green'
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`bg-${variant}-700`} {...rest}>
      {children}
    </button>
  )
}

export default Button
