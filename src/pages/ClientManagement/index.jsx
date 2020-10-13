import React from 'react';
import { Container, Card, CardContent, Typography, Button, Paper} from '@material-ui/core';
import ClientTable from '../../components/CheckBoxTable';
import PageHeader from './PageHeader';
import ToolBar from './ToolBar';
import TableTitle from './TableTitle';
import FilterListIcon from '@material-ui/icons/FilterList';
import clientData from '../../data/clients.json';

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

  const rowCount = clientData.length;
  const tableData = clientData;
  const clientTableProps = {rowCount, fieldList, columnNames, tableData};

  const showFilterButton = (
    <Button variant='outlined' color='primary' startIcon={<FilterListIcon/>}>
      SHOW FILTER
    </Button>
  );

  return (<Container>
    <Card>
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
      <CardContent>
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