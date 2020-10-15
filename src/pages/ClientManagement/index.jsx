/**
 * This is a ClientManagement page which has table with action buttons and search
 * bar. 
 */

import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, Button, Paper } from '@material-ui/core';
import ClientTable from '../../components/CheckBoxTable';
import PageHeader from './PageHeader';
import ToolBar from './ToolBar';
import TableTitle from './TableTitle';
import FilterListIcon from '@material-ui/icons/FilterList';
import clientData from '../../data/clients.json';
import CreateIcon from '@material-ui/icons/Create';

const ClientManagement = props => {

  const columnNames = [
    "Client Name",
    "Email",
    "Phone",
    "Industry",
    "Point of Contact",
    "Website"
  ];

  const fieldList = [
    "clientName",
    "clientEmail",
    "clientPersonalPhone",
    "clientIndustry",
    "clientPocName",
    "clientWebsite"
  ];

  const totalRowCount = clientData.length;
  const tableData = clientData;
  const [selected, updateSelected] = useState(new Array(totalRowCount).fill(false));

  const [ pageInfo, setPageInfo ] = useState({
    rowsPerPage: 5,
    currPage: 0,
    totalRow: totalRowCount,
    totalPageNumber: Math.ceil(totalRowCount / 5)
  });

  const handlePenClick = (e, index) => {
    console.log(`index ${index} is clicked`);
  }

  const rowActionComponent = ( <Button variant='outlined' component='div' 
    color='primary' startIcon={<CreateIcon />} /> );

  const clientTableProps = {
    fieldList, 
    columnNames, 
    tableData, 
    selected, 
    updateSelected,
    pageInfo,
    setPageInfo,
    rowActionComponent, 
    onRowActionEvent: handlePenClick
  };

  const showFilterButton = (
    <Button variant='outlined' color='primary' startIcon={<FilterListIcon/>}>
      <b>SHOW FILTER</b>
    </Button>
  );

  return (<Container >
    <Card style={{backgroundColor: 'whitesmoke'}}>
      {/* Page Headers */}
      <CardContent>
        {/* Page Subheader */}
        <Typography variant='body2' align='left' style={{color:'grey'}}>
          <strong>MANAGEMENT</strong>
        </Typography>

        {/* Page Main Header */}
        <PageHeader showFilterButton={showFilterButton} />
      </CardContent>

      {/* Toolbar */}
      <CardContent>
        <ToolBar showFilterButton={showFilterButton}/>
      </CardContent>

      {/* Page Content */}
      <CardContent style={{justifyContent: 'flex-start'}}>

        <Typography variant="body2" align="left" 
          style={{ color: 'grey', float: 'left' }} >
          {totalRowCount} records found. Page {pageInfo.currPage + 1} of {pageInfo.totalPageNumber}
        </Typography>
        <br />

        <Paper elevation={3} >

          {/* Table title with 'More' button */}
          <TableTitle />

          {/* Actual Table */}
          <div style={{'overflowX':'auto'}}>
            <ClientTable {...clientTableProps} />
          </div>
        </Paper>
      </CardContent>
    </Card>
  </Container>)
}

export default ClientManagement;