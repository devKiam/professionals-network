import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import '../ScaffoldLayoutMiddle/ScaffoldLayoutMiddle.css'
 const MyNetwork =(props) =>{

    const {user} = useContext(AuthContext)
    const [usersInfo, setUsersInfo] = useState([])
    const[isUpdate,setIsUpdate]=useState(null);
    const [us,setUs]=useState([]);

    // fetching usersInfo data from server
    // useEffect(() => {
    //     fetch('http://localhost:5000/usersInfo')
    //         .then(res => res.json())
    //         .then(data => {
    //             // filtering user himself to show only other users
    //             const filteredData = data.filter(x => x.email !== user.email)
    //             setUsersInfo(filteredData)
    //         })
    // }, [])
    useEffect(()=>{
        const url=`http://localhost:5000/usersInfo?status=Notconnect`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUsersInfo(data));
    },[])
    const handleUpdate = id =>{
        const url=`http://localhost:5000/usersInfo/${id}`
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
              if(data.matchedCount>0){
                alert('connected successfully!');
                const remainUs=us.filter(u=>u.status !=='Connect')
                setUs(remainUs);
                setIsUpdate(true);
                window.location.reload();

              }else{
                setIsUpdate(false)
              }
            });
    }
    console.log(usersInfo._id);
    return (
        <Fragment>
            <div className='container p-3'>
            <div class="row g-5">
                <div class="col border ">
                    1 of 2
                </div>
                <div class="col border mx-2">
                {
                    usersInfo.map(x =>
                        <div className='d-flex align-items-start mb-3'>
                            <img className='img-right-section' src={x.photoURL}/>
                            <div className='data-follow d-flex flex-column '>
                                <span className='title-follow'>{x.displayName}</span>
                                <span className='bio-follow'>CS Student | Programmer</span>
                                {
                                    usersInfo.status==="Connect"?<button type="button" className="follow-button-right-section btn btn-outline-secondary d-flex align-items-center justify-content-center">
                                    <span>message</span>
                                    </button>:<button type="button" onClick={()=>handleUpdate(usersInfo._id)}className="follow-button-right-section btn btn-outline-secondary d-flex align-items-center justify-content-center">
                                    <span>+ Connect</span>
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