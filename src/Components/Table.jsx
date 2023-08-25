import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';
import theme from '../Theme/Theme';
import { useNavigate } from 'react-router-dom';
import LinearWithValueLabel from './Loader';

export default function DataTable({ data, nav, isPayment }) {
  const navigate = useNavigate();

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (showLoading && (!data || data.length === 0)) {
    return (
      <Box
        sx={{
          width: '90%',
          mx: 'auto',
          pt: '5.4%',
          pb: '5.4%',
        }}
      >
        <Typography>Loading Data...</Typography>
        <LinearWithValueLabel />
      </Box>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', marginTop: '2%' }}>
          <Typography sx ={{padding:'5%'}} >
            No Data Available
          </Typography>
      </Box>
    );
  }

  const keys = Object.keys(data[0]);

  const showViewPrintColumn = !isPayment;

  const formatHeader = (key) => {
    const words = key.split('_');
    const formattedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return formattedWords.join(' ');
  };

  const columns = [
    ...keys.slice(1).map((key) => ({
      field: key,
      headerName: formatHeader(key),
      suppressSizeToFit: true,
      flex: 1,
      headerClassName: 'super-app-theme--header',
    })),
    showViewPrintColumn && {
      field: 'View',
      headerName: 'Action',
      flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mb: 1 }}
              onClick={() => handleAction1(params.row.id)}
            >
              View
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleAction1(params.row.id)}
            >
              Print
            </Button>
          </Box>
        );
      },
    },
  ].filter(Boolean);

  const rows = data.map((item, index) => {
    const rowData = {};
    keys.slice(1).forEach((key) => {
      rowData[key] = item[key];
    });
    return { id: item[keys[0]], ...rowData, Action1: '' };
  });

  const handleAction1 = (id) => {
    navigate(`/${nav}/${id}`);
  };

  const renderCustomCell = (params) => {
    return (
      <div style={{ padding: 8, lineHeight: '1.5rem' }}>
        <div>{params.value}</div>
      </div>
    );
  };

  return (
    <Box sx={{ width: '100%', padding: '2%', }}>
      <DataGrid
        sx={{
          backgroundColor: theme.palette.primary.background,
          border: '1.5px solid #009688',
          borderRadius: 5,
          boxShadow: 10,
          width:'96%',
          '& .super-app-theme--header': {
            
            color: 'black',
            fontFamily: 'sans-serif',
            fontWeight: 800,
            fontSize: 18,
          
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            
            whiteSpace: "normal",
            lineHeight: "normal"
          },
          "& .MuiDataGrid-columnHeader": {
            
            height: "unset !important"
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom:'1.5px #009688 solid',
            minHeight : '80px !important',
            maxHeight: "168px !important"
          },
            "& .MuiDataGrid-cellContent": {
              
              whiteSpace: "normal",
              lineHeight: "normal",
            
          }
        }}
        rows={rows}
        columns={columns}
        renderCell={renderCustomCell}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 15, 20, 30]}
        rowHeight={100}
        headerHeight={100}
      />
    </Box>
  );
}
