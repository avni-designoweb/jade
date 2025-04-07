import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';

const User = () => {
    const location= useLocation();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    useEffect(()=>{
        const param= new URLSearchParams(location.search);
        const mail=param.get('email');
        const data=param.get('password');

        if(mail && data){
            setEmail(mail);
            setPassword(data);
        }

    },[location.search]);


  return (
    <div>
        <h1>
            Hii !
        </h1>
        <h2>{email}</h2>
        <h2>{password}</h2>
      
    </div>
  );
}

export default User