// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"



// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCeFCwJKm7zwfXp1-QzfpktTgY-TbbVldQ",
  authDomain: "hehe-dfe02.firebaseapp.com",
  databaseURL: "https://hehe-dfe02-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hehe-dfe02",
  storageBucket: "hehe-dfe02.appspot.com",
  messagingSenderId: "655594259557",
  appId: "1:655594259557:web:a06b8e4011ff2896cd328c",
  measurementId: "G-0RNCXEPHD4"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBpEcJmdJwx7BK72jE25VGsFY6PrRkbY_k",
//   authDomain: "abhijeet-700c5.firebaseapp.com",
//   projectId: "abhijeet-700c5",
//   storageBucket: "abhijeet-700c5.appspot.com",
//   messagingSenderId: "743443205755",
//   appId: "1:743443205755:web:1de82983fceeab7ed41cde"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)