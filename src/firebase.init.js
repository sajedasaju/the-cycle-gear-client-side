// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaWwB3MhhQR1RSOb96wk_BT4NvmP53nRI",
    authDomain: "the-cycle-gear.firebaseapp.com",
    projectId: "the-cycle-gear",
    storageBucket: "the-cycle-gear.appspot.com",
    messagingSenderId: "285550441188",
    appId: "1:285550441188:web:b3abccbb9a1a49829ab2f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;