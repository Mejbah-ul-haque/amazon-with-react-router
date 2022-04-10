// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzbdnrRJiYmHSxWU4vr2DDTATercXpCLM",
    authDomain: "with-react-router.firebaseapp.com",
    projectId: "with-react-router",
    storageBucket: "with-react-router.appspot.com",
    messagingSenderId: "988996288848",
    appId: "1:988996288848:web:b5f4a141ac8dd8e8d9ec55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export default auth;