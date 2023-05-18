// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMh4RAhnCXLjFBrZWjj_4ROkCd9KSzDkY",
  authDomain: "b7a11-toy-marketplace-7b5f7.firebaseapp.com",
  projectId: "b7a11-toy-marketplace-7b5f7",
  storageBucket: "b7a11-toy-marketplace-7b5f7.appspot.com",
  messagingSenderId: "826153633412",
  appId: "1:826153633412:web:a81f45c20fe1dac9dc24d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;