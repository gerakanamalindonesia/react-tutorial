function Student({name, email, address}) {
    return (
        <div style={{margin: "10px 20px"}}>
            <div style={{backgroundColor: "lightseagreen", padding: "10px", marginBottom: "15px"}}>
                <h3>Biodata</h3>
                Nama : {name} <br />
                Email : {email} <br />
                Alamat : {address.province} <br />
                Warga Negara : {address.country}
            </div>
        </div>
    )
}

export default Student