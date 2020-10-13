import React, { useState } from 'react';
import { Grid, OutlinedInput, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const GridItemSearchBar = props => {
  const { placeholder, value, onChange, onSubmit} = props;
  return ( <React.Fragment>
      {/* Search Bar with buttons */}
      <Grid item md={3} sm={5} xs={12} container justify='flex-start'>
      <OutlinedInput
        id="client-management-searchbar"
        startAdornment={<SearchIcon />}
        margin='dense'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Grid>
    <Grid item sm={4} xs={12} container spacing={2} >
      <Grid item>
        <Button variant='contained' onClick={() => onSubmit('search')} >
          SEARCH
        </Button>
      </Grid>
      <Grid item>
        <Button variant='contained' onClick={() => onSubmit('clear')} >
          CLEAR
        </Button>
      </Grid>
    </Grid>
  </React.Fragment>);
}

const GridItemSearchBarContainer = props => {
  const { placeholder, onChange, onSubmit} = props;
  const [ searchingValue, setSearchingValue ] = useState('');
  const handleOnChange = e => { 
    const currValue = e.target.value
    setSearchingValue(currValue); 
    if( typeof onChange === "function" ){
      onChange(currValue);
    }
  }
  const handleOnSubmit = type => {
    switch (type) {
      case 'clear':
        setSearchingValue('');
        break;
      default:
        onSubmit(searchingValue);
        break;
    }
  }

  return <GridItemSearchBar placeholder={placeholder} value={searchingValue} 
    onChange={handleOnChange} onSubmit={handleOnSubmit} />
}

export default GridItemSearchBarContainer