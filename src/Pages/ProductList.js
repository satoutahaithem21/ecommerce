import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function ProductList() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
    }, []);
    async function fetchData() {
        let result = await fetch('http://127.0.0.1:8000/api/list');
        result = await result.json();
        setData(result)
    }
    async function deleteOperation(id){
        let result = await fetch("http://127.0.0.1:8000/api/delete/"+id,{
            method:'DELETE',
        });
        result = await result.json();
        console.warn(result); 
        fetchData()
    }
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
                        <th>Operation</th>
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
                                <td><span onClick={()=>deleteOperation(item.id)} className="delete">Delete</span></td>
                                <td>
                                    <Link to={"/update/"+item.id}>
                                    <span  className="update">Update</span>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default ProductList