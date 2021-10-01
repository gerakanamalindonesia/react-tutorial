import {useState, useEffect} from 'react'
import './App.css';
import User from "./User";

function App() {
    const [data, setData] = useState(10)
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect data with data " + data)
    }, [data])

    useEffect(() => {
        console.log("useEffect count with count " + count)
    }, [count])

    return (
        <div className="App">

            <User count = {count} data = {data} />

            <button onClick={() => setCount(count + 1)} >Update Count</button>
            <button onClick={() => setData(data + 1)} >Update Data</button>
        </div>
    )
}

export default App;
