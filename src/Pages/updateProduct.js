import Header from "./Header";
import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react';
function UpdateProduct(props){
    const params=useParams();
    const[data,setData]=useState([])
    useEffect(()=>{
        async function fetchData(){
            let result = await fetch("http://127.0.0.1:8000/api/product/"+params.id)
            result =await result.json()
            console.warn('result',result)
            setData(result);
            
        }
        fetchData()
        
    },[])
    console.warn('data',data)
    function updateProduct(){

    }
    return(
        <div>
            <Header/>
            <h1>
                update Product page
            </h1>
            <input type="text" defaultValue={data.name}/> 
            <br/><br/>
            <input type="text" defaultValue={data.price}/> 
            <br/><br/>
            <input type="text" defaultValue={data.description}/> 
            <br/><br/>
            <input type="file" defaultValue={data.file_path}/> 
            <br/><br/>
            <img style={{width:100}} src={"http://localhost:8000/"+data.file_path}/>
            <br/><br/>
            <button>Update Product</button>
        </div>
    );
}
export default UpdateProduct 