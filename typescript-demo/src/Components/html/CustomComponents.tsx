import Greet from '../Greet'
// To use type of another component
const CustomComponents = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>
}

export default CustomComponents
