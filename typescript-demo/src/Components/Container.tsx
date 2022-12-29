type ContainerProps = {
  styles: React.CSSProperties
}
const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Text Content Goes Here</div>
}

export default Container
