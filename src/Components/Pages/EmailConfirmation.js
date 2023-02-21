import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { verfiyEmailByEmailConfirmation } from '../../api/HoldersApi'
import Navbar from '../Layouts/Navbar'

const EmailConfirmation = () => {

    let [ error, setError ] = useState('')
    let [ success, setSuccess ] = useState('')

    // to token from url
    const { token } = useParams()

    useEffect(()=>{
        verfiyEmailByEmailConfirmation(token)
        .then(data=> {
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(data.message)
            }
        })
    },[])
    
    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}<Link to='/'>Something is Wrong.</Link></div>
        }
    }

    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>{success}<Link to='/'>Click Here to Log In</Link></div>
        }
    }
    
  return (
    <div>
        <Navbar />
        {showError()}
        {showSuccess()}
    </div>
  )
}

export default EmailConfirmation