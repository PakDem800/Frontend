import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import Box from '@mui/material/Box';
import { Button, Divider, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { FormRow1 , FormRow2 } from '../Components/FormRow';



export default  function Home() {

    const [user,setUser] = useState('');
    const navigate = useNavigate()
    const theme = useTheme();

    useEffect(()=> {
        const userType = localStorage.getItem('type')
        if(userType == 1) {
            setUser("Admin")
        }
        else if(userType == 2){
            setUser("Staff")
        }
        else if(userType == 3){
            setUser("Cashier")
        }
        else if(userType == 4){
            setUser("Finance Manager")
        }
    })


  return (
    <>
    <Box sx={{
        display: 'flex',
        backgroundColor:theme.palette.secondary.background,
        justifyContent:'center',
        flexDirection:'column',
        paddingTop:{lg:'1%' , md:'2%' , sm:'3%' , xs:'2%'}
       
    }} >
       <Box>
            <Box sx={{ 
                display: 'inline-block', textAlign: 'center', 
                marginTop: 2, padding: '2%' ,
                marginBottom : 1
                }}>
                    <Typography variant='h4' sx={{ fontSize: '2rem' }}>
                    {user} Portal
                    </Typography>
                    <Divider
                    sx={{ height: 5, backgroundColor: theme.palette.primary.main }}
                    />
            </Box>
       </Box>
       <Box sx={{ flexGrow: 1 , margin:'0% 3%' }}>
            <Grid container  >
                <Grid container item spacing={3} sx ={{marginBottom:'2%'}}>
                    <FormRow1 />
                </Grid>
                <Grid container item spacing={5}>
                    <FormRow2 />
                </Grid>   
            </Grid>
        </Box>

    </Box>
    </>

  );
}