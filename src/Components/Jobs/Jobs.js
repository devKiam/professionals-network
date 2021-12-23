import React, {Fragment} from 'react';
import ScaffoldLayoutLeft from "../ScaffoldLayoutLeft/ScaffoldLayoutLeft";
import ScaffoldLayoutMiddle from "../ScaffoldLayoutMiddle/ScaffoldLayoutMiddle";
import ScaffoldLayoutRight from "../ScaffoldLayoutRight/ScaffoldLayoutRight";
import JobsMiddle from "../JobsMiddle/JobsMiddle";

const Jobs = () => {
    return (
        <Fragment>
            <div className='feed-body'>
                <div className='container'>
                    <div className='testing'>
                        <div className='row'>
                            <div className='col-3'>
                                <ScaffoldLayoutLeft/>
                            </div>
                            <div className='col-6'>
                                <JobsMiddle/>
                            </div>
                            
                            <div className='col-3'>
                                <ScaffoldLayoutRight/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </Fragment>
    );
};

export default Jobs;