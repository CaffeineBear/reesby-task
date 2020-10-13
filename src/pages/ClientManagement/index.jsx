import React from 'react';
import { 
  Container, Card, CardContent, Typography, Grid, Button, Paper, IconButton, 
  Hidden } 
from '@material-ui/core';
import ClientTable from '../../components/CheckBoxTable';
import GridItemSearchBar from '../../components/GridItemSearchBar';
import AddIcon from '@material-ui/icons/Add';
import FilterListIcon from '@material-ui/icons/FilterList';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
      <CardContent>
        {/* Page subheader */}
        <Typography variant='body2' align='left' style={{color:'grey'}}>
          <strong>MANAGEMENT</strong>
        </Typography>

        {/* Page Header at top */}
        <Grid container justify='space-between'>

          {/* Page Title */}
          <Grid item>
            <Typography variant='h6' align='left'>
              <strong>Clients</strong>
            </Typography>
          </Grid>

          {/* Action Button */}
          <Grid item xs={7} container direction='column' spacing={2} >
            <Grid item style={{marginLeft: 'auto'}}>
              <Button variant='contained' color='primary' startIcon={<AddIcon/>}>
                NEW CLIENT
              </Button>
            </Grid>

            {/* Filter button showing only on mobile version*/}
            <Hidden smUp >
              <Grid item style={{marginLeft: 'auto'}}>
                {showFilterButton}
              </Grid>
            </Hidden>
          </Grid>

        </Grid>
      </CardContent>
      <CardContent>

        {/* Toolbar */}
        <Grid container justify='flex-start' spacing={2}>

          <GridItemSearchBar placeholder='Search...' />

          {/* Filter Button showing only on tablet or pc*/}
          <Grid item style={{marginLeft: 'auto'}}>
            <Hidden xsDown>
              {showFilterButton}
            </Hidden>
          </Grid>
        </Grid>

      </CardContent>

      {/* PageContent */}
      <CardContent>
        <Paper elevation={3} >

          {/* Table title with 'More' button */}
          <Grid container direction='row' justify='space-between' 
            alignItems='center' style={{padding: '20px'}} >
            <Grid item xs={6}>
              <Typography variant='h6' align='left'>
                All Contents
              </Typography>
            </Grid>
            <Grid item style={{marginLeft: 'auto'}}>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Grid>
          </Grid>

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