import { useState } from 'react'
import { useTheme } from '@emotion/react';
import MainAppFrom from '../Pages/MainAppForm';
import { Routes, Route } from "react-router-dom";
import ErrorScreen from '../Components/Error';
import CreateMainAppForm from '../CreateForms/MainAppFormC';
import Fake from '../Pages/Fake';
import CreateReceipt from '../CreateForms/ReceiptFormC';
import CreateVoucher from '../CreateForms/VoucherC';
import CreatePlot from '../CreateForms/PlotC';
import CreatPlotPrice from '../CreateForms/PlotPriceC';
import CreateExpenditure from '../CreateForms/ExpenditureC';

function Create() {
    const theme = useTheme();

  return (
    <>
      
        <Routes>
            <Route path='/'>
                { /* Create Forms */ }
                <Route path='Main' element = {<CreateMainAppForm />} />
                <Route path='Receipt' element = {<CreateReceipt />} />
                <Route path='Voucher' element= {<CreateVoucher />} />
                <Route path='Plot' element= {<CreatePlot />} />
                <Route path='PlotPrice' element= {<CreatPlotPrice />} />
                <Route path='Expenditure' element= {<CreateExpenditure />}/>
                <Route path='Testing' element = {<Fake />} />


                { /* Error Screen */}
                <Route path='*' element = {<ErrorScreen />} />

            </Route>
        </Routes>
        
      
    </>
  )
}

export default Create