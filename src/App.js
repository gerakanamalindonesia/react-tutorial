import {useState, use} from 'react'
import './App.css';

function App() {
    const [data, setData] = useState("Irwanto")

    return (
        <div className="App">
            <div>
                <h1>Hello {data}!</h1>
                <button onClick={() => setData("Rina Pratama")}>Update</button>
            </div>
        </div>
    )
}

export default App;
