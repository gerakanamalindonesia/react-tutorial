import {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
import './App.css';
function App() {
    const employees = ["Rina", "Pratama", "Prasetyawati", "Irwanto", "Wibowo"]

    const students = [
        {name: "Irwanto", contact: 7328292, address: [
                {province: "Yogyakarta", distric: "Gunungkidul"},
                {province: "Bantul", distric: "Pajangan"},
                {province: "Kulonprogo", distric: "Samigaluh"},
                {province: "Gunungkidul", distric: "Purwosari"},
            ]},
        {name: "Wibowo", contact: 7328290, address: [
                {province: "Yogyakarta", distric: "Gunungkidul"},
                {province: "Bantul", distric: "Pajangan"},
                {province: "Kulonprogo", distric: "Samigaluh"},
                {province: "Gunungkidul", distric: "Purwosari"},
            ]},
        {name: "Rina", contact: 7328291, address: [
                {province: "Yogyakarta", distric: "Gunungkidul"},
                {province: "Bantul", distric: "Pajangan"},
                {province: "Kulonprogo", distric: "Samigaluh"},
                {province: "Gunungkidul", distric: "Purwosari"},
            ]},
        {name: "Pratama", contact: 7328293, address: [
                {province: "Yogyakarta", distric: "Gunungkidul"},
                {province: "Bantul", distric: "Pajangan"},
                {province: "Kulonprogo", distric: "Samigaluh"},
                {province: "Gunungkidul", distric: "Purwosari"},
            ]},
    ]

    return (
        <div className="App">
            <h1>List With Nested Array</h1>
            <Table striped bordered>
                <thead>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Address</th>
                </thead>
                <tbody>
                {
                    students.map((item, i) =>
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.contact}</td>
                            <td>
                                <Table>
                                    <thead>
                                        <th>Provinsi</th>
                                        <th>Kabupaten</th>
                                    </thead>
                                    <tbody>
                                        {
                                            item.address.map(data =>
                                                <tr>
                                                    <td>{data.province}</td>
                                                    <td>{data.distric}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    )
}

export default App;
