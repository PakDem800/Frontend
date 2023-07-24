import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Copyright from '../Components/Copyright';
import { Button, Divider, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';






export function FormRow1() {

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
        <Grid item md={4} sm={6} xs={12} >
          <Item>
            <Typography variant='h5'
                sx = {{
                    color: theme.palette.text.primary,
                    padding:'3%'
                
                }}
                >
                Main Form Applications
            </Typography>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'60%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
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
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'60%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                
                Create General
                <CreateIcon  sx={{marginLeft:1}}  />
                
            </Button>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'60%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
                    ':hover': {
                      backgroundColor: theme.palette.secondary.hoverButton,
                      color: theme.palette.secondary.main,
                    },
                    border: 1,
                    borderRadius: 3,
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: 1,
                    paddingBottom: 1,
                    borderColor: theme.palette.secondary.Button,
                  }}
            >
                Create Deal
                <CreateIcon  sx={{marginLeft:1}}  />
            </Button>

          </Item>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
        <Item>
            <Typography variant='h5'
                sx = {{
                    color: theme.palette.text.primary,
                    padding:'3%'
                
                }}
                >
                Expenditure
            </Typography>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                Expenditures
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                Month Wise Report
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                Add Expenditure
                <CreateIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>

          </Item>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
        <Item>
            <Typography variant='h5'
                sx = {{
                    color: theme.palette.text.primary,
                    padding:'3%'
                
                }}
                >
                Receipts
            </Typography>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                Regular Receipts
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                Transfer Receipts
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                Development Receipts
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
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
        <Grid item sm={4} xs={6} >
          <Item>
            <Typography variant='h5'
                sx = {{
                    color: theme.palette.text.primary,
                    padding:'3%'
                
                }}
                >
                Main Form Applications
            </Typography>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'60%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
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
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'60%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                
                Create General
                <CreateIcon  sx={{marginLeft:1}}  />
                
            </Button>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'60%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
                    ':hover': {
                      backgroundColor: theme.palette.secondary.hoverButton,
                      color: theme.palette.secondary.main,
                    },
                    border: 1,
                    borderRadius: 3,
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: 1,
                    paddingBottom: 1,
                    borderColor: theme.palette.secondary.Button,
                  }}
            >
                Create Deal
                <CreateIcon  sx={{marginLeft:1}}  />
            </Button>

          </Item>
        </Grid>
        <Grid item sm={4} xs={6}>
        <Item>
            <Typography variant='h5'
                sx = {{
                    color: theme.palette.text.primary,
                    padding:'3%'
                
                }}
                >
                Plots
            </Typography>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                All Plots
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                Plots Price
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                Plot Allotment
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                
                Plot Cancellation
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
                
            </Button>

          </Item>
        </Grid>
        <Grid item sm={4} xs={6}>
        <Item>
            <Typography variant='h5'
                sx = {{
                    color: theme.palette.text.primary,
                    padding:'3%'
                
                }}
                >
                Receipts
            </Typography>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                Regular Receipts
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                Transfer Receipts
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                Development Receipts
                <VisibilityIcon
                    sx ={{ marginLeft:1}}
                />
            </Button>
            <Button
                sx={{
                    color: theme.palette.secondary.text,
                    backgroundColor: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    width:'70%',
                    alignSelf:'center',
                    boxShadow:10,
                    my:1,
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
                  }}
            >
                
                Create Receipt
                <CreateIcon  sx={{marginLeft:1}}  />
                
            </Button>

          </Item>
        </Grid>
      </>
    );
  }