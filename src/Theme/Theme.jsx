import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['"Montserrat"', 'Open Sans'].join(',')
   },
   palette: { 
    primary: {
     main: '#0E9494',
     background:'#ffffff'
    },
    secondary:{
      main:'#0E9494',
      background : '#d4d4d4',
      text: '#ffffff',
      Button: '#bfbfbf',
      hoverButton: "#ffffff",
    },
    text:{
      primary:'#000000'
    }
  }
 })

export default theme;
