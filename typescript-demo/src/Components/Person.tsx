import { PersonProps } from './Person.types'

const Person = (props: PersonProps) => {
  return (
    <h2 className='text-center text-5xl m-auto'>{`${props.name.first} ${props.name.last}`}</h2>
  )
}

export default Person
