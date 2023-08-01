import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import {Button} from '@mui/material';
import { useTheme } from '@emotion/react';
import { useNavigate , useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getSingleDetails } from '../api/MainAppFrom';
import GetCard from '../Components/Card';

function MainAppFormDetails () {


    const navigate = useNavigate()
    const theme = useTheme();
    
    const location = useLocation();

    const id = location.pathname.split('/').pop();
    const [data , setData] = useState(null);



    

    useEffect(() => {

    
       
        const fetchData = async () => {
          try {
            
            const responseData = await getSingleDetails(id); // Call the function to get the data
            setData(responseData); // Set the data in the state
          } catch (error) {
            // Handle error if needed
          }
        };
    
        fetchData(); // Call the async function to fetch and set the data
      }, []);
      

    
    const status = data?.status

    const reason = data?.reason



    return (
        <Box
          sx={{
            display: 'flex',
            backgroundColor: theme.palette.secondary.background,
            justifyContent: 'center',
            flexDirection: 'column',
            paddingTop: { lg: '4%', md: '6%', sm: '15%', xs: '8%' },
            
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding:'1%'
            }}
          >
            <Typography variant="h4" sx={{ flexGrow: 1 , mb:'1%' }}>
              Main App Form Details
            </Typography>
            <Box sx = {{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-evenly',
                    alignItems:'center', // Align items at flex start,
                    ml:'5%',
                    mb:'1%'
                        }}>
            <Typography variant="h6" sx={{ 
                                    backgroundColor:theme.palette.primary.main,
                                    color:theme.palette.primary.background,
                                    width:{ md: '22%', sm:'25%' , xs:'90%' }
                         }}>
                <span 
                    style={{fontFamily:'sans-serif' , fontWeight:'bold'}}>
                    Status : </span>
                <span 
                    
                    >
                    {status}</span>
                
            </Typography>
            <Typography variant="p" sx={{ flexGrow: 1 }} />
            </Box>
            <Box sx = {{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-evenly',
                    alignItems:'center', 
                    ml:'5%'
                        }}>
            <Typography variant="p" style={{fontFamily:'sans-serif' , fontWeight:'bold'}} >
                {reason} 
            </Typography>
            <Typography variant="p" sx={{ flexGrow: 1 }} />

            </Box>
            
          </Box>
          <GetCard data={data} />
        </Box>
      );
            }

export default MainAppFormDetails;
