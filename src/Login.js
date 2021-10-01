import {useState} from "react"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userError, setUserError] = useState(false)
    const [passError, setPassError] = useState(false)

    const userHandler = (e) => {
        let item = e.target.value
        if(item.length < 3) {
            setUserError(true)
        } else {
            setUserError(false)
        }

        setUsername(item)
    }

    const passHandler = (e) => {
        let item = e.target.value
        if(item.length < 3) {
            setPassError(true)
        } else {
            setPassError(false)
        }

        setPassword(item)
    }

    const loginHandle = (e) => {
        e.preventDefault()

        if(username.length < 3 || password.length < 3) {
            alert("Username / Password salah")
        } else {
            alert("Kamu berhasil login")
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder="Enter username" onChange={userHandler} /> {userError ? <span>Username invalid</span> : ""}<br /><br />
                <input type="password" placeholder="Enter password" onChange={passHandler} /> {passError ? <span>Password Invalid</span> : ""} <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login