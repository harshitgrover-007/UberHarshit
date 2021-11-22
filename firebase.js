import { GoogleAuthProvider, getAuth, GithubAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY8tK59luY2-XnTyURgn16kjjuiczat58",
  authDomain: "harshit-uber-d9586.firebaseapp.com",
  projectId: "harshit-uber-d9586",
  storageBucket: "harshit-uber-d9586.appspot.com",
  messagingSenderId: "1064163749525",
  appId: "1:1064163749525:web:8e7e969edda1e77455759c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const github = new GithubAuthProvider();
const auth = getAuth();

export { app, auth, provider, github };
