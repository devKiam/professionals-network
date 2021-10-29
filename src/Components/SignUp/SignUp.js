import React, {useEffect, useState} from 'react';
import './SignUp.css'
import FooterPrimary from "../FooterPrimary/FooterPrimary";
import initializeAuthentication from "../../Firebase/firebase.initialize";
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import {Modal} from "react-bootstrap";
import ReactDOM, {render} from "react-dom";

// Initialize Firebase
initializeAuthentication();


const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorSignUp, setErrorSignUp] = useState('')
    let [target, setTarget] = useState('')  // for modal toggle

    const auth = getAuth();


    // -----------------------------sign up with password & email verification------------------------------------------------
    function handlePasswordSignUp(event) {
        event.preventDefault()
        setErrorSignUp('')
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                emailVerificationMail()
            })
            .catch((errorSignUp) => {
                setErrorSignUp(errorSignUp.message)
            });

        setTarget('#exampleModalToggle2')
    }


    function handleEmail(event) {
        setEmail(event.target.value)
    }


    function handlePassword(event) {
        setPassword(event.target.value)
    }




    function emailVerificationMail() {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });
    }
    // -------------------------------sign up with password & email verification---------------------------------------------------


    return (
        <div className='login-page'>
            <section className='form-section container'>
                <header className='header'>
                    <img className='logo' src='./Logo2.svg' alt=''/>
                    <h1 className='title'>Make the most of your professional life</h1>
                </header>
                <form onSubmit={handlePasswordSignUp} className='form'>
                    <div className="form-floating mb-3">
                        <input onBlur={handleEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onBlur={handlePassword} type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                        <label htmlFor="floatingPassword">Password (6 or more characters)</label>
                    </div>
                    <span className='error-message-signUp text-danger'>
                        {errorSignUp}
                    </span>
                    <span className='agreement'>
                        By clicking Agree & Join, you agree to the ProNetwork User
                        <br/>
                        Agreement, Privacy Policy, and Cookie Policy.
                    </span>
                    <button type="submit" className="btn btn-primary button" data-bs-target={target} data-bs-toggle="modal">Agree & Join</button>
                    <p className='horizontal-line'><span> or </span></p>
                    <button type="button" className="btn btn-primary button-google">
                        <img src="https://img.icons8.com/fluency/48/000000/google-logo.png"/><span>Join with Google</span>
                    </button>
                    <p className='sign-in-text'>Already on ProNetwork? <a href=''>Sign in</a></p>

                </form>
            </section>


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
                            <span className='forgot-password-subtitle'>We have sent you a link to <b></b> for reset your password</span>
                            <div className='mt-4'>
                                <button type="button" className="button-reset-password btn btn-primary" data-bs-dismiss="modal">Okay</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            {/*footer*/}
            <FooterPrimary/>
            {/*footer*/}
        </div>
    );
};

export default SignUp;