// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFob-xlc9dNYTGMiv2rkIaikFz5qmBeq8",
    authDomain: "dragon-news-e6f67.firebaseapp.com",
    projectId: "dragon-news-e6f67",
    storageBucket: "dragon-news-e6f67.appspot.com",
    messagingSenderId: "754536130198",
    appId: "1:754536130198:web:84731468dcca8df9e1c4b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;