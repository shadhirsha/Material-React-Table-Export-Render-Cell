// The Changes marked with Comments
// React.js framework with Javascript

import {MaterialReactTable, useMaterialReactTable} from 'material-react-table';
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { jsPDF } from 'jspdf'; //or use your library of choice here
import autoTable from 'jspdf-autotable';

  const data = [
    {
        name: {
            firstName: 'Elenora',
            lastName: 'Wilkinson'
        },
        company: 'Feest - Reilly',
        city: 'Hertaland',
        country: 'Qatar',
        phoneNumber: '07791232232'
    },
    {
        name: {
            firstName: 'Berneice',
            lastName: 'Feil'
        },
        company: 'Deckow, Leuschke and Jaskolski',
        city: 'Millcreek',
        country: 'Nepal',
    },
    {
        name: {
            firstName: 'Frieda',
            lastName: 'Baumbach',            
        },
        company: 'Heidenreich, Grady and Durgan',
        city: 'Volkmanside',
        country: 'Croatia',
    },
    {
        name: {
            firstName: 'Zachery',
            lastName: 'Brown',            
        },
        company: 'Cormier - Skiles',
        city: 'Faychester',
        country: 'Saint Pierre and Miquelon',
    },
    {
        name: {
            firstName: 'Kendra',
            lastName: 'Bins',
        },
        company: 'Wehner - Wilderman',
        city: 'New Valentin',
        country: 'Senegal',
    },
    {
        name: {
            firstName: 'Lysanne',
            lastName: 'Fisher',
        },
        company: 'Schmidt LLC',
        city: 'Malachitown',
        country: 'Costa Rica',
    },
    {
        name: {
            firstName: 'Garrick',
            lastName: 'Ryan',
        },
        company: 'Ryan - Buckridge',
        city: 'East Pearl',
        country: 'Cocos (Keeling) Islands',
    },
    {
        name: {
            firstName: 'Hollis',
            lastName: 'Medhurst',
        },
        company: 'Quitzon Group',
        city: 'West Sienna',
        country: 'Papua New Guinea',
    },
    {
        name: {
            firstName: 'Arlo',
            lastName: 'Buckridge',
        },
        company: 'Konopelski - Spinka',
        city: 'Chino',
        country: 'Congo',
    },
    {
        name: {
            firstName: 'Rickie',
            lastName: 'Auer',
        },
        company: 'Lehner - Walsh',
        city: 'Nyahfield',
        country: 'Sudan',
    },
    {
        name: {
            firstName: 'Isidro',
            lastName: 'Larson',
        },
        company: 'Reichert - Paucek',
        city: 'Fort Rosinaside',
        country: 'Belize',
    },
    {
        name: {
            firstName: 'Bettie',
            lastName: 'Skiles',
        },
        company: 'Zulauf, Flatley and Rolfson',
        city: 'West Feltonchester',
        country: 'Poland',
    },
  ]
  
  const columns = [
    {
      accessorKey: 'name.firstName',
      header: 'First Name',
      Cell: ({ cell }) => (
        cell.row.original.name.firstName?.toUpperCase()
      )
    },
    {
      accessorKey: 'name.lastName',
      header: 'Last Name',
    },
    {
      accessorKey: 'company',
      header: 'Company',
      enableResizing: true
    },
    {
      accessorKey: 'city',
      header: 'City',
    },
    {
      accessorKey: 'country',
      header: 'Country',
    },
    {
      accessorKey: 'phoneNumber',
      header: 'Phone Number',
    },
  ];


export default const Example() {
  //NEW INSERTED FUNCTION FOR EXPORT RENDER VALUE 
   const formatRow = (selectedRow, column) => {
    const row = []
    selectedRow?.map((i) => i?.original)?.map((d) => {
        const rowData = []
        column?.map((f) => {
            var srch = d
            const str = f.accessorKey
            str.split(".").map(item => srch = srch[item])
            rowData.push(srch)
        })
        row.push(rowData)
    })
    return(row)
  }
  
  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableHeaders = columns.map((c) => c.header);
    
    // const tableData = rows.map((row) => Object.values(row.original));
    //THIS tableData values changes with function call formatRow
    const tableData = formatRow(rows,columns)
    
    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save('mrt-pdf-example.pdf');
  };

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    columnFilterDisplayMode: 'popover',
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          padding: '8px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
        >
          Export All Rows
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  return <MaterialReactTable table={table} />;
};
