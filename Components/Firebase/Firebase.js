// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDKmGm4FDNlSOl0nEnqfImR3Vgzn9zgxYo",
  authDomain: "posiden-36132.firebaseapp.com",
  projectId: "posiden-36132",
  storageBucket: "posiden-36132.appspot.com",
  messagingSenderId: "238455306583",
  appId: "1:238455306583:web:51d1036f4d60a0687e2612"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAbatFZBb6fTa5wjnTAjxT6JJ_nx5Uyf1Y",
//   authDomain: "apistore-b3b53.firebaseapp.com",
//   projectId: "apistore-b3b53",
//   storageBucket: "apistore-b3b53.appspot.com",
//   messagingSenderId: "838630289761",
//   appId: "1:838630289761:web:602b48706425027b3e5520",
//   measurementId: "G-TN1YKY9H0Z"
// };




// const firebaseConfig = {
//   apiKey: "AIzaSyAbatFZBb6fTa5wjnTAjxT6JJ_nx5Uyf1Y",
//   authDomain: "apistore-b3b53.firebaseapp.com",
//   projectId: "apistore-b3b53",
//   storageBucket: "apistore-b3b53.appspot.com",
//   messagingSenderId: "838630289761",
//   appId: "1:838630289761:web:602b48706425027b3e5520",
//   measurementId: "G-TN1YKY9H0Z"
// };

// Initialize Firebase
const Apiapp = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(Apiapp);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(Apiapp);
export const dbFireStore = getFirestore(Apiapp);
// console.log('analytics , auth', analytics , auth)
export default function(){return(<>Nothing any information !</>)}