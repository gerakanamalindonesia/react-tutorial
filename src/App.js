import {useState, useEffect} from 'react'
import './App.css';

function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Irwanto")

    // useEffect berjalan setelah render
    useEffect(() => {
        console.log("useEffect berjalan pada count ke - " + count)
    }, [count]) // perbedaan array kosong dan ada isinya yaitu jika array kosong maka useEffect hanya berjalan sekali, namun jika ada isinya maka useEffect akan berjalan setiap kali isi array berubah

    useEffect(() => {
        console.log("useEffect name berjalan " + name)
    }, [name])

    return (
        <div className="App">
            <div>
                <h1>useEffect in React</h1>
                <div>{count}</div>
                <button onClick={() => setCount(count + 1)}>Update Counter</button>

                <div>
                    <h3>Hello {name}!!</h3>
                    <form>
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                        <button type="submit">Ubah</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App;
