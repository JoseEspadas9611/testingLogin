import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h3>Register component</h3>
      <Link to={"/"}>
        <p>Regresar</p>
      </Link>
    </div>
  );
};

export default Register;
