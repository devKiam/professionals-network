import React, {Fragment} from 'react';
import './ScaffoldLayoutRight.css';
import {Button} from "@mui/material";

const ScaffoldLayoutRight = () => {
    return (
        <Fragment>
            <section className='right-section'>
                <header className='header-right-section'>
                    <h2 className='title-right-section'>Add to your feed</h2>
                </header>
                <div className='body-right-section'>


                    <div className='d-flex align-items-start mb-3'>
                        <img className='img-right-section' src='https://media-exp1.licdn.com/dms/image/C5603AQHeoCR29cRfVQ/profile-displayphoto-shrink_100_100/0/1629619845079?e=1640822400&v=beta&t=Ra05mJYbGdvKCUu9JJImqPDhAii6sg0v3saRzZX7Alk'/>
                        <div className='data-follow d-flex flex-column '>
                            <span className='title-follow'>Md. Nuho Ul Alam (Kiam)</span>
                            <span className='bio-follow'>CS Student | Programmer</span>
                            <button type="button" className="follow-button-right-section btn btn-outline-secondary d-flex align-items-center justify-content-center">
                                <span>+ Follow</span>
                            </button>
                        </div>
                    </div>

                    <div className='d-flex align-items-start mb-3'>
                        <img className='img-right-section' src='https://media-exp1.licdn.com/dms/image/C5603AQHeoCR29cRfVQ/profile-displayphoto-shrink_100_100/0/1629619845079?e=1640822400&v=beta&t=Ra05mJYbGdvKCUu9JJImqPDhAii6sg0v3saRzZX7Alk'/>
                        <div className='data-follow d-flex flex-column '>
                            <span className='title-follow'>Md. Nuho Ul Alam (Kiam)</span>
                            <span className='bio-follow'>CS Student | Programmer</span>
                            <button type="button" className="follow-button-right-section btn btn-outline-secondary d-flex align-items-center justify-content-center">
                                <span>+ Follow</span>
                            </button>
                        </div>
                    </div>

                    <div className='d-flex align-items-start mb-3'>
                        <img className='img-right-section' src='https://media-exp1.licdn.com/dms/image/C5603AQHeoCR29cRfVQ/profile-displayphoto-shrink_100_100/0/1629619845079?e=1640822400&v=beta&t=Ra05mJYbGdvKCUu9JJImqPDhAii6sg0v3saRzZX7Alk'/>
                        <div className='data-follow d-flex flex-column '>
                            <span className='title-follow'>Md. Nuho Ul Alam (Kiam)</span>
                            <span className='bio-follow'>CS Student | Programmer</span>
                            <button type="button" className="follow-button-right-section btn btn-outline-secondary d-flex align-items-center justify-content-center">
                                <span>+ Follow</span>
                            </button>
                        </div>
                    </div>


                </div>
            </section>
        </Fragment>
    );
};

export default ScaffoldLayoutRight;