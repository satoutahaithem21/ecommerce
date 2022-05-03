import React  from "react"
import { useState,useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import Header from "./Header";


function Register(){
    useEffect(()=>{
        if (localStorage.getItem('user-info')){
            navigate('/add')
        }
    },[])
    let navigate =useNavigate()
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    async function SignUp(){
        console.warn('haithem')
        let item ={name,email,password}
        console.warn(item); 
        const reaquestOption={
            method:'POST',
            headers:{"Content-Type":"application/json",},
            body:JSON.stringify({name:name,email:email,password:email}),   
        }
        let result = await fetch("http://localhost:8000/api/register",reaquestOption)
        result =await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/update")
        // console.warn("result",result)
    }
   
    return(
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-2">
            <h1>Register page</h1>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
            <br/>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
            <br/>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
            <br/>
            <button onClick={SignUp} className="btn btn-primary">Sign up</button>
            <button onClick={()=>navigate("/update")} className="btn btn-primary">allo</button>
        </div>
        </>
    );
}
export default Register