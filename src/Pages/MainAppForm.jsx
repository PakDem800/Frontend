import React, { useEffect, useState } from "react";
import { Box, Button , Typography} from "@mui/material";

import CreateIcon from '@mui/icons-material/Create';
import { getMainAppForms } from "../api/MainAppFrom";
import { useTheme } from '@emotion/react';
import { useNavigate } from "react-router-dom";
import DataTable from "../Components/Table";


function MainAppFrom() {


    const navigate = useNavigate()
    const theme = useTheme();

  const [data, setData] = useState(null);

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        
        const responseData = await getMainAppForms(); // Call the function to get the data
        setData(responseData); // Set the data in the state
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData(); // Call the async function to fetch and set the data
  }, []);

  const ButtonStyling = {
    alignSelf: 'start' , paddingX :2 , paddingY:1,
    marginLeft:'5%',
    border:'2px solid black',
    justifyContent:'start',
    color:theme.palette.text.primary,
    alignItems:'start',
    ':hover': {
        backgroundColor: theme.palette.secondary.hoverButton,
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main
      },
    }

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
             Main Application Form
        </Typography>
        </Box>
        <Button  sx={ButtonStyling}
                onClick={() => navigate('/Create/Main')}
            >
            Create Main <CreateIcon sx={{ml:1}} />
        </Button>
        <DataTable data = { data }  nav = 'MainAppFormDetails'  isPayment = {false} />
    </Box>
    )
}

export default MainAppFrom;
