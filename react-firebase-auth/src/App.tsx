import { signInWithRedirect } from 'firebase/auth'
import './App.css'
import {
  firebaseAuth,
  googleProvider,
  googleSignIn,
} from './firebase/firebaseConfig'

function App() {
  return (
    <>
      <div className='App'>Hellow World!</div>
      <button onClick={() => googleSignIn()}>SignIn</button>
    </>
  )
}

export default App
