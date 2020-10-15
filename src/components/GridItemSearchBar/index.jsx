/**
 * This is a search bar component which asumes that it is wrapped with <Grid> 
 * component with 'container' property. This component also has Search and Clear
 * buttons.
 */
import React, { useState } from 'react';
import { Grid, OutlinedInput, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const GridItemSearchBar = props => {
  const { placeholder, value, onChange, onSubmit, onKeyDown } = props;
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
        style={{background: 'white'}}
        onKeyDown={onKeyDown}
      />
    </Grid>
    <Grid item sm={4} xs={12} container spacing={2}  >
      <Grid item>
        <Button variant='contained' onClick={() => onSubmit('search')} 
          style={{background: 'white'}} >
          <b>SEARCH</b>
        </Button>
      </Grid>
      <Grid item>
        <Button variant='contained' onClick={() => onSubmit('clear')} 
          style={{background: 'white'}} >
          <b>CLEAR</b>
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

  const handleKeyDown = e => {
    if(e.key === "Enter" ) {
      onSubmit(searchingValue);
    }
  }

  return <GridItemSearchBar placeholder={placeholder} value={searchingValue} 
    onChange={handleOnChange} onSubmit={handleOnSubmit} onKeyDown={handleKeyDown}
  />
}

export default GridItemSearchBarContainer