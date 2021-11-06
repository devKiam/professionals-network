import React, {useEffect, useState} from 'react';
import './JobsMiddle.css'

const JobsMiddle = () => {

    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState([])

    // fetching data from server
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setSearchData(data)
            })
    }, [])

    function handleSearch(event) {
        const search = event.target.value
        const newData = data.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
        setSearchData(newData)
    }

    return (
        <fragment>
            <section className='jobs-section'>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <input className="search-bar form-control ms-0 mb-4" type="search" placeholder="Search" aria-label="Search" onBlur={handleSearch}/>
                    <h1 className='h1-recommend'>Recommended for you</h1>
                    <p className='subtitle-recommend'>Based on your profile and search history.</p>
                </div>


                {
                    searchData.map(j =>
                        <div className='single-job'>
                            <h1 className='job-position'>{j.position}</h1>
                            <div className='d-flex flex-column'>
                                <span className='company-name'>{j.name}</span>
                                <span className='job-location'>{j.location}</span>
                            </div>
                            <hr/>
                        </div>
                    )
                }
            </section>
        </fragment>
    );
};

export default JobsMiddle;