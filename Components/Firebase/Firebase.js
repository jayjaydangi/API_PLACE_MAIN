// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbatFZBb6fTa5wjnTAjxT6JJ_nx5Uyf1Y",
  authDomain: "apistore-b3b53.firebaseapp.com",
  projectId: "apistore-b3b53",
  storageBucket: "apistore-b3b53.appspot.com",
  messagingSenderId: "838630289761",
  appId: "1:838630289761:web:602b48706425027b3e5520",
  measurementId: "G-TN1YKY9H0Z"
};

// Initialize Firebase
const Apiapp = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(Apiapp);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(Apiapp);
// console.log('analytics , auth', analytics , auth)
export default function(){return(<>Nothing any information !</>)}