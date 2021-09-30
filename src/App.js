import {useState} from 'react'
import './App.css';
import Student from "./Student";

function App() {
    const [name, setName] = useState("Default Name")
  return (
    <div className="App">
        <Student name={name} email={"irwanto@yahoo.com"} address={{country: "Indonesia", province: "DIY"}} />
        <Student name={"Rina"} email={"rina@yahoo.com"} address={{country: "Indonesia", province: "Bali"}} />
        <Student name={"Ani"} email={"ani@gmail.com"} address={{country: "Indonesia", province: "Banten"}} />

        <button onClick={() => {setName("Irwanto Wibowo")}}>Update Name</button>
    </div>
  );
}

export default App;
