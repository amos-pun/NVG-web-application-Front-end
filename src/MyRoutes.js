import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

const MyRoutes = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>

                <Route path="/home" element={<Home/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<SignUp/>}/>

            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MyRoutes