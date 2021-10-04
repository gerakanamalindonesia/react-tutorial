import './App.css';
import {useState, useMemo} from "react"

/*
Skenario Awal memahami useMemo

saat button diklik (dalam kasus ini button Update Number) maka state number akan diupdate dan component akan dirender ulang
namun kenyataanya component item juga ikut terender (alias function multiCount ikut dieksekusi)
dan kita hanya mau component yang dirender hanyalah komponen yang terpengaruh pada perubahan state (komponen number dan multiCount saja)

kita bisa menggunakan useMemo untuk mengatasi masalah tersebut
dengan menggunakan useMemo kita bisa skip component yang bersangkutan saat perubahan state terjadi
*/

function App() {
    const [number, setNumber] = useState(0)
    const [item, setItem] = useState(100)

    // render component multiCountMemo hanya saat state number berubah
    const multiCountMemo = useMemo(function multiCount() {
        console.log("Fungsi multiCount berjalan")
        return number * 5
    }, [number])

    return (
        <div className="App">
            <h1>Penggunaan useMemo</h1>

            <h2>Number : {number}</h2>
            <h2>Item : {item}</h2>

            <h2>{multiCountMemo}</h2>
            <button onClick={() => setNumber(number + 1)}>Update Number</button>
            <button onClick={() => setItem(item * 2)}>Update Item</button>
        </div>
    )
}

export default App;
