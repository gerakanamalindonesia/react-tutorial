import {useState, useEffect} from 'react'
import {Button, Alert} from 'react-bootstrap'
import './App.css';
import User from "./User";

function App() {
    return (
        <div className="App">
            <h1>Bootstrap</h1>
            <div style={{marginBottom: '10px'}}>
                <Button variant="warning" onClick={() => {alert("Mantabb, kamu sah selesai")}}>Click</Button>
            </div>

            <div>
                {
                    [
                        'primary',
                        'secondary',
                        'success',
                        'danger',
                        'warning',
                        'info',
                        'light',
                        'dark'
                    ].map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                            Ini adalah alert dengan tipe {variant}
                        </Alert>
                    ))
                }
            </div>
        </div>
    )
}

export default App;
