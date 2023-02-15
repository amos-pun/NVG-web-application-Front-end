import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

const MyRoutes = () => {
  return (
    <div>
        <HashRouter>
            <Routes>

                <Route path="/home" element={<Home/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<SignUp/>}/>

            </Routes>
        </HashRouter>
    </div>
  )
}

export default MyRoutes