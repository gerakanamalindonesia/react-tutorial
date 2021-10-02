import {Table} from "react-bootstrap";

function Student(props) {
    return (
        <Table striped bordered>
            <thead>
            <th>Number</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            </thead>
            <tbody>
                <tr key={props.i}>
                    <td>{props.i + 1}</td>
                    <td>{props.item.name}</td>
                    <td>{props.item.contact}</td>
                    <td>
                        <Table>
                            <thead>
                                <th>Provinsi</th>
                                <th>Kabupaten</th>
                            </thead>
                            <tbody>
                                {
                                    props.item.address.map(data =>
                                        <tr>
                                            <td>{data.province}</td>
                                            <td>{data.distric}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Student