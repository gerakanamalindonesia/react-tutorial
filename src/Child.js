function Child(props) {
    let user = {
        name: "Irwanto",
        address: "Yogyakarta"
    }
    return (
        <div>
            <h2>Child Component</h2>
            <h3>Name : {user.name}</h3>
            <button onClick={() => props.alert(user)}>
                Click Me
            </button>
        </div>
    )
}

export default Child