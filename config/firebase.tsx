// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZabZp_69MDUsXEKDr1LR4pE3j81XpfOw",
  authDomain: "chat-app-ba539.firebaseapp.com",
  projectId: "chat-app-ba539",
  storageBucket: "chat-app-ba539.appspot.com",
  messagingSenderId: "1075063324014",
  appId: "1:1075063324014:web:e74792bcd862a30f37557f"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }