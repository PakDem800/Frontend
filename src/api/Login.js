import { Troubleshoot } from "@mui/icons-material";
import { Axios } from "./connection";
import { useState } from "react";


export const loginUser = async (UserName, Password) => {



  try {
    const response = await Axios.post('/User/login', { UserName, Password });

    localStorage.setItem("LoggedIn" , true)
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("type" , response.data.user.RolesID)
    return true;


  } catch (error) {
    // If there's an error, check the response status and show the appropriate alert message
    if (error.response && error.response.status === 401) {
      alert(error.response.data.message); 
      // Show the error message sent from the server
      return false
    } else {
      alert("An error occurred. Please try again later.");
      return false
    }
  }
}
