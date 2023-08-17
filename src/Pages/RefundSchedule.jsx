import React, { useEffect, useState } from "react";
import { Box ,Typography } from "@mui/material";
import { useTheme } from '@emotion/react';
import { useNavigate } from "react-router-dom";
import DataTable from "../Components/Table";
import { getRefund } from "../api/Refund";


function RefundSchedule() {


    const navigate = useNavigate()
    const theme = useTheme();

  const [data, setData] = useState(null);

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        
        const responseData = await getRefund(); 
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
            Refund Schedule
        </Typography>
        </Box>
        <DataTable data = { data }  nav = 'Agent/details' isPayment = {true} />
    </Box>
    )
}

export default RefundSchedule;
