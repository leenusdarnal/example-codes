// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBHWvI7j086-wVqUcnpzpW0sxncgGyHGCo',
  authDomain: 'react-auth-15014.firebaseapp.com',
  projectId: 'react-auth-15014',
  storageBucket: 'react-auth-15014.appspot.com',
  messagingSenderId: '375009254738',
  appId: '1:375009254738:web:3a3eae0134856e5a27ee8b',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const googleProvider = new GoogleAuthProvider()
export const googleSignIn = () => {
  signInWithRedirect(firebaseAuth, googleProvider)
}
