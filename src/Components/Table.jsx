import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID'},
  { field: 'firstName', headerName: 'First name' },
  { field: 'lastName', headerName: 'Last name' },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Tyrell', firstName: 'Cersei', age: 42 },
  { id: 11, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 12, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 13, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 14, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 15, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 16, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 17, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 18, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 19, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 20, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 21, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 22, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 23, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 24, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 25, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 26, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 27, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 28, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 29, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
  { id: 30, lastName: 'Tyrell', firstName: 'Jaime', age: 45 },
];

export default function DataTable() {
  return (
    <Box style={{ width: '90%' , padding:'5%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[10, 100]}
      />
    </Box>
  );
}