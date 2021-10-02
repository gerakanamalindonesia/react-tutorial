import {useState, useEffect} from 'react'
import './App.css';
import Employee from "./Employee";
function App() {
    const employees = ["Rina", "Pratama", "Prasetyawati", "Irwanto", "Wibowo"]

    const students = [
        {name: "Irwanto", address: "Yogyakarta", contact: 7328292},
        {name: "Wibowo", address: "Bantul", contact: 7328290    },
        {name: "Rina", address: "Sleman", contact: 7328291},
        {name: "Pratama", address: "Gunungkidul", contact: 7328293},
    ]

    return (
        <div className="App">
            <h1>Students : </h1>
            <table border='1'>
                <thead>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                </thead>
                <tbody>
                    {
                        students.map(data =>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.address}</td>
                                <td>{data.contact}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default App;
