import React, {useEffect, useState} from 'react';
import './SignUp.css'
import FooterPrimary from "../FooterPrimary/FooterPrimary";
import initializeAuthentication from "../../Firebase/firebase.initialize";
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import swal from 'sweetalert';
import {Button, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";

// Initialize Firebase
initializeAuthentication();


const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorSignUp, setErrorSignUp] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                console.log('error')
            });
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
                handleShow()
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
                    <button type="submit" className="btn btn-primary button">Agree & Join</button>
                    <p className='horizontal-line'><span> or </span></p>
                    <button type="button" className="btn btn-primary button-google">
                        <img src="https://img.icons8.com/fluency/48/000000/google-logo.png"/><span>Join with Google</span>
                    </button>
                    <p className='sign-in-text'>Already on ProNetwork? <Link to='/sign-in'>Sign in</Link></p>

                </form>
            </section>


            {/*---------------------------
            Modal for validation mail (start)
            -----------------------------*/}
                <Modal show={show} onHide={handleClose} className='modal-validation-mail'>
                    <Modal.Header closeButton className='border-bottom-0'>
                        <Modal.Title className='modal-title-validation'>Verify your email</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='body-modal-validation-mail'>Registration Successful! We have sent you an email at <b>{email}</b> to verify your account.
                        Please verify and login in to continue. Thanks!
                    </Modal.Body>
                    <Modal.Footer className='border-top-0'>
                        <Button onClick={handleClose} className='okay-button-modal-email-validation'>
                            Okay
                        </Button>
                    </Modal.Footer>
                </Modal>
            {/*---------------------------
            Modal for validation mail (end)
            -----------------------------*/}

            {/*footer*/}
            <FooterPrimary/>
            {/*footer*/}
        </div>
    );
};

export default SignUp;