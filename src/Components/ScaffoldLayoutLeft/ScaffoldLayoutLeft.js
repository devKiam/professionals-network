import React, {Fragment, useContext} from 'react';
import './ScaffoldLayoutLeft.css'
import useFirebase from "../../hooks/useFirebase";
import {AuthContext} from "../../context/AuthProvider";


const ScaffoldLayoutLeft = () => {

    const {user} = useContext(AuthContext)


    return (
        <Fragment>
            <section className='profile-card'>
                <div className='person-bio'>
                    <img className='person-img' src={user.photoURL}/>
                    <h6 className='user-name'>{user.displayName}</h6>
                    <p className='user-bio'>Computer Science Student and Programmer</p>
                </div>
                <hr/>
                <div className='connection'>
                    <div className='d-flex justify-content-between'>
                        <span className='connection-numbers'>Connections</span>
                        <span className='numbers-of-connections'>12</span>
                    </div>
                    <span className='grow-network-text'>Grow your network</span>
                </div>
            </section>
        </Fragment>
    );
};

export default ScaffoldLayoutLeft;
