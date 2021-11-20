import React from 'react';
import ProfileLeft from "../ProfileLeft/ProfileLeft";
import ProfileRight from "../ProfileRight/ProfileRight";
import ScaffoldLayoutRight from "../ScaffoldLayoutRight/ScaffoldLayoutRight";


const Profile = () => {
    return (
        <div className='feed-body'>
            <div className='container'>
                <div className='testing'>
                    <div className='row'>
                        <div className='col-9'>
                            <ProfileLeft/>
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

export default Profile;