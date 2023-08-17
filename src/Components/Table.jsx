import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import theme from '../Theme/Theme';
import { useNavigate } from "react-router-dom";


export default function DataTable({ data , nav, isPayment}) {
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }
  

  const navigate = useNavigate()

  const keys = Object.keys(data[0]);
  

  const showViewPrintColumn = !isPayment;

  const formatHeader = (key) => {
    const words = key.split('_');
    const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return formattedWords.join(' ');
  };

 
  const columns = [
    ...keys.slice(1).map(key => ({
      field: key,
      headerName: formatHeader(key),
      suppressSizeToFit: true,
      flex: 1,
      headerClassName: 'super-app-theme--header',
    })),
    showViewPrintColumn && {
      field: 'View',
      headerName: 'View',
      flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Button variant="outlined" color="primary" sx={{ mb: 1 }} onClick={() => handleAction1(params.row.id)}>
              View
            </Button>
            <Button variant="outlined" color="primary" onClick={() => handleAction1(params.row.id)}>
              Print
            </Button>
          </Box>
        );
      },
    },
  ].filter(Boolean);







  // Create rows with the additional "Action1" and "Action2" columns
  const rows = data.map((item, index) => {
    const rowData = {};
    keys.slice(1).forEach(key => {
      rowData[key] = item[key];
    });
    return { id: item[keys[0]], ...rowData , Action1: '' };
  });

  // Define the handlers for the buttons using the identifier key parameter
  const handleAction1 = (id) => {
    navigate(`/${nav}/${id}`)
  };

  const handleEdit = (id) => {
    // Add your logic for the "Edit" button action here
    console.log('Edit button clicked for id:', id);
  };

  const handleDelete = (id) => {
    // Add your logic for the "Delete" button action here
    console.log('Delete button clicked for id:', id);
  };

  const renderCustomCell = (params) => {

    return (
      <div style={{ padding: 8, lineHeight: '1.5rem'  }}>
  
        <div>{params.value}</div>
        {/* Add other content or styling as needed */}
      </div>
    );
  };

  return (
    <Box sx={{ width: '100%', padding: '2%', }}>
      <DataGrid
        sx={{
          backgroundColor: theme.palette.primary.background,
          border: '1 solid black',
          borderRadius: 5,
          boxShadow: 10,
          width:'96%',
          '& .super-app-theme--header': {
            backgroundColor: 'white',
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
