import React, {Fragment, useContext} from 'react';
import './ProfileLeft.css'
import {AuthContext} from "../../context/AuthProvider";


const ProfileLeft = () => {

    const {user} = useContext(AuthContext)
    console.log(user)


    return (
        <Fragment>
            <section className='profile-top-bio d-flex flex-column'>
                <div className='profile-background-thumbnail' style={{borderTopLeftRadius : '8px', borderTopRightRadius : '8px'}}>
                    <img className='user-background-image' style={{borderTopLeftRadius : '8px', borderTopRightRadius : '8px'}} src='user_background_image.svg'/>
                </div>
                <div className='below-profile-background-thumbnail'>
                    <img className='user-profile-image' src={user.photoURL}/>
                    <h1 className='user-profile-name'>{user.displayName}</h1>
                    <div className='d-flex flex-column'>
                        <span className='user-profile-bio'>Computer Science Student and Programmer</span>
                        <span className='user-profile-location'>Bangladesh</span>
                    </div>
                </div>
            </section>
            <section className='profile-about'>
                <h1 className='header-profile-about'>About</h1>
                <p className='p-profile-about'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque dolorem est fugit inventore saepe veniam. Accusantium alias architecto delectus distinctio illum in libero, nisi nostrum, pariatur quam quos ratione?</p>
            </section>
            <section className='profile-education'>
                <h1 className='header-profile-education'>Education</h1>
                <div className='education-institutes d-flex'>
                    <img className='logo-education-institute' src='https://media-exp1.licdn.com/dms/image/C510BAQFnKrZdOoRnow/company-logo_100_100/0/1581649541237?e=1645056000&v=beta&t=k8q5-ltdIDhaXsdb4Pr9QztWQBzbLRcRyayxHGp4wkE'/>
                    <div className='education-info ms-4'>
                        <h4 className='institute-name mb-0'>International Islamic University Chittagong</h4>
                        <div className='d-flex flex-column'>
                            <span className='field-of-study'>Bachelor of Science - BS, Computer Science</span>
                            <span className='year-of-study'>2018 – 2022</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='profile-skills'>
                <h1 className='header-profile-skills'>Skills & endorsements</h1>
                <button type="button" className="btn btn-outline-primary button-skill-quiz">Take a skill quiz</button>
                <div className='top-skills'>
                    <p>iOS Development</p>
                    <hr/>
                    <p>Programming</p>
                    <hr/>
                    <p>Python</p>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button button-show-more-accordion" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Show more
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="row row-cols-1 row-cols-md-2">
                                    <div className="col skill"><p>Swift</p></div>
                                    <div className="col skill"><p>Reactjs</p></div>
                                    <div className="col skill"><p>Bootstrap</p></div>
                                    <div className="col skill"><p>Pandas</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Fragment>
    );
};

export default ProfileLeft;