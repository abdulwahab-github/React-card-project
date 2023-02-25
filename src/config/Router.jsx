import React from 'react'
import "../App.css"
import { BrowserRouter, Link, Route, Routes ,  } from 'react-router-dom'
import Home from '../components/Home';
import Details from '../components/Details';
function AppRouter() {
  return (
    <div>
         <BrowserRouter>
        <nav>
              
      
        </nav>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='detail' element={<Details/>}/>
              </Routes>
        </BrowserRouter> 
    </div>
  )
}

export default AppRouter;