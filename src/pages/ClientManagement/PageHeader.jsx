import React from 'react';
import { Grid, Typography, Button, Hidden } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const PageHeader = ({ showFilterButton }) => {
  return (
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
  );
}

export default PageHeader;