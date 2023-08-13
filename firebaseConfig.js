// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHsmsrGoUpfoXdcgjhODTZZtjYmzeCoTw",
  authDomain: "broker-app-392214.firebaseapp.com",
  projectId: "broker-app-392214",
  storageBucket: "broker-app-392214.appspot.com",
  messagingSenderId: "865126269656",
  appId: "1:865126269656:web:1fbd8bf3e937c01d0e4dad",
  measurementId: "G-YDG4J1BN6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 


//Android: 865126269656-22pdmh4nn209vv3fp5an1bgk1os769pa.apps.googleusercontent.com
//IOS: 865126269656-0n7sm5nkkuc8liq30dv10frc0qekn32b.apps.googleusercontent.com