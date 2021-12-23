import React, {Fragment, useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../context/AuthProvider';
import '../ScaffoldLayoutMiddle/ScaffoldLayoutMiddle.css'

const MyNetwork = (props) => {

    const {user} = useContext(AuthContext)
    const [data, setData] = useState([])

    // fetching data from server
    useEffect(() => {
        fetch('http://localhost:5000/usersinfo')
            .then(res => res.json())
            .then(data => {
                setData(data)
                // filtering user himself to show only other users
                const filteredData = data.filter(x => x.email !== user.email)
                setData(filteredData)
            })
    }, [])

    const [a, setA] = useState(false)


    return (
        <Fragment>
            <div className='container p-3'>
                <div class="row g-5">
                    <div class="col border ">
                        1 of 2
                    </div>
                    <div class="col border mx-2">
                        {
                            data.map(x =>
                                <div className='d-flex align-items-start mb-3'>
                                    <img className='img-right-section' src={x.photoURL}/>
                                    <div className='data-follow d-flex flex-column '>
                                        <span className='title-follow'>{x.displayName}</span>
                                        <span className='bio-follow'>CS Student | Programmer</span>
                                        {
                                            a == true ?
                                                <button type="button" onClick={()=>{setA(false)}}
                                                        className="follow-button-right-section btn btn-outline-secondary d-flex align-items-center justify-content-center">
                                                    <span>+ Connect</span>
                                                </button> :
                                                <button type="button" onClick={()=>{setA(true)}}
                                                        className="follow-button-right-section btn btn-outline-secondary d-flex align-items-center justify-content-center">
                                                    <span>Requested</span>
                                                </button>
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default MyNetwork;