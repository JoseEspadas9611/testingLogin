import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { LogginButton } from "../scripts/login";

const IndexMenu = () => {
  return (
    <div>
      <h2>Menu</h2>
      <Link to={"/login"}>
        <p>Login</p>
      </Link>
      <br />
      <Link to={"/pago"}>
        <p>Pago</p>
      </Link>
      <br />
      <Link to={"/profile"}>
        <p>Profile</p>
      </Link>
      
      <LogginButton />
    </div>
  );
};

export default IndexMenu;
