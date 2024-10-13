import React from "react";
import "./login-register.css";
import { CiBowlNoodles } from "react-icons/ci";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="wholepage">
      <div className="headermain">
        <div className="appcompo">
          <CiBowlNoodles className="symbol" />
          Bon appetit
        </div>
        <div className="linkcompo">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/recipepg">
            Recipes
          </Link>
          <Link className="link" to="/aboutus">
            About us
          </Link>
        </div>
      </div>
      <img
        src="https://media.istockphoto.com/id/1441427708/photo/various-seasonings-and-spices-on-black-stone-plate.webp?b=1&s=170667a&w=0&k=20&c=bbThS14nH17NZStld9cO25VaBY5dLUEGySs0VdBtMn0="
        alt=""
        className="pic"
      ></img>
      <div className="wrapper">
        <div className="form-box login">
          <form action="">
            <h1>login</h1>
            <div className="input-box">
              <input type="text" placeholder="username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>
            <button onClick={() => navigate("/recipepg")} type="submit">
              Login
            </button>
            <div className="register-link">
              <p>
                Don't have an account?<a href="/register">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
