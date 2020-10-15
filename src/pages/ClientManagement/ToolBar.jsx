/**
 * This component contains search bar and filter button (on non-mobile) below 
 * page header in ClientManagement page.
 */
import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import GridItemSearchBar from '../../components/GridItemSearchBar';

const ToolBar = ({ showFilterButton, onSearchSubmit }) => {
  return (
    <Grid container justify='flex-start' spacing={2}>

      {/* Search Bar */}
      <GridItemSearchBar placeholder='Search...' onSubmit={onSearchSubmit} />

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