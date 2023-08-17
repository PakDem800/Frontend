import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Copyright from '../Components/Copyright';
import { Button, Divider, Typography } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HomeIcon from '@mui/icons-material/Home';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import GroupsIcon from '@mui/icons-material/Groups';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { getMainAppFormDetails } from '../api/MainAppFrom';






export function FormRow1() {

  const[isAdmin,setIsAdmin] = useState(null)

  const theme = useTheme();

    
    const navigate = useNavigate()

    const ButtonStyling = {
      color: theme.palette.secondary.text,
      backgroundColor: theme.palette.secondary.main,
      fontWeight: 'bold',
      width: { lg: '70%', md: '85%', sm: '85%', xs: '90%' },
      alignSelf: 'center',
      boxShadow: 10,
      my: 1,
      ':hover': {
        backgroundColor: theme.palette.secondary.hoverButton,
        color: theme.palette.secondary.main,
      },
      border: 1,
      borderRadius: 3,
      paddingLeft: 1,
      paddingRight: 1,
      paddingTop: 1,
      paddingBottom: 1,
      borderColor: theme.palette.secondary.Button,
    };

    useEffect(()=> {

      const userType = localStorage.getItem('type')

      if(userType == 1) {
          setIsAdmin(true)
      }
      else if(userType == 2){
          setIsAdmin(true)
          //for the sake of property used of lg = { 4 }
      }
      else if(userType == 3){
          setIsAdmin(false)
      }
      else if(userType == 4){
          setIsAdmin(true)
      }

  })
  
  



    const Item = styled(Paper)(({ theme }) => ({

        padding: { lg : theme.spacing(1)},
        textAlign: 'center',
        color: theme.palette.secondary.main,
        display:'flex',
        flexDirection:'column',
        border:'1px solid white' , borderRadius:20,
        boxShadow:10,
        paddingBottom:'5%'

      }));


    return (
      <>
        <Grid item lg={isAdmin ? 4 : 3} md={isAdmin ? 4 : 6} sm={6} xs={12} >
          <Item sx = {{ height:{ lg : isAdmin ? '93%' : '97%'  }}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:2 }}>
                <HomeIcon fontSize="large"  sx ={{ width: '36vw',height: '8vh',color: theme.palette.secondary.main}}/>

            </Box>
            <Typography variant='h5'
                sx = {{
                    color: theme.palette.text.primary,
                    padding:'3%'
                
                }}
                >
                Main Form Applications
            </Typography>
            <Button
                sx={ButtonStyling}
                onClick={() => navigate('/MainAppForm')}
            >
                View Main Forms
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Typography variant='p'
                sx = {{
                    color: theme.palette.text.primary,
                    padding:'3%',
                    alignSelf:'flex-start',
                    marginLeft:'6%'
                
                }}
                >
                Create Main File:
                
            </Typography>
            

            <Button
                sx={ButtonStyling}
            >
                
                Create General
                <CreateIcon  sx={{marginLeft:1}}  />
                
            </Button>
            <Button
                sx={ButtonStyling}
            >
                Create Deal
                <CreateIcon  sx={{marginLeft:1}}  />
            </Button>

          </Item>
        </Grid>
        <Grid item lg={isAdmin ? 4 : 3} md={isAdmin ? 4 : 6} sm={6} xs={12}>
        <Item  sx = {{ height:{ lg : isAdmin ? 'auto' : '97%'  }}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginTop:2}}>
                    <CurrencyExchangeIcon fontSize="large"  sx ={{ width: '36vw',height: '8vh',}}/>
            </Box>
            <Typography variant='h5'
                sx = {{
                    color: theme.palette.text.primary,
                    padding:'3%',
                
                }}
                >
                Payments
            </Typography>
            <Button
                sx={ButtonStyling}
                onClick={() => navigate('/CashPayments')}
            >
                Cash Payments
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                CA Payments
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                Online Payments
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                Payment schedules
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>

        </Item>
        </Grid>
        <Grid item lg={isAdmin ? 4 : 3} md={isAdmin ? 4 : 6} sm={6} xs={12}>
        <Item  sx = {{ height:{ lg : isAdmin ? 'auto' : '97%'  }}} >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:2 }}>
                    <ReceiptIcon fontSize="large"  sx ={{ width: '36vw',height: '8vh',}}/>
 
            </Box> 
            <Typography variant='h5'
                sx = {{
                    color: theme.palette.text.primary,
                    padding:'3%'
                
                }}
                >
                Receipts
            </Typography>
            <Button
                sx={ButtonStyling}
            >
                Regular Receipts
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                Transfer Receipts
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                Development Receipts
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                
                Create Receipt
                <CreateIcon  sx={{marginLeft:1}}  />
                
            </Button>

          </Item>
        </Grid>
      </>
    );
  }


  export function FormRow2() {

    const[isAdmin,setIsAdmin] = useState(null)
    const theme = useTheme();

    const navigate = useNavigate()

    const ButtonStyling = {
      color: theme.palette.secondary.text,
      backgroundColor: theme.palette.secondary.main,
      fontWeight: 'bold',
      width: { lg: '70%', md: '85%', sm: '85%', xs: '90%' },
      alignSelf: 'center',
      boxShadow: 10,
      my: 1,
      ':hover': {
        backgroundColor: theme.palette.secondary.hoverButton,
        color: theme.palette.secondary.main,
      },
      border: 1,
      borderRadius: 3,
      paddingLeft: 1,
      paddingRight: 1,
      paddingTop: 1,
      paddingBottom: 1,
      borderColor: theme.palette.secondary.Button,
    };
  
   

    useEffect(()=> {

        const userType = localStorage.getItem('type')

        if(userType == 1) {
            setIsAdmin(true)
        }
        else if(userType == 2){
            setIsAdmin(false)
        }
        else if(userType == 3){
            setIsAdmin(false)
        }
        else if(userType == 4){
            setIsAdmin(true)
        }

    })


    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.secondary.main,
        display:'flex',
        flexDirection:'column',
        border:'1px solid white' , borderRadius:20,
        boxShadow:10,
        paddingBottom:'5%'
      }));


    return (
      <>
        <Grid item lg={isAdmin ? 4 : 3} md={isAdmin ? 4 : 6} sm={6} xs={12}>
        <Item>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:isAdmin ? 2 : 0 }}>
               <LocalAtmIcon  fontSize="large"  sx ={{ width: '36vw',height: '8vh',}}/>
            </Box> 
            <Typography variant='h5'
                sx = {{
                    color: theme.palette.text.primary,
                    padding:'3%'
                
                }}
                >
                Expenditure
            </Typography>
            <Button
                sx={ButtonStyling}
            >
                Expenditures
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                Month Wise Report
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                Daily Recovery Report
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                Add Expenditure
                <CreateIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>

        </Item>
        </Grid>
        {isAdmin && (<Grid item md={4} sm={6} xs={12}>
        <Item>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:2 }}>
                    <MapsHomeWorkIcon fontSize="large"  sx ={{ width: '36vw',height: '8vh',}}/>

            </Box>
            <Typography variant='h5'
                sx = {{
                    color: theme.palette.text.primary,
                    padding:'3%'
                
                }}
                >
                Plots
            </Typography>
            <Button
                sx={ButtonStyling}
            >
                All Plots
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                Plots Price
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                Plot Allotment
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                
                Plot Cancellation
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
                
            </Button>
            <Button
                sx={ButtonStyling}
            >
                
                Plot Transfer
                <CreateIcon
                    sx ={{ marginLeft:1}}
                />
                
            </Button>

          </Item>
        </Grid>)}
        {isAdmin && (<Grid item md={4} sm={6} xs={12}>
            
        <Item>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginTop:2}}>
                    <GroupsIcon  fontSize="large"  sx ={{ width: '36vw',height: '8vh',}}/>
            </Box>
            <Typography variant='h5'
                sx = {{
                    color: theme.palette.text.primary,
                    padding:'3%'
                
                }}
                >
                Agent
            </Typography>
            <Button
                sx={ButtonStyling}
            >
                All Agents
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                Agent Commission
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                Registration for Investor
                <CreateIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={ButtonStyling}
            >
                
                Add new User
                <CreateIcon  sx={{marginLeft:1}}  />
                
            </Button>

          </Item>
        </Grid>)}
      </>
    );
  }