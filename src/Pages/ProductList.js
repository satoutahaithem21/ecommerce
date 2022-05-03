import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
function ProductList() {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            let result = await fetch('http://127.0.0.1:8000/api/list');
            result = await result.json();
            setData(result)
        }
        fetchData()
    }, []);

    console.warn(data)
    return (
        <div>
            <Header />
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>price</th>
                        <th>description</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img style={{width:100}}src={"http://localhost:8000/"+item.file_path }/></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default ProductList