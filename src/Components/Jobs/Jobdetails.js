import React, {Fragment} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import '../ScaffoldLayoutMiddle/ScaffoldLayoutMiddle.css';
import {Link} from "react-router-dom";
const Jobdetails = () => {
    const {user} = useContext(AuthContext)
    const [data, setData] = useState([])
    const [a, setA] = useState(false)

    // fetching data from server
    // fetching data from server
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return (
        <Fragment>
            <div className='feed-body'>
                <div className='container'>
                    <div className='testing'>
                        <div className='row'>
                            
                            <div className='col'>
                                    <div className='single-job'>
                                        <h1 className='job-position text-center'>Frontend Developer</h1>
                                            <div className='d-flex flex-column'>
                                                <span className='company-name'>Google</span>
                                                <span className='job-location'>California, US</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores assumenda delectus ea enim eum fugit hic ipsa neque officiis recusandae similique, tempora vel. Earum eius laboriosam nisi unde voluptate.</p>
                                                {
                                                    a == true ?
                                                        <button type="button" onClick={()=>{setA(false)}}
                                                                className="follow-button-right-section w-50 btn btn-outline-secondary d-flex align-items-center justify-content-center align-items-center ">
                                                            <span>Applied</span>
                                                        </button> :
                                                        <button  type="button" onClick={()=>{setA(true)}}
                                                                className="follow-button-right-section btn btn-outline-secondary d-flex w-50 align-items-center justify-content-center align-items-center">
                                                            <span>Apply</span>
                                                        </button>
                                                }

                                            </div>
                                        <hr/>
                                    </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>


        </Fragment>
    );
};

export default Jobdetails;