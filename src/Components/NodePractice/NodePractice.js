import React, {useEffect, useRef, useState} from 'react';


const NodePractice = () => {

    const [data, setData] = useState([])

    // fetching data from server
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])


    // sending data to server ----------------------------------------------------------------
    const nameRef = useRef()
    const emailRef = useRef()

    function handleAddData(event) {
        event.preventDefault()

        const newData = {
            name: nameRef.current.value,
            email: emailRef.current.value
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
        <div>
            <h1>This is Node Practice</h1>
            <form onSubmit={handleAddData}>
                <input type='text' ref={nameRef}/>
                <input type='text' ref={emailRef}/>
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