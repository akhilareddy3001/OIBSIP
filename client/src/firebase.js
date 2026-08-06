import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVXUz0Emx4Q5ZNHVkPs3IPbKLh-jeaha4",
    authDomain: "pizzadeliveryapp-d034d.firebaseapp.com",
    projectId: "pizzadeliveryapp-d034d",
    storageBucket: "pizzadeliveryapp-d034d.firebasestorage.app",
    messagingSenderId: "485740480920",
    appId: "1:485740480920:web:d0d73b62cc6f338a8503ed",
    measurementId: "G-TZYXEW8DYY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();