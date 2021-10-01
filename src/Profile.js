import {useState} from "react"

function Profile() {
    const [loggedIn, setLoggedIn] = useState(true)

    return (
        <div>
            { loggedIn ? <h3>Welcome Irwanto</h3> : <h3>Welcome Guest</h3>}
            <br />
            <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? "Logout" : "Login"}</button>
        </div>
    )
}

export default Profile