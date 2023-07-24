import { useState } from 'react'
import { useTheme } from '@emotion/react';
import Home from '../Pages/Home'
import { Routes, Route } from "react-router-dom";
import Navbar from '../Components/AppBar';
import { Box } from '@mui/material';

function Body() {
    const theme = useTheme();

  return (
    <>
      
      <Navbar />
      <Box height={50} sx={{backgroundColor :theme.palette.secondary.background}} />
        <Routes>
            <Route path='/'>
                <Route path="Home" element={ <Home /> } />
            </Route>
        </Routes>
    </>
  )
}

export default Body
