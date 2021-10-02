import {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
import './App.css';
import Student from "./Student";
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
            {
                students.map((item, i) =>
                    <Student item={item} />
                )
            }
        </div>
    )
}

export default App;
