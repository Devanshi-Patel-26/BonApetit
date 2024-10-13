import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { CiBowlNoodles } from "react-icons/ci";

function Main() {
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
      <div className="forbut">
        <button onClick={() => navigate("/login")} className="but">
          Get started
        </button>
      </div>
      <div className="slogan">Unleash Your Taste Buds</div>
    </div>
  );
}

export default Main;
