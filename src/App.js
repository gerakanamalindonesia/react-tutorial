import {Fragment} from 'react'
import './App.css';
import Cols from "./Cols";

function App() {
    return (
        <div>
            <h1>React Fragment</h1>
            <table>
                <tbody>
                    <tr>
                        <Cols />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default App;
