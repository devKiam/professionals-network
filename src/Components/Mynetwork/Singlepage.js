import React from 'react';
import { useState } from 'react';

const Singlepage =({x})=> {
    const [a, setA] = useState(false)
    return (
        <div>
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
        </div>
    );
}

export default Singlepage;