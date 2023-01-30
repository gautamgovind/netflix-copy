// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjEWu_WDkWk1dXaGBJOLeWG9_bBNDLOOc",
    authDomain: "netflix-copy-62d13.firebaseapp.com",
    projectId: "netflix-copy-62d13",
    storageBucket: "netflix-copy-62d13.appspot.com",
    messagingSenderId: "338125782700",
    appId: "1:338125782700:web:f0c4da4b4e8b1b0a7f6909"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }