import {useState} from 'react'
import './App.css';

function App() {
    const [name, setName] = useState("Default Name")
    const [print, setPrint] = useState(false)
    function getValue(val) {
        setName(val.target.value)
        if(val.target.value.length === 0) {
            setPrint(false)
        }
    }
    return (
        <div className="App">
            {
                print ? <h2>Name : {name}</h2> : null
            }
            <input type="text" onChange={getValue} />
            <button onClick={() => setPrint(!print)}>Print Name</button>
        </div>
     );
}

export default App;
