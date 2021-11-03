import initializeAuthentication from "../Firebase/firebase.initialize";
import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";


// Initialize Firebase
initializeAuthentication();

// SignIn with Google
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth();


    function GoogleSignIn() {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                setUser(result.user);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...

                setError(errorMessage)
            });
    }


    // Get the currently signed-in user----------------------------------------------------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user)
                // ...
            } else {
                // User is signed out
                // ...
                setUser({})
            }
        });
    }, [])
    // Get the currently signed-in user----------------------------------------------------
    
    
    function LogOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }


    return {
        user,
        error,
        GoogleSignIn,
        LogOut
    }
}


export default useFirebase;