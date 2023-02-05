import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
    <Navbar />
      <main className="form-signin w-50 mt-3 main  border px-5 py-3 m-auto">
        <form>
        <Link to='/' className="btn btn-primary color-white">Back</Link>

          <div className="input-group has-validation">
            <span className="input-group-text info_text">Full Name</span>
            <input
              type="text"
              className="form-control input_text mx-1"
              id="username"
              placeholder="Amos Pun"
              required
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
            />
          </div>

          <div className="input-group has-validation">
            <span className="input-group-text info_text">Confirm Password</span>
            <input
              type="text"
              className="form-control input_text mx-1"
              id="username"
              placeholder="*****"
              required
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
                            checked
                            required
                        />
                        <label className="form-check-label male" for="credit">
                            Male
                        </label>
                    </div>
                    <div className="form-check mx-5 mt-2">
                    <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input radio border border-primary"
                        required
                    />
                    <label className="form-check-label male" for="debit">
                        Female
                    </label>
                    </div>
                </div>
          </div>

          <div className="text-center">
            <Link to="/signup" className="register btn btn-warning w-50">
              Register
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
