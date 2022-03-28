// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRYdvsPJKahatMkv0l0JIiRAv35Uwm1PE",
    authDomain: "trivia-time-p4.firebaseapp.com",
    projectId: "trivia-time-p4",
    storageBucket: "trivia-time-p4.appspot.com",
    messagingSenderId: "369693027173",
    appId: "1:369693027173:web:a28483913ec09e8de00f8c"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;