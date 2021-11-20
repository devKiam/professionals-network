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
        const searchInput = event.target.value
        const searchResultBasedOnCompanies = data.filter(x => x.name.toLowerCase().includes(searchInput.toLowerCase()))
        const searchResultBasedOnTitle = data.filter(x => x.position.toLowerCase().includes(searchInput.toLowerCase()))
        const searchResultBasedOnLocation = data.filter(x => x.location.toLowerCase().includes(searchInput.toLowerCase()))

        const s = new Set()
        searchResultBasedOnCompanies.forEach(x => s.add(x))
        searchResultBasedOnTitle.forEach(x => s.add(x))
        searchResultBasedOnLocation.forEach(x => s.add(x))

        let result = Array.from(s)
        setSearchData(result)
    }

    return (
        <fragment>
            <section className='jobs-section'>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <input className="search-bar form-control ms-0 mb-4" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
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