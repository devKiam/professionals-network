import React, { useContext } from 'react';
import './Feed.css'
import ScaffoldLayoutLeft from "../ScaffoldLayoutLeft/ScaffoldLayoutLeft";
import ScaffoldLayoutMiddle from "../ScaffoldLayoutMiddle/ScaffoldLayoutMiddle";
import ScaffoldLayoutRight from "../ScaffoldLayoutRight/ScaffoldLayoutRight";
import { AuthContext } from '../../context/AuthProvider';

const Feed = () => {
    const {isLoading} = useContext(AuthContext)

    if(isLoading){
        return<div className="spinner-border text-primary" role="status"> 
                  <span className="visually-hidden">Loading...</span> 
              </div>     
    }
    return (
        <div className='feed-body'>
            <div className='container'>
                <div className='testing'>
                    <div className='row'>
                        <div className='col-3'>
                            <ScaffoldLayoutLeft/>
                        </div>
                        <div className='col-6'>
                            <ScaffoldLayoutMiddle/>
                        </div>
                        <div className='col-3'>
                            <ScaffoldLayoutRight/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Feed;