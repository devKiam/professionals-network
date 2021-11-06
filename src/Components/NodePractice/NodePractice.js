import React, {useEffect, useRef, useState} from 'react';


const NodePractice = () => {

    const [data, setData] = useState([])

    // fetching data from server
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])


    // sending data to server ----------------------------------------------------------------
    const nameRef = useRef()
    const positionRef = useRef()
    const locationRef = useRef()

    function handleAddData(event) {
        event.preventDefault()

        const newData = {
            name: nameRef.current.value,
            position: positionRef.current.value,
            location: locationRef.current.value
        }

        //  send data to server
        fetch('http://localhost:5000/jobs', {
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
                    event.target.reset()
                }
            })
    }
    // sending data to server -------------------------------------------------------------------


    // deleting ----------------------------
    function handleDelete(id) {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(d => {
                    if (d.deletedCount >= 1) {
                        alert('deleted successfully')
                        const remainingData = data.filter(d => d._id !== id)
                        setData(remainingData)
                    }
                })
        }
    }
    // deleting ----------------------------

    return (
        <div className='App'>
            <h1>Admin</h1>
            <form onSubmit={handleAddData}>
                <input type='text' ref={nameRef} placeholder='Company name'/>
                <br/>
                <input type='text' ref={positionRef} placeholder='Job position'/>
                <br/>
                <input type='text' ref={locationRef} placeholder='Location'/>
                <br/>
                <button type='submit'>Add</button>
            </form>
            {
                data.map(x =>
                    <p>
                        {x.name}
                        <button>update</button>
                        <button onClick={() => {handleDelete(x._id)}}>X</button>
                    </p>
                )
            }
        </div>
    );
};

export default NodePractice;