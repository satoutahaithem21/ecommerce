import Header from "./Pages/Header";
import {useEffect } from "react"
import { useNavigate } from 'react-router-dom';
function Protected(props){
    let navigate =useNavigate()
    useEffect(()=>{
        if (!localStorage.getItem('user-info')){
            navigate('/register')
        }
    },[])
    let Cmp=props.Cmp
    return(  
        <div>
            <Cmp/>
        </div>
    );
}
export default Protected