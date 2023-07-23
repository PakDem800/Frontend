import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignInSide from './signIn'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={ <SignInSide /> } />
    </Routes>
    </>
  )
}

export default App
