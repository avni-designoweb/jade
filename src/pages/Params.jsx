import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Params = () => {
    const location= useLocation();
    const [name,setName]=useState("");

    useEffect(()=>{
        const param= new URLSearchParams(location.search);
        const firstName=param.get('name');

        if(firstName){
            setName(firstName)
        }

    },[location.search]);


  return (
    <div>
        <h1>
            Hii !
        </h1>
        <h2>{name}</h2>
      
    </div>
  )
}

export default Params

//http://localhost:5173/params?name=ani