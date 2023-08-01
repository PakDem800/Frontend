import { useState } from 'react'
import { useTheme } from '@emotion/react';
import Home from '../Pages/Home'
import { Routes, Route } from "react-router-dom";
import Navbar from '../Components/AppBar';
import { Box } from '@mui/material';
import Footer from '../Components/Footer';
import DataTable from '../Components/Table';
import MainAppFrom from '../Pages/MainAppForm';
import MainAppFormDetails from '../Pages/MainAppFormDetails';
import CashPayment from '../Pages/CashPayments';
import CAPayment from '../Pages/CAPayment';
import OnlinePayment from '../Pages/OnlinePayment';

function Body() {
    const theme = useTheme();

  return (
    <>
      
      <Navbar />
      <Box height={50} sx={{backgroundColor :theme.palette.secondary.background , }} />
        <Routes>
            <Route path='/'>
                <Route path="Home" element={ <Home /> } />
                <Route path='MainAppForm' element = { <MainAppFrom />} />
                <Route path='CashPayments' element = {<CashPayment />} />
                <Route path='CAPayment' element= {<CAPayment />} />
                <Route path='OnlinePayment' element= {<OnlinePayment />} />
                <Route path='Table' element={ <DataTable />} />
                <Route path='MainAppFormDetails/:id' element = {<MainAppFormDetails />} />
            </Route>
        </Routes>
      <Footer />
    </>
  )
}

export default Body
