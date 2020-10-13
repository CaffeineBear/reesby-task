import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import GridItemSearchBar from '../../components/GridItemSearchBar';

const ToolBar = ({ showFilterButton }) => {
  return (
    <Grid container justify='flex-start' spacing={2}>

      {/* Search Bar */}
      <GridItemSearchBar placeholder='Search...' />

      {/* Filter Button showing only on tablet or pc*/}
      <Grid item style={{marginLeft: 'auto'}}>
        <Hidden xsDown>
          {showFilterButton}
        </Hidden>
      </Grid>
    </Grid>
  );
}

export default ToolBar;