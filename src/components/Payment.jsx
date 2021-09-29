import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div>
      <h3>Payment component</h3>
      <Link to={"/"}>
        <p>Regresar</p>
      </Link>
    </div>
  );
};

export default Payment;
