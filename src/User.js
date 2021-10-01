import {useState, useEffect} from 'react'

function User(props) {
    useEffect(() => {
        console.log("Count is", props.count)
    }, [props.count, props.data])

    return (
        <div className="App">
            <h1>Count : {props.count}</h1>
            <h1>Data : {props.data}</h1>
        </div>
    )
}

export default User