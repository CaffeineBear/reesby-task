/**
 * This is a subcomponent of ClientManagement page. This will be placed above
 * table with 'More' button at the right handside.
 */
import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const TableTitle = props => {
  return (
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
  );
}

export default TableTitle;