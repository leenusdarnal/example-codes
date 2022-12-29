type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  return (
    <>
      <h1 className='text-center text-5xl m-auto'>
        {props.isLoggedIn
          ? `Welcome to The 21st Century ${props.name} You have ${
              props.messageCount || 0
            }
        unread Messages`
          : `Welcome Guests`}
      </h1>
    </>
  )
}

export default Greet
