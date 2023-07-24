import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Copyright from './Components/Copyright';
import { loginUser } from './api/Login';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import GoogleImage from './assets/google.png'
import { useNavigate } from "react-router-dom";


export default function SignInSide() {

    const navigate = useNavigate()

    const theme = useTheme()
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //login user here with the form values
        const result = await loginUser(data.get('UserName'),data.get('password'))
        if(result){
                navigate('/Home')
        }
    };

  return (
    <Box 
        sx={{
            backgroundImage: 'url(/Bg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            minHeight: '100vh',
        }}
    >
        <Typography  variant="h4" sx = {{
                color : 'black' ,
                 padding:'1.5%' ,
                 fontFamily:'sans-serif',
                 fontWeight : 'Bold'
                 }}>
                Welcome to PAK DEM (SMC) Pvt. Ltd
        </Typography>
        <Grid container component="main" 
            sx={{ flexGrow: 1, 
            }}>
            <Grid   item xs={10} sm={8} md={5} lg={4} 
                    component={Paper}  square
                    sx = {{
                        marginLeft : 'auto',
                        marginRight : 'auto',
                        borderRadius : 5,
                        marginTop:1,
                        boxShadow:15,
                    }}
                    >
            <Box
                sx={{
                my: 5,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="UserName"
                    label="User Name"
                    name="UserName"
                    autoComplete="UserName"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"          
                    variant="contained"
                    sx={{ 
                        mt: 2, mb: 2  , 
                        color : 'white' ,
                        backgroundColor: theme.palette.primary.main ,
                        padding: '2% 10%',
                        fontSize:'15px'
                    }}
                >
                    Sign In
                </Button>
                <Box sx ={{ mb:2}}>
                    <Typography variant='p'>
                        -OR- 
                    </Typography>
                </Box>
                <Button variant="outlined" color='primary' >
                     <img src={GoogleImage} height={25} style={{ marginRight: 15 }} />
                     Sign in with Google
                </Button>
            </Box>
          </Box>
            </Grid>
        </Grid>
      </Box>

  );
}