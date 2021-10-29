// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


// Function for Initialize Firebase
function initializeAuthentication()
{
    initializeApp(firebaseConfig);
}


export default initializeAuthentication
