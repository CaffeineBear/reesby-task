/**
 * This is a table header for the table with check box. Clicking the checkbox at
 * this component will toggle all selections of table rows.
 */
import React from 'react';
import { Checkbox, TableHead, TableRow, TableCell } from '@material-ui/core';

const CheckBoxTableHeader = props => {
  const { 
    numSelected, totalRow, onSelectAllClick, columnNames, actionExist 
  } = props;
  return (<React.Fragment>
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < totalRow}
            checked={totalRow > 0 && numSelected === totalRow}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all clients' }}
          />
        </TableCell>
        {columnNames.map(currColumn => {
          return (<TableCell key={`CheckBoxTableCol${currColumn}`}>
            {currColumn}
          </TableCell>);
        })}

        {/* If there are action button exists at the end, we add empty cell */}
        { actionExist && <TableCell key={`CheckBoxTableColEmpty`} /> }

      </TableRow>
    </TableHead>
  </React.Fragment>);
}

export default CheckBoxTableHeader;