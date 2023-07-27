import { useState } from 'react'
import { useTheme } from '@emotion/react';
import Home from '../Pages/Home'
import { Routes, Route } from "react-router-dom";
import Navbar from '../Components/AppBar';
import { Box } from '@mui/material';
import Footer from '../Components/Footer';
import DataTable from '../Components/Table';

function Body() {
    const theme = useTheme();

  return (
    <>
      
      <Navbar />
      <Box height={50} sx={{backgroundColor :theme.palette.secondary.background}} />
        <Routes>
            <Route path='/'>
                <Route path="Home" element={ <Home /> } />
                <Route path='Table' element={ <DataTable />} />
            </Route>
        </Routes>
      <Footer />
    </>
  )
}

export default Body
