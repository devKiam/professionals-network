import React, {Fragment, useContext, useEffect} from 'react';
import {Link, NavLink, useHistory} from "react-router-dom";
import './Header.css'
import {AuthContext} from "../../context/AuthProvider";


const Header = () => {

    const {user, LogOut} = useContext(AuthContext)
    // console.log(user)

    
    // route to sign-in if logout
    const history = useHistory()

    function routeToSignIn() {
        if (!user.email) {
            history.push('/sign-in')
            console.log(user.email)
        }
    }
    routeToSignIn();
    // route to sign-in if logout


    return (
        <Fragment>
            <nav className="nav-container navbar navbar-expand-lg navbar-light container-fluid sticky-top">

                <div className='nav-elements container'>

                    <div className='logo-and-search-area d-flex'>
                        <NavLink to="/sign-in" className='d-flex justify-content-center align-items-center'>
                            <img className='header-logo img-fluid' src='./Logo2.svg' alt=''/>
                        </NavLink>
                        <form className="">
                            <input className="search-bar form-control" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>


                    <div className="icons-menu collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="icons-menu-list navbar-nav ms-auto mb-2 mb-lg-0">
                            <li>
                                <Link className='link-items' to='/feed'>
                                    <i className="fas fa-home fa-lg"/>
                                    <p className='icon-title'>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link className='link-items' to=''>
                                    <i className="fas fa-user-friends fa-lg"/>
                                    <p className='icon-title'>My Network</p>
                                </Link>
                            </li>
                            <li>
                                <Link className='link-items' to='/jobs'>
                                    <i className="fas fa-briefcase fa-lg"/>
                                    <p className='icon-title'>Jobs</p>
                                </Link>
                            </li>
                            <li>
                                <Link className='link-items' to=''>
                                    <i className="fas fa-comment-dots fa-lg"/>
                                    <p className='icon-title'>Messaging</p>
                                </Link>
                            </li>
                            <li>
                                <Link className='link-items' to=''>
                                    <i className="fas fa-bell fa-lg"/>
                                    <p className='icon-title'>Notifications</p>
                                </Link>
                            </li>
                            <li>
                                <div className="dropdown d-flex flex-column justify-content-center align-items-center">
                                    <i className="fas fa-user-circle fa-lg" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"/>
                                    <p className='icon-title'>Me</p>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item" to="/profile">View Profile</Link></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><Link className="dropdown-item" to='/sign-in' onClick={LogOut}>Logout</Link></li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>

            </nav>
        </Fragment>
    );
};

export default Header;