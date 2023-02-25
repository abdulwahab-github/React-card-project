import React from 'react'
import axios from 'axios';
import {useEffect,useState} from 'react';
import Loader from './Loader';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { Key } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const [data ,  setData] = useState([])
    const [isloading , setisloading] = useState(true)
    const [Search , setsearch] = useState("")
   useEffect(()=>{
        showo();
     
    }) 
    const showo = ()=>{
    axios('https://fakestoreapi.com/products')
    .then((suc) =>{ setData(suc.data) 
    setisloading(false)
    })
    .catch(err =>{ console.log(err)
    setisloading(false)
});
}
const gotodetails = (val)=>{
        console.log(val)
    navigate("detail",{
        state: val ,
    })

}

  return (
      <div>
        <br />
       
           
            <input  type={"text"} placeholder="Please Search Your Product Card Here" onChange={(e)=> setsearch(e.target.value)} />
           <br />
            <br />        
            <br />
            <br />
       
       { 
       isloading ? <Box sx={{
           marginLeft:"90vh",
           marginTop:"27vh"
          
        }}>
       <Loader />
       </Box>:
       
       
       data.filter((val)=>{
        if(Search == ""){
            return val;
        }else if(val.title.toLowerCase().includes(Search.toLowerCase())){
            return val;
        }
       }).map((val , i)=>
       
       <div className='ms-5 aja  'key={i} >
        <div className=' pora'>
            
        <img className='ms-5 my-2 rounded black shadow' src={val.image} width="60%"   />
       <h5 className='title ms-2'><b>{val.title}</b></h5>
       {/* <p className='w-90 ms
       -5  '><b>{val.description}</b></p> */}
       <h5 className=' ms-2  '>Price: ${val.price}</h5>
<Button className='ms-3 mb-3' onClick={()=>gotodetails(val)} variant="contained">Buy</Button>
       <br />
       </div>
       <br />
       </div> 
       )}
    </div>
  )
}     

export default Home;