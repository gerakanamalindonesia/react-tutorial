import {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
import './App.css';
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
            <h1>List With Bootstrap Tale</h1>
            <Table striped bordered>
                <thead>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                </thead>
                <tbody>
                    {
                        students.map((item, id) =>
                            <tr key={id}>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.contact}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default App;
