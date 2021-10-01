import {useState} from 'react'
import './App.css';
import User from "./User";
import Members from "./Members";

function App() {
    function getData() {
        alert("Ini dibuat di App.js")
    }

    return (
        <div className="App">
            <User data={getData} />
            <div>
                <Members data={getData} />
            </div>
        </div>
    )
}

export default App;
