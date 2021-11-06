import React, {Fragment, useEffect, useRef, useState} from 'react';
import './ScaffoldLayoutMiddle.css'

const ScaffoldLayoutMiddle = () => {

    const [data, setData] = useState([])

    // fetching data from server
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setData(data.reverse())
            })
    }, [])


    // sending data to server ----------------------------------------------------------------
    const postRef = useRef()

    function handleAddData(event) {
        event.preventDefault()

        const newData = {
            post: postRef.current.value
        }

        //  send data to server
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(d => {
                if (d.acknowledged === true) {
                    alert('data inserted')
                }
            })
    }
    // sending data to server -------------------------------------------------------------------


    return (
        <Fragment>

            <section className='post'>
                <div className='d-flex align-items-center'>
                    <img className='person-img-post-section' src='https://media-exp1.licdn.com/dms/image/C5603AQHeoCR29cRfVQ/profile-displayphoto-shrink_100_100/0/1629619845079?e=1640822400&v=beta&t=Ra05mJYbGdvKCUu9JJImqPDhAii6sg0v3saRzZX7Alk'/>

                    {/*Button Triggered Modal*/}
                    <button type="button" className="start-a-post btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Start a post
                    </button>
                    {/*Button Triggered Modal*/}


                    {/*----------------------------------
                    Modal for Post (starts)
                    -------------------------------------*/}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-post modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Create a post</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                                </div>
                                <div className="modal-body ">
                                    <div className='d-flex align-items-center'>
                                        <img className='person-img-post-section' src='https://media-exp1.licdn.com/dms/image/C5603AQHeoCR29cRfVQ/profile-displayphoto-shrink_100_100/0/1629619845079?e=1640822400&v=beta&t=Ra05mJYbGdvKCUu9JJImqPDhAii6sg0v3saRzZX7Alk'/>
                                        <h6 className='user-name-modal'>Md. Nuho Ul Alam (Kiam)</h6>
                                    </div>
                                    <div>
                                        <textarea ref={postRef} className='post-input' placeholder='What do you want to talk about?'/>
                                    </div>
                                </div>
                                <div className="modal-post-footer modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button onClick={handleAddData} type="button" className="btn btn-primary">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-------------------------------
                    Modal for Post (ends)
                    ---------------------------------*/}


                </div>
            </section>

            {/*horizontal line*/}
            <div className='d-flex align-items-center'>
                <p className='horizontal-line-scaffold-layout-middle'/>
                <p className='hr-timeline-text'>Timeline</p>
            </div>
            {/*horizontal line*/}

            <section className='timeline-section'>

                {
                    data.map(x =>
                        <div className='timeline-card'>
                            <header className='header-timeline-card d-flex align-items-center'>
                                <img className='person-img-timeline-card' src='https://media-exp1.licdn.com/dms/image/C5603AQHeoCR29cRfVQ/profile-displayphoto-shrink_100_100/0/1629619845079?e=1640822400&v=beta&t=Ra05mJYbGdvKCUu9JJImqPDhAii6sg0v3saRzZX7Alk'/>
                                <div style={{marginLeft : '8px'}} className='d-flex flex-column justify-content-center'>
                                    <h6 className='title-timeline-card'>Md. Nuho Ul Alam (Kiam)</h6>
                                    <span className='followers-text'>14 followers</span>
                                </div>
                            </header>
                            <body className='body-timeline-card'>
                            <p className='body-text-timeline'>
                                {x.post}
                                <a style={{textDecoration:'none'}} href='http://myumi.ch/WwErZ'>myumi.ch/WwErZ</a>
                            </p>
                            <img className='body-img-timeline' src='https://media-exp1.licdn.com/dms/image/sync/C5622AQHmYsUk8riaYw/feedshare-shrink_800/0/1635258605323?e=1638403200&v=beta&t=6I1jn9TzAPcpczx99rxweLpabBbt_C8YCR1P1TKXg6E'/>
                            </body>
                        </div>
                    )
                }

                {/*<div className='timeline-card'>*/}
                {/*    <header className='header-timeline-card d-flex align-items-center'>*/}
                {/*        <img className='person-img-timeline-card' src='https://media-exp1.licdn.com/dms/image/C5603AQHeoCR29cRfVQ/profile-displayphoto-shrink_100_100/0/1629619845079?e=1640822400&v=beta&t=Ra05mJYbGdvKCUu9JJImqPDhAii6sg0v3saRzZX7Alk'/>*/}
                {/*        <div style={{marginLeft : '8px'}} className='d-flex flex-column justify-content-center'>*/}
                {/*            <h6 className='title-timeline-card'>Md. Nuho Ul Alam (Kiam)</h6>*/}
                {/*            <span className='followers-text'>14 followers</span>*/}
                {/*        </div>*/}
                {/*    </header>*/}
                {/*    <body className='body-timeline-card'>*/}
                {/*        <p className='body-text-timeline'>*/}
                {/*            As part of a broader effort to make U-M's wealth of knowledge more accessible,*/}
                {/*            faculty are invited to submit proposals for funding to support the development of*/}
                {/*            open courses focusing on addressing societal challenges around the world.*/}
                {/*            <a style={{textDecoration:'none'}} href='http://myumi.ch/WwErZ'>myumi.ch/WwErZ</a>*/}
                {/*        </p>*/}
                {/*        <img className='body-img-timeline' src='https://media-exp1.licdn.com/dms/image/sync/C5622AQHmYsUk8riaYw/feedshare-shrink_800/0/1635258605323?e=1638403200&v=beta&t=6I1jn9TzAPcpczx99rxweLpabBbt_C8YCR1P1TKXg6E'/>*/}
                {/*    </body>*/}
                {/*</div>*/}

                {/*<div className='timeline-card'>*/}
                {/*    <header className='header-timeline-card d-flex align-items-center'>*/}
                {/*        <img className='person-img-timeline-card' src='https://media-exp1.licdn.com/dms/image/C5603AQHeoCR29cRfVQ/profile-displayphoto-shrink_100_100/0/1629619845079?e=1640822400&v=beta&t=Ra05mJYbGdvKCUu9JJImqPDhAii6sg0v3saRzZX7Alk'/>*/}
                {/*        <div style={{marginLeft : '8px'}} className='d-flex flex-column justify-content-center'>*/}
                {/*            <h6 className='title-timeline-card'>Md. Nuho Ul Alam (Kiam)</h6>*/}
                {/*            <span className='followers-text'>14 followers</span>*/}
                {/*        </div>*/}
                {/*    </header>*/}
                {/*    <body className='body-timeline-card'>*/}
                {/*    <p className='body-text-timeline'>*/}
                {/*        As part of a broader effort to make U-M's wealth of knowledge more accessible,*/}
                {/*        faculty are invited to submit proposals for funding to support the development of*/}
                {/*        open courses focusing on addressing societal challenges around the world.*/}
                {/*        <a style={{textDecoration:'none'}} href='http://myumi.ch/WwErZ'>myumi.ch/WwErZ</a>*/}
                {/*    </p>*/}
                {/*    <img className='body-img-timeline' src='https://media-exp1.licdn.com/dms/image/sync/C5622AQHmYsUk8riaYw/feedshare-shrink_800/0/1635258605323?e=1638403200&v=beta&t=6I1jn9TzAPcpczx99rxweLpabBbt_C8YCR1P1TKXg6E'/>*/}
                {/*    </body>*/}
                {/*</div>*/}

                {/*<div className='timeline-card'>*/}
                {/*    <header className='header-timeline-card d-flex align-items-center'>*/}
                {/*        <img className='person-img-timeline-card' src='https://media-exp1.licdn.com/dms/image/C5603AQHeoCR29cRfVQ/profile-displayphoto-shrink_100_100/0/1629619845079?e=1640822400&v=beta&t=Ra05mJYbGdvKCUu9JJImqPDhAii6sg0v3saRzZX7Alk'/>*/}
                {/*        <div style={{marginLeft : '8px'}} className='d-flex flex-column justify-content-center'>*/}
                {/*            <h6 className='title-timeline-card'>Md. Nuho Ul Alam (Kiam)</h6>*/}
                {/*            <span className='followers-text'>14 followers</span>*/}
                {/*        </div>*/}
                {/*    </header>*/}
                {/*    <body className='body-timeline-card'>*/}
                {/*    <p className='body-text-timeline'>*/}
                {/*        As part of a broader effort to make U-M's wealth of knowledge more accessible,*/}
                {/*        faculty are invited to submit proposals for funding to support the development of*/}
                {/*        open courses focusing on addressing societal challenges around the world.*/}
                {/*        <a style={{textDecoration:'none'}} href='http://myumi.ch/WwErZ'>myumi.ch/WwErZ</a>*/}
                {/*    </p>*/}
                {/*    <img className='body-img-timeline' src='https://media-exp1.licdn.com/dms/image/sync/C5622AQHmYsUk8riaYw/feedshare-shrink_800/0/1635258605323?e=1638403200&v=beta&t=6I1jn9TzAPcpczx99rxweLpabBbt_C8YCR1P1TKXg6E'/>*/}
                {/*    </body>*/}
                {/*</div>*/}

                {/*<div className='timeline-card'>*/}
                {/*    <header className='header-timeline-card d-flex align-items-center'>*/}
                {/*        <img className='person-img-timeline-card' src='https://media-exp1.licdn.com/dms/image/C5603AQHeoCR29cRfVQ/profile-displayphoto-shrink_100_100/0/1629619845079?e=1640822400&v=beta&t=Ra05mJYbGdvKCUu9JJImqPDhAii6sg0v3saRzZX7Alk'/>*/}
                {/*        <div style={{marginLeft : '8px'}} className='d-flex flex-column justify-content-center'>*/}
                {/*            <h6 className='title-timeline-card'>Md. Nuho Ul Alam (Kiam)</h6>*/}
                {/*            <span className='followers-text'>14 followers</span>*/}
                {/*        </div>*/}
                {/*    </header>*/}
                {/*    <body className='body-timeline-card'>*/}
                {/*    <p className='body-text-timeline'>*/}
                {/*        As part of a broader effort to make U-M's wealth of knowledge more accessible,*/}
                {/*        faculty are invited to submit proposals for funding to support the development of*/}
                {/*        open courses focusing on addressing societal challenges around the world.*/}
                {/*        <a style={{textDecoration:'none'}} href='http://myumi.ch/WwErZ'>myumi.ch/WwErZ</a>*/}
                {/*    </p>*/}
                {/*    <img className='body-img-timeline' src='https://media-exp1.licdn.com/dms/image/sync/C5622AQHmYsUk8riaYw/feedshare-shrink_800/0/1635258605323?e=1638403200&v=beta&t=6I1jn9TzAPcpczx99rxweLpabBbt_C8YCR1P1TKXg6E'/>*/}
                {/*    </body>*/}
                {/*</div>*/}

            </section>

        </Fragment>
    );
};

export default ScaffoldLayoutMiddle;