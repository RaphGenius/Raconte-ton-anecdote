// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-6b345.firebaseapp.com",
  projectId: "react-firebase-redux-6b345",
  storageBucket: "react-firebase-redux-6b345.appspot.com",
  messagingSenderId: "7852771808",
  appId: "1:7852771808:web:8d4e9ec968c8a8af7ec385",
});

// Initialize Firebase

export const auth = app.auth();
export default app;
