import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import {Button} from '@mui/material';
import { useEffect ,useState } from 'react';



export default function GetCard({ data }) {

  if (!data || Object.keys(data).length === 0) {
    return <div>No data available.</div>;
  }

  const [isAdmin,setisAdmin] = useState(false)


  useEffect(() => {

    const userType =  localStorage.getItem('type')

    if(userType == null) {
        setisAdmin(false)
    }

    else if(userType == 1) {
        setisAdmin(true)
    }
    else if(userType == 2){
        setisAdmin(false)
    }
    else if(userType == 3){
        setisAdmin(false)
    }
    else if(userType == 4){
        setisAdmin(true)
    }
   
  }, [])
  const keys = Object.keys(data);

  return (
    <Box sx = {{
                display: 'flex',justifyContent: 'center',
                alignItems: 'center'
                
              }}>
        <Card sx={{
           display: 'flex', padding: '2%' ,
            maxWidth:'85%' , mb:'3%',
            border:'1 solid white',borderRadius:10 , boxShadow:10}}>
        <Grid container spacing={2}> 
        {isAdmin && (
              <Grid item xs={12}
               sx={{ display: 'flex', justifyContent: { sm :'flex-end'  , xs : 'center' }  , mt : 1 }} >
                  <Button  variant="outlined" color="primary" 
                              sx={{ mr: 
                                      { lg: 2, md: 2, sm: 1 , xs : 1 }
                                     }}> Edit </Button>
                  <Button variant="outlined" color="primary" > Delete </Button>
                </Grid>
          )}
          {keys.map((key, index) => (
            <Grid item lg={4} md={4} sm={6} xs={12} key={key}> 
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: '1%',
                }}
              >
                <Typography
                  sx={{ fontFamily: 'sans-serif', fontSize: 16, fontWeight: 'bold', mb: 1 }}
                  color="text.secondary"
                >
                  {key}:
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="text.secondary">
                  {data[key]}
                </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
}
