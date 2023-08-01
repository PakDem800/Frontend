import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from '@emotion/react';
import { useNavigate } from "react-router-dom";
import DataTable from "../Components/Table";
import { getCAPayment, getOnlinePayment } from "../api/Payments";


function OnlinePayment() {


    const navigate = useNavigate()
    const theme = useTheme();

  const [data, setData] = useState(null);

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        
        const responseData = await getOnlinePayment(); // Call the function to get the data
        setData(responseData); // Set the data in the state
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData(); // Call the async function to fetch and set the data
  }, []);

  console.log(data); // Now data should have the response data from Axios

  return (
    <Box 
    sx={{
        display: 'flex',
        backgroundColor: theme.palette.secondary.background,
        justifyContent:'center',
        flexDirection:'column',
        paddingTop:'4%' 
       
    }}>
        <DataTable data = { data }  nav = 'Payments' />
    </Box>
    )
}

export default OnlinePayment;
