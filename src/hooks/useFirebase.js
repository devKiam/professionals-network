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
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // sending userdata :: Save User Data Mongodb
    const saveUser = (email, displayName, photoURL, uid, method) => {
        const user = { email, displayName, photoURL, uid, role:'user'};
        console.log(user)
        const url=`http://localhost:5000/usersInfo`;
        fetch(url, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then()
    }
    // sending userdata :: Save User Data Mongodb

    const GoogleSignIn = () => {
        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                setUser(result.user);
                // sending userdata :: Save User Data Mongodb
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
            }).finally(() => setIsLoading(false));
    }



    // Get the currently signed-in user----------------------------------------------------
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user)
                saveUser(user.email, user.displayName, user.photoURL, user.uid, 'PUT');
                // ...
            } else {
                // User is signed out
                // ...
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
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