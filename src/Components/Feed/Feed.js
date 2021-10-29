import React from 'react';
import './Feed.css'
import ScaffoldLayoutLeft from "../ScaffoldLayoutLeft/ScaffoldLayoutLeft";
import ScaffoldLayoutMiddle from "../ScaffoldLayoutMiddle/ScaffoldLayoutMiddle";
import ScaffoldLayoutRight from "../ScaffoldLayoutRight/ScaffoldLayoutRight";

const Feed = () => {
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