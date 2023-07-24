import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignInSide from './signIn'
import Body from './Routes/routes'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>

    <Routes>
        <Route path="/" element={ <SignInSide /> } />
        <Route path="/*" element={ <Body /> } />
    </Routes>
    </>
  )
}

export default App
