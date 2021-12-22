import React, {Fragment, useContext, useEffect, useState} from 'react';
import './ScaffoldLayoutRight.css';
import {Button} from "@mui/material";
import {AuthContext} from "../../context/AuthProvider";

const ScaffoldLayoutRight = () => {

    const {user} = useContext(AuthContext)
    const [usersInfo, setUsersInfo] = useState([])

    // fetching usersInfo data from server
    useEffect(() => {
        fetch('http://localhost:5000/usersInfo')
            .then(res => res.json())
            .then(data => {
                // filtering user himself to show only other users
                const filteredData = data.filter(x => x.email !== user.email)
                setUsersInfo(filteredData)
            })
    }, [])


    return (
        <Fragment>
            <section className='right-section'>
                <header className='header-right-section'>
                    <h2 className='title-right-section'>Add to your feed</h2>
                </header>
                <div className='body-right-section'>

                    {
                        usersInfo.map(x =>
                            <div className='d-flex align-items-start mb-3'>
                                <img className='img-right-section' src={x.photoURL}/>
                                <div className='data-follow d-flex flex-column '>
                                    <span className='title-follow'>{x.displayName}</span>
                                    <span className='bio-follow'>CS Student | Programmer</span>
                                    <button type="button" className="follow-button-right-section btn btn-outline-secondary d-flex align-items-center justify-content-center">
                                        <span>+ Follow</span>
                                    </button>
                                </div>
                            </div>
                        )
                    }

                </div>
            </section>
        </Fragment>
    );
};

export default ScaffoldLayoutRight;