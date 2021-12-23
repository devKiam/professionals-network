import React, {Fragment, useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../context/AuthProvider';
import '../ScaffoldLayoutMiddle/ScaffoldLayoutMiddle.css'
import Singlepage from './Singlepage';

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

    return (
        <Fragment>
            <div className='container p-3'>
                <div className="row g-5">
                <div className="col border mx-2">
                        <div className="p-3 text-center"><h5>Manage my network</h5></div>
                        <div className="p-1 ">Connections </div>
                        <div className="p-2 ">Contacts</div>
                        <div className="p-2 ">People I Follow</div>
                        <div className="p-2 ">Groups</div>
                        <div className="p-2 ">Events</div>
                        <div className="p-2 ">Pages</div>
                        <div className="p-2 ">Newsletters</div>
                        <div className="p-3 text-center">Show more</div>
                        <hr />
                        <div className="p-2 ">
                            <h5 className="p-3 text-center">Add personal contacts</h5>
                            <small className="p-2 text-center">We’ll periodically import and store your contacts to help you and others connect. You choose who to connect to and who to invite. Learn more</small>

                        </div>
                    </div>
                    <div className="col border mx-2">
                        <div className="p-3 text-center">Invitations</div>
                        {
                            data.map(x =><Singlepage
                                key={x._id}
                                x={x}
                            >
                            </Singlepage>
                            )
                        }
                        <div className="p-3 text-center">Show more</div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default MyNetwork;