import React from 'react';
import { Checkbox, TableHead, TableRow, TableCell } from '@material-ui/core';

const CheckBoxTableHeader = props => {
  const { numSelected, rowCount, onSelectAllClick, columnNames } = props;
  return (<React.Fragment>
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all clients' }}
          />
        </TableCell>
        {columnNames.map(currColumn => {
          return (<TableCell key={`ClientTableColumn${currColumn}`}>
            {currColumn}
          </TableCell>);
        })}
      </TableRow>
    </TableHead>
  </React.Fragment>);
}

export default CheckBoxTableHeader;