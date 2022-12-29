import './App.css'
import Text from './Components/polynorphic/Text'

function App() {
  return (
    <div className='flex flex-col gap-10'>
      <Text as='h1' size='xl' color='red'>
        Heading
      </Text>
      <Text as='p' size='lg' color='green'>
        Paragraph
      </Text>
      <Text as='label' htmlFor='someID' size='sm' color='green'>
        Label
      </Text>
    </div>
  )
}

export default App
