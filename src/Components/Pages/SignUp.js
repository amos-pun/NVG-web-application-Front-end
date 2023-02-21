import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUpToRegister } from "../../api/HoldersApi";
import Navbar from "../Layouts/Navbar";
import "./SignUp.css";

const SignUp = () => {

  let [ holdersName, setHoldersName ] = useState('')
  let [ password, setPassword ] = useState('')
  let [ email, setEmail ] = useState('')
  let [ error, setError ] = useState('')
  let [ success, setSuccess ] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    signUpToRegister(holdersName, password, email)
    .then(data=>{
      if(data.error){
        setError(data.error)
        setSuccess(false)
    }
      else{
        setSuccess(true)
        setError('')
    }
  })
  }

  const showError = () => {
    if(error){
      return <div className="alert alert-on">{error}</div>
    }
  }

  
  const showSuccess = () => {
    if(error){
      return <div className="alert alert-on">{success}</div>
    }
  }
  
  return (
    <div>
    <Navbar />
    {showError()}
    {showSuccess()}
      <main className="form-signin w-50 mt-3 main  border px-5 py-3 m-auto">
        <form>
        <Link to='/' className="btn btn-primary color-white">Back</Link>

          <div className="input-group has-validation">
            <span className="input-group-text info_text">Full Name</span>
            <input
              autoFocus
              type="text"
              className="form-control input_text mx-1"
              id="username"
              placeholder="Amos Pun"
              required
              onChange={(e)=>{setHoldersName(e.target.value)}}
            />
          </div>

          <div className="input-group has-validation">
            <span className="input-group-text info_text">Email</span>
            <input
              type="text"
              className="form-control input_text mx-1"
              id="username"
              placeholder="jane@gmail.com"
              required
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>

          <div className="input-group has-validation">
            <span className="input-group-text info_text">New Password</span>
            <input
              type="text"
              className="form-control input_text mx-1"
              id="username"
              placeholder="*****"
              required
              onChange={e=>{setEmail(e.target.value)}}
            />
          </div>

          <div className="input-group has-validation">
            <span className="input-group-text info_text">Confirm Password</span>
            <input
              type="text"
              className="form-control input_text mx-1"
              id="username"
              placeholder="*****"
            />
          </div>

          <div className="input-group has-validation">
            <span className="input-group-text info_text">Gender</span>
                <div className="radio_btn">
                    <div className="form-check mx-2 mt-2">
                        <input
                            id="credit"
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input radio border border-primary"
                        />
                        <label className="form-check-label male" htmlFor="credit">
                            Male
                        </label>
                    </div>
                    <div className="form-check mx-5 mt-2">
                    <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input radio border border-primary"
                    />
                    <label className="form-check-label male" htmlFor="debit">
                        Female
                    </label>
                    </div>
                </div>
          </div>

          <div className="text-center">
            <Link to="/signup" className="register btn btn-warning w-50"
              onClick={handleSubmit}
            >
              Register
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
