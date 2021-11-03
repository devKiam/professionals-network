import React, {Fragment, useContext, useEffect, useState} from 'react';
import './SIgnIn.css'
import initializeAuthentication from "../../Firebase/firebase.initialize";
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import FooterPrimary from "../FooterPrimary/FooterPrimary";
import {Link, useHistory} from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import {AuthContext} from "../../context/AuthProvider";


// Initialize Firebase
initializeAuthentication();


const SignIn = () => {

    // const {GoogleSignIn} = useFirebase()    // custom hook
    const {user, GoogleSignIn} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordResetEmail, setPasswordResetEmail] = useState('')
    const [errorSignIn, setErrorSignIn] = useState('')

    const auth = getAuth();


    // redirect to feed component if user is logged in
    const history = useHistory()

    function redirectToFeed() {
        if (user?.email) {
            history.push('/feed')
        }
    }
    redirectToFeed();
    // redirect to feed component if user is logged in


    function handlePasswordSignIn(event) {
        event.preventDefault()
        setErrorSignIn('')
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((errorSignIn) => {
                setErrorSignIn(errorSignIn.message);
            });
    }


    function handleEmail(event) {
        setEmail(event.target.value)
    }


    function handlePassword(event) {
        setPassword(event.target.value)
    }


    // -------------------------------password reset with email ----------------------------------------------------------

    function handlePasswordResetEmailSent(event) {
        event.preventDefault()
        sendPasswordResetEmail(auth, passwordResetEmail)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }


    function handlePasswordResetEmail(event) {
        setPasswordResetEmail(event.target.value)
    }

    // -------------------------------password reset with email ----------------------------------------------------------


    return (
        <Fragment>
            <div className='login-page'>
                <img className='logo-signin' src='./Logo2.svg' alt=''/>
                <section className='form-section container'>
                    <form onSubmit={handlePasswordSignIn} className='form'>
                        <header className='header-signin'>
                            <h1>Sign in</h1>
                            <p>Stay updated on your professional world</p>
                        </header>
                        <div className="form-floating mb-3">
                            <input onBlur={handleEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                            <label htmlFor="floatingInput">Email or Phone</label>
                        </div>
                        <div className="form-floating">
                            <input onBlur={handlePassword} type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <span className='error-message-signIn text-danger'>
                        {errorSignIn}
                        </span>
                        <span className='forgot-password'>
                            <a href='' data-bs-toggle="modal" data-bs-target="#exampleModal">Forgot password?</a>
                        </span>


                        {/*--------------------------------
                        Modal Forgot Password (start)
                        -----------------------------------*/}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-reset-password modal-content">
                                    <div className="modal-header border-bottom-0">
                                        <div>
                                            <h5 className="forgot-password-modal-title modal-title" id="exampleModalLabel">Forgot Password?</h5>
                                            <span className='forgot-password-subtitle'>Reset password in two quick steps</span>
                                        </div>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                                    </div>
                                    <form className="modal-body d-flex flex-column">
                                        <div className="form-floating mb-3">
                                            <input onBlur={handlePasswordResetEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                                            <label htmlFor="floatingInput">Email or Phone</label>
                                        </div>
                                        <div className='mt-4'>
                                            <button onClick={handlePasswordResetEmailSent} type="button" className="button-reset-password btn btn-primary" data-bs-target="#exampleModalToggle2"
                                                    data-bs-toggle="modal">
                                                Reset password
                                            </button>
                                            <button type="button" className="button-back-reset-password btn btn-outline-secondary mt-3" data-bs-dismiss="modal">
                                                Back
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/*--------------------------------
                         Modal Forgot Password (end)
                        -----------------------------------*/}


                        {/*---------------------------------
                        Modal Check Mail (starts)
                        -----------------------------------*/}
                        <div className="modal fade" id="exampleModalToggle2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-reset-password modal-content">
                                    <div className="modal-header border-bottom-0">
                                        <div>
                                            <h5 className="forgot-password-modal-title modal-title" id="exampleModalLabel">Check your email</h5>
                                        </div>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                                    </div>
                                    <form className="modal-body d-flex flex-column">
                                        <span className='forgot-password-subtitle'>We have sent you a link to <b>{passwordResetEmail}</b> for reset your password</span>
                                        <div className='mt-4'>
                                            <button type="button" className="button-reset-password btn btn-primary" data-bs-dismiss="modal">Okay</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/*---------------------------------
                        Modal Check Mail (ends)
                        -----------------------------------*/}


                        <button type="submit" className="btn btn-primary button">Sign in</button>
                        <p className='horizontal-line'><span> or </span></p>
                        <button type="button" className="btn btn-primary button-google" onClick={GoogleSignIn}>
                            <img src="https://img.icons8.com/fluency/48/000000/google-logo.png"/><span>Sign in with Google</span>
                        </button>
                    </form>
                    <p className='join-now-text'>New to ProNetwork? <Link to='/sign-up'>Join now</Link></p>
                </section>

                {/*----------------footer-----------------*/}
                <FooterPrimary/>
                {/*----------------footer-----------------*/}
            </div>
        </Fragment>
    );
};

export default SignIn;