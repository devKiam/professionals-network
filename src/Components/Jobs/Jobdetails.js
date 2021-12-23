import React, {Fragment} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import '../ScaffoldLayoutMiddle/ScaffoldLayoutMiddle.css';
const Jobdetails = () => {
    const {user} = useContext(AuthContext)
    const [data, setData] = useState([])

    // fetching data from server
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setData(data.reverse())
            })
    }, [])
    return (
        <Fragment>
            <div className='feed-body'>
                <div className='container'>
                    <div className='testing'>
                        <div className='row'>
                            
                            <div className='col'>
                            {
                                data.map(x =>
                                    <div className='timeline-card'>
                                        <p className='body-text-timeline'>
                                            
                                        </p>
                                        <img alt="" className='body-img-timeline' src='https://media-exp1.licdn.com/dms/image/sync/C5622AQHmYsUk8riaYw/feedshare-shrink_800/0/1635258605323?e=1638403200&v=beta&t=6I1jn9TzAPcpczx99rxweLpabBbt_C8YCR1P1TKXg6E'/>
                                        
                                    </div>
                                )
                            }
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>


        </Fragment>
    );
};

export default Jobdetails;