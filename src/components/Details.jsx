import { Description } from '@mui/icons-material';
import React from 'react'
import { useLocation } from 'react-router-dom'
import "../App.css"
import { ButtonTypeMap } from '@mui/material';

function Details() {
    const location = useLocation();
    console.log(location.state)
    return (
        <div>
            <br />
            <div className='di ' >
            <div className='ms-5 aja   ' >
        <div className=' pora'>
            <div>
        <img className='ms-5 my-2 rounded black shadow' src={location.state.image} width="60%"   />
       <h5 className='title ms-2'><b>{location.state.title}</b></h5>
       <p className='w-90 ms
       -5  '><b>{location.state.description}</b></p>
       <h5 className=' ms-2  '>Price: ${location.state.price}</h5>

       </div><br />
       <hr /></div>
       </div> 
           </div>
        </div>
    )
}

export default Details