import {useState} from 'react'
import './App.css';

function App() {
    const [name, setName] = useState("")
    const [tnc, setTnc] = useState(false)
    const [interest, setInterest] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        console.log(name, tnc, interest)
    }
    return (
        <div className="App">
            <h2>Handle Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Option</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select><br /><br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /> <span>Saya setuju</span><br /><br />
                <button type="submit">Submit</button>
                <button>Clear</button>
            </form>
        </div>
     );
}

export default App;
