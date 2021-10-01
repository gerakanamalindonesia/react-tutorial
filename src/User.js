function User(props) {
    return (
        <div>
            <h2>Mengirim function sebagai props</h2>
            <button onClick={props.data}>Call data function</button>
        </div>
    )
}

export default User