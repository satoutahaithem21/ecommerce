import Header from "./Header";
import {useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    let navigate =useNavigate()
    useEffect(()=>{
        if (localStorage.getItem('user-info')){
            navigate('/add')
        }
    },[])
    async function login(){
        let item ={email:email,password:email}
        const reaquestOption ={
            method:'Post',
            headers:{"Content-Type":"application/json",},
            body:JSON.stringify(item)
        }
        let result = await fetch("http://localhost:8000/api/login",reaquestOption)
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate('/add')

    }
    return(  
        <div >
            <Header/>
            <h1>
                Login page
            </h1>
            <div className="col-sm-6 offset-sm-3">
            <input  type="text"
                    placeholder="email" 
                    onChange={(e)=>setEmail(e.target.value)} 
                    className="form-control"
                     />
            <br/>
            <input type="password"
                   placeholder="password" 
                   onChange={(e)=>setPassword(e.target.value)} 
                   className="form-control" 
                   />
            <br/>
            <button className="btn btn-primary" onClick={login}>Login</button>
            </div>  
        </div>
    );
}
export default Login