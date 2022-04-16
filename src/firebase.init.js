// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClvwseRW1WEHv9neHgapQKYK_VLajRYJ0",
    authDomain: "my-project-1-99733.firebaseapp.com",
    projectId: "my-project-1-99733",
    storageBucket: "my-project-1-99733.appspot.com",
    messagingSenderId: "687461203471",
    appId: "1:687461203471:web:3d0450cd0885c3c88b6d7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;