import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import {Button} from '@mui/material';
import { useTheme } from '@emotion/react';
import { useNavigate , useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getrefundFile } from '../api/Transfer';
import TransferCard from '../Components/TransferCard';
import FileSelector from '../Components/fileselector';
import RefundForm from './refundForm';

function CreateRefund () {


    const navigate = useNavigate()
    const theme = useTheme();
    
    const [data , setData] = useState(null);

    const [selectedFile, setSelectedFile] = useState('');

    const getdetails = async (file) => {
        try {
            
            const responseData = await getrefundFile(file); 

            const FileDetails = {
              Applicant_Name: responseData.ApplicantName,
              Father_Or_Husband: responseData.FatherOrHusband,
              CNIC_No: responseData.CNICNo,
              Contact_No: responseData.ContactNo,
              File_No: responseData.FileNo,
              Plot_Size: responseData.Area,
              Plot_No: responseData.PlotNo,
              Total_Amount : responseData.TotalAmount,
              Total_Installment: responseData.Total_Installment,
              Down_Payment: responseData.DownPayment,
              Monthly_Installment : responseData.MonthlyInstallment,
              Total_Paid_Amount : responseData.Total_Paid_Amount


            }
            setData(FileDetails); 
          } catch (error) {
            
          }
    }

    const handleConfirm = (file) => {
        setSelectedFile(file);
        getdetails(file);
    };

    return (
        <Box
          sx={{
            display: 'flex',
            backgroundColor: theme.palette.secondary.background,
            justifyContent: 'center',
            flexDirection: 'column',
            paddingTop: { lg: '4%', md: '6%', sm: '15%', xs: '8%' },
            height : data ? 'auto' : '40vh'
            
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding:'1%'
            }}
          >
            <FileSelector onConfirm={handleConfirm} />
            
          </Box>
          {
            data &&
            (<>
              <TransferCard data={data} edit={true} isExp={true}  />
              <RefundForm ApplicationNo = {data.File_No} Total_Paid_Amount = {data.Total_Paid_Amount} />
            </>)
            }
        </Box>
      );
            }

export default CreateRefund;
