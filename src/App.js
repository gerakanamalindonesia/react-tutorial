import {Fragment} from 'react'
import './App.css';
import Child from "./Child";

function App() {
    function parentAlert(data) {
        // data didapat dari variabel user yang dikirim dari props alert(data) di Child.js
        // Jadi fungsi parentAlert dikirim sebagai props, sehingga component Child.js memiliki fungsi parentAlert yang
        // mempunyai parameter data, jadi kita tinggal memberi nilai data di Child.js
        alert(`Hello ${data.name}`)
    }
    return (
        <div>
            <h1>Passing Mempassing State</h1>
            <Child alert={parentAlert} />
        </div>
    )
}

export default App;
