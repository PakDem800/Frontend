import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import theme from './Theme/Theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
      </React.StrictMode>
  </BrowserRouter>
)
