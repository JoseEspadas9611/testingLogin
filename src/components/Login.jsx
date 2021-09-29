import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoggingButton = () =>{
  const { LogingWithRedirect} =useAuth0()
  return <button onClick={LogingWithRedirect}></button>
}