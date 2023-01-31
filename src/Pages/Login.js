import React from "react";
import Navbar from "../Components/Navbar";

const Login = () => {
  return (
    <div>
    <Navbar />
      <div>
        <main className="form-signin w-25 m-auto mt-5">
          <form>
          <div className="text-center">
            <i class="bi bi-person-bounding-box fa-5x"></i>
          </div>
            <h1 className="h3 mb-3 fw-normal text-center">Login to Admin Page</h1>

            <div className="form-floating m-1">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating m-1">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3 text-center mt-2">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted text-center">&copy; NVG</p>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
