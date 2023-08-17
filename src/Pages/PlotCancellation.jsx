import React, { useEffect, useState } from "react";
import { Box ,Typography } from "@mui/material";
import { useTheme } from '@emotion/react';
import { useNavigate } from "react-router-dom";
import DataTable from "../Components/Table";
import { getCancelledPlots } from "../api/Plots";


function PlotCancellation() {


    const navigate = useNavigate()
    const theme = useTheme();

  const [data, setData] = useState(null);

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        
        const responseData = await getCancelledPlots(); 
        setData(responseData);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData(); 
  }, []);


  return (
    <Box 
    sx={{
        display: 'flex',
        backgroundColor: theme.palette.secondary.background,
        justifyContent:'center',
        flexDirection:'column',
        paddingTop: { lg: '4%', md: '6%', sm: '8%', xs: '6%' },
       
    }}>
        <Box sx={{
        backgroundColor: theme.palette.secondary.background,
        justifyContent:'center',
        flexDirection:'row',
        mx:'auto'
        
         }}
    >
        <Typography variant="h4" sx={{ flexGrow: 1 , mb:'1%' }}>
             Plot Cancellation Letter
        </Typography>
        </Box>
        <DataTable data = { data }  nav = 'PlotCancellation/details' isPayment = {false} />
    </Box>
    )
}

export default PlotCancellation;
