import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'

const MyRoutes = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>

            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MyRoutes