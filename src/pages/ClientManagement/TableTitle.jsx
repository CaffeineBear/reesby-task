import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';


/* Table title with 'More' button */
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