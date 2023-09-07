import React ,{useRef , useEffect, useState} from 'react';
import { Box, Typography, Button , Divider } from '@mui/material';
import {Grid} from '@mui/material';
import { useTheme } from '@emotion/react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import img from '../../assets/Logo.png'
import ReactToPrint from 'react-to-print';
import PrintIcon from '@mui/icons-material/Print';
import { getprintReceipt } from '../../api/Receipt';





function PrintRecipt() {
  const [data,setData] = useState(null)
  const id = useLocation().state?.id
  
  const theme = useTheme()
  const navigate = useNavigate()
  const componentRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {        
        const responseData = await getprintReceipt(id); // Call the function to get the data
        setData(responseData); // Set the data in the state
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData(); 
  }, []);


    function FileNumberBoxes({ fileNumber }) {
        // Convert the file number to a string and split it into individual digits
        const digits = fileNumber.toString().split('');
        console.log('digit ' ,digits)
      
        const boxes = Array.from({ length: digits.length }, (_, index) => (
          <Box
            sx={{
              border: 1,
              ml: 1,
              padding: 1,
              width: '1rem', // Set a fixed width for the boxes
              height: '1rem', // Set a fixed height for the boxes
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={index}
            className={`digit-box ${index < 3 ? 'filled' : ' '}`}
          >
            {digits[index] || ' '}
          </Box>
        ));
      
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {boxes}
          </Box>
        );
      }


      
      

  


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', 
            backgroundColor: theme.palette.secondary.background,
              alignItems: 'center', width: '100%' , pb : '4%' , 
              paddingTop : { lg: '4%', md: '6%', sm: '8%', xs: '6%' }
     }}>
          {data && 
          <>  
          <ReactToPrint 
                    trigger={() => (
                    <Button variant="contained" color="primary" sx={{ mb: 1 }}>
                        <PrintIcon  />
                    </Button>
                    )}
                    content={() => componentRef.current}
                    documentTitle='ReceiptForm'
                    pageStyle='print'
                />
       

          <Box sx={{
            
              width:'93%' , flexGrow:1 , border : 2 , 
              borderRadius:10,backgroundColor:theme.palette.primary.background,
              borderColor : theme.palette.secondary.main , padding:'2%'
              }} >
            <Grid container spacing={2} sx={{padding:'2%'}} ref={componentRef}>
            <Grid item lg={8} md={8} sm={8} xs={8}>
                <Box sx ={{
                        
                        color:'#0E9494',
                        }}>
                    <Typography variant='h4'>
                        M M B C
                    </Typography>
                    <Typography sx={{ml:'15%'}} variant='h6' >
                        A Project by PAK DEM (SMC-Pvt) Ltd.
                    </Typography>
                    <Typography sx={{ml:'15%'}} variant='body1' >
                        Office No 14, Second Floor, Majeed Plaza, Bank Road, Saddar, Rawalpindi
                        Phone: 051-8315383 WhatsApp: 0312-9113369
                    </Typography>
                  
                </Box>
                <Box sx={{
                        display:'flex' ,
                      justifyContent:'end',
                      color:'#0E9494',
                      mt:'5%'
                      }}>
                    <Typography variant='h4'
                        
                        sx={{
                            fontFamily:'inherit',
                            paddingRight:'12%' 
                            ,fontWeight:'800',
                            fontSize:'36px' ,
                            paddingTop:'3%'    
                    }}
                    >
                        RECEIPT FORM
                        
                       

                    </Typography>
                   
                </Box>
                <Divider
                            sx={{ width:900,
                                mt: 3,
                                mb:3,
                                backgroundColor: 'black',
                            }}
                        />
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <img src={img} alt=""
                        style={{height:160}}
                />
            </Grid>
        
            <Grid item lg={6}>
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                        sx={{mt:0.5}}
                    >Recipt Number :
                    </Typography>
                    <FileNumberBoxes fileNumber={data.Receipt_No} />
                </Box>
              </Grid>
              <Grid item lg={6} >
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                    sx={{mt:0.5}}
                    >Receipt Status :
                    </Typography>
                    <Typography
                    variant='h6'
                            sx={{ ml:2}}
                            >
                        {data.Receipt_Status?.toUpperCase()}
                    </Typography>
                    
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                    sx={{mt:0.5}}
                    variant='body1'
                    >DATE :
                    </Typography>
                    <Typography
                    variant='body1'
                            sx={{mt:0.5 , ml:2}}
                            >
                        {data.Date}
                        <Divider
                            sx={{ width:100,
                                mt:data.Date? 0 : 3,
                                backgroundColor: 'black',
                            }}
                        />
                    </Typography>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                    sx={{mt:0.5}}
                    variant='body1'
                    >FILE NUMBER :
                    </Typography>
                    <Typography
                    variant='body1'
                            sx={{mt:0.5 , ml:2}}
                            >
                        {data.File_No}
                        <Divider
                            sx={{ width:100,
                                mt:data.File_No? 0 : 3,
                                backgroundColor: 'black',
                            }}
                        />
                    </Typography>
                </Box>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                    sx={{mt:0.5}}
                    variant='body1'
                    >NAME :
                    </Typography>
                    <Typography
                    variant='body1'
                            sx={{mt:0.5 , ml:2}}
                            >
                        {data.Name?.toUpperCase()}
                        <Divider
                            sx={{ width:500,
                                mt:data.Name? 0 : 3,
                                backgroundColor: 'black',
                            }}
                        />
                    </Typography>
                </Box>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                    sx={{mt:0.5}}
                    variant='body1'
                    >Receieved Amount :
                    </Typography>
                    <Typography
                    variant='body1'
                            sx={{mt:0.5 , ml:2}}
                            >
                        {data.Received_Amount}
                        <Divider
                            sx={{ width:300,
                                mt:data.Received_Amount? 0 : 3,
                                backgroundColor: 'black',
                            }}
                        />
                    </Typography>
                </Box>
              </Grid>
              <Grid item lg={12}>
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                    sx={{mt:0.5}}
                    variant='body1'
                    >TOTAL RECIEVED AMOUNT :
                    </Typography>
                    <Typography
                    variant='body1'
                            sx={{mt:0.5 , ml:2}}
                            >
                        {data.Total_Recieved}
                        <Divider
                            sx={{ width:300,
                                mt:data.Total_Recieved? 0 : 3,
                                backgroundColor: 'black',
                            }}
                        />
                    </Typography>
                </Box>
              </Grid>
              <Grid item lg={12}>
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                    sx={{mt:0.5}}
                    variant='body1'
                    >AMOUNT FOR THE MONTH:
                    </Typography>
                    <Typography
                    variant='body1'
                            sx={{mt:0.5 , ml:2}}
                            >
                        {data.Amount_For_The_Month_Of}
                        <Divider
                            sx={{ width:200,
                                mt:data.Amount_For_The_Month_Of? 0 : 3,
                                backgroundColor: 'black',
                            }}
                        />
                    </Typography>
                </Box>
              </Grid>

              <Grid item lg={5}>
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                    sx={{mt:0.5}}
                    variant='body1'
                    >RECEIPT TYPE:
                    </Typography>
                    <Typography
                    variant='body1'
                            sx={{mt:0.5 , ml:2}}
                            >
                        {data.Mode_Of_Payment}
                        <Divider
                            sx={{ width:100,
                                mt:data.Mode_Of_Payment? 0 : 3,
                                backgroundColor: 'black',
                            }}
                        />
                    </Typography>
                </Box>
              </Grid>
              <Grid item lg={7}>
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                    sx={{mt:0.5}}
                    variant='body1'
                    >MODE OF PAYMENT:
                    </Typography>
                    <Typography
                    variant='body1'
                            sx={{mt:0.5 , ml:2}}
                            >
                        {data.Payment_Mode}
                        <Divider
                            sx={{ width:200,
                                mt:data.Payment_Mode? 0 : 3,
                                backgroundColor: 'black',
                            }}
                        />
                    </Typography>
                </Box>
              </Grid>
              <Grid item lg={4}>
            <Box
                sx={{display:'flex',
                     flexDirection:"row",
                    color:'black',
                    ml:1
                }}
            >
                <Typography
                sx={{mt:0.5}}
                variant='body1'
                 >PLOT SIZE :
                 </Typography>
                 <Typography
                 variant='body1'
                        sx={{mt:0.5 , ml:2 , border:1 , paddingX:'2%' }}
                        >
                    {data.Area?.toUpperCase()}
 
                 </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} >
            <Box
                sx={{display:'flex',
                     flexDirection:"row",
                    color:'black',
                    ml:1
                }}
            >
                <Typography
                sx={{mt:0.5}}
                variant='body1'
                 >PLOT LOCATION :
                 </Typography>
                 <Typography
                 variant='body1'
                        sx={{mt:0.5 , ml:2 , border:1 , paddingX:'2%' }}
                        >
                    {data.PlotLocation?.toUpperCase()}
 
                 </Typography>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box
                sx={{display:'flex',
                     flexDirection:"row",
                    color:'black',
                    ml:1
                }}
            >
                <Typography
                sx={{mt:0.5}}
                variant='body1'
                 >PHASE :
                 </Typography>
                 <Typography
                 variant='body1'
                        sx={{mt:0.5 , ml:2 , border:1 , 
                            paddingX:'5%' }}
                        >
                    {data.Phase?.toUpperCase()}
 
                 </Typography>
            </Box>
          </Grid>
        
          <Grid item lg={4} >
            <Box
                sx={{display:'flex',
                     flexDirection:"row",
                    color:'black',
                    ml:1
                }}
            >
                <Typography
                sx={{mt:0.5}}
                variant='body1'
                 >BLOCK :
                 </Typography>
                 <Typography
                 variant='body1'
                        sx={{mt:0.5 , ml:2 , border:1 , paddingX:'5%' }}
                        >
                    {data.Block?.toUpperCase()}
 
                 </Typography>
            </Box>
          </Grid>

           <Grid item lg={6}>
            <Box
                sx={{display:'flex',
                     flexDirection:"row",
                    color:'black',
                    ml:1
                }}  
            >
                <Typography
                sx={{mt:0.5}}
                variant='body1'
                 >PLOT NUMBER :
                 </Typography>
                 <Typography
                 variant='body1'
                        sx={{mt:0.5 , ml:2 , border:1 , 
                            paddingX:'5%' }}
                        >
                    {data.Plot?.toUpperCase()}
 
                 </Typography>
            </Box>
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box
                sx={{display:'flex',
                     flexDirection:"row",
                    color:'black',
                    ml:1
                }}
            >
                <Typography
                sx={{mt:0.5}}
                variant='body1'
                 >REMARKS 
                 </Typography>
                 <Typography
                 variant='body1'
                        sx={{mt:0.5 , ml:2}}
                        >
                    {data.Remarks?.toUpperCase()}
                    <Divider
                        sx={{ width:600,
                            mt:data.Remarks? 0 : 3,
                            backgroundColor: 'black' }}
                    />
                 </Typography>
            </Box>
          </Grid>

          <Grid item lg={5}>
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                    sx={{mt:0.5}}
                    variant='body1'
                    >PLOT AMOUNT:
                    </Typography>
                    <Typography
                    variant='body1'
                            sx={{mt:0.5 , ml:2}}
                            >
                        {data.Total_Amount}
                        <Divider
                            sx={{ width:100,
                                mt:data.Total_Amount? 0 : 3,
                                backgroundColor: 'black',
                            }}
                        />
                    </Typography>
                </Box>
              </Grid>
              <Grid item lg={7}>
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                    sx={{mt:0.5}}
                    variant='body1'
                    >BALANCE AMOUNT:
                    </Typography>
                    <Typography
                    variant='body1'
                            sx={{mt:0.5 , ml:2}}
                            >
                        {data.Balance_Amount}
                        <Divider
                            sx={{ width:200,
                                mt:data.Balance_Amount? 0 : 3,
                                backgroundColor: 'black',
                            }}
                        />
                    </Typography>
                </Box>
              </Grid>

              <Grid item lg={5}>
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                    sx={{mt:0.5}}
                    variant='body1'
                    >PREPARED BY:
                    </Typography>
                    <Typography
                    variant='body1'
                            sx={{mt:0.5 , ml:2}}
                            >
                        {data.Prepaired_by_Name?.toUpperCase()}
                        <Divider
                            sx={{ width:100,
                                mt:data.Prepaired_by_Name? 0 : 3,
                                backgroundColor: 'black',
                            }}
                        />
                    </Typography>
                </Box>
              </Grid>
              <Grid item lg={7}>
                <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1
                    }}
                >
                    <Typography
                    sx={{mt:0.5}}
                    variant='body1'
                    >SIGNATURE:
                    </Typography>
                    <Typography
                    variant='body1'
                            sx={{ ml:2}}
                            >
                        <Divider
                            sx={{ width:200,
                                mt: 3,
                                backgroundColor: 'black',
                            }}
                        />
                    </Typography>
                </Box>
              </Grid>
              <Grid>
              <Box
                    sx={{display:'flex',
                        flexDirection:"row",
                        color:'black',
                        ml:1,
                        mt:2
                    }}
                >

                    <Typography
                    variant='body2'
                            sx={{ ml:2}}
                            >
                              <Divider
                            sx={{ width:900,
                                mt: 3,
                                mb:2,
                                backgroundColor: 'black',
                            }}
                        />
                              UBL Bank
                              Title:
                              PAKDEM SMC Pvt Ltd
                              ,
                              A/C No:
                              0109000236639528,
                              Branch Code:
                              1491,
                              IBAN:
                              PK02UNIL 0109000236639528
                        
                    </Typography>
                </Box>      
              </Grid>

                </Grid>
            

          </Box>
          </>}
    </Box>
  );
}

export default PrintRecipt;
