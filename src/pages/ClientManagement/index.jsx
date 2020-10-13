import React from 'react';
import { Container, Card, CardContent, Typography, Grid, Button, OutlinedInput, Paper, IconButton, Hidden } from '@material-ui/core';
import ClientTable from '../../components/ClitentTable';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ClientManagement = props => {

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
            <Hidden mdUp>
              <Grid item>
                  {showFilterButton}
              </Grid>
            </Hidden>
          </Grid>

        </Grid>
      </CardContent>
      <CardContent>

        {/* Toolbar */}
        <Grid container justify='flex-start' spacing={2}>

          {/* Search Bar with buttons */}
          <Grid item md={3} sm={5} xs={12} container justify='flex-start'>
            <OutlinedInput
              id="client-management-searchbar"
              startAdornment={<SearchIcon />}
              margin='dense'
            />
          </Grid>
          <Grid item sm={4} xs={12} container spacing={2} >
            <Grid item>
              <Button variant='contained' >
                SEARCH
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' >
                CLEAR
              </Button>
            </Grid>
          </Grid>

          {/* Filter Button */}
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
          {/* <Grid container direction='column' > */}

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
              <ClientTable />
            </div>
          {/* </Grid> */}
        </Paper>
      </CardContent>
    </Card>
  </Container>)
}

export default ClientManagement;