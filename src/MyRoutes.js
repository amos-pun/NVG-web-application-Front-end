import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import EmailConfirmation from './Components/Pages/EmailConfirmation'
import Home from './Components/Pages/Home'
import Login from './Components/Pages/Login'
import SignUp from './Components/Pages/SignUp'

const MyRoutes = () => {
  return (
    <React.StrictMode>
        <HashRouter>
            <Routes>

                <Route path="/home" element={<Home/>}/>
                <Route path="/" element={<Login/>}/>

                <Route path="/signup" element={<SignUp/>}/>
                <Route path='/verifyEmail/:token' element={<EmailConfirmation/>}/>

            </Routes>
        </HashRouter>
    </React.StrictMode>
  )
}

export default MyRoutes