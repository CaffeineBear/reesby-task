/**
 * This is a table header for the table with check box. Clicking the checkbox at
 * this component will toggle all selections of table rows.
 */
import React, { useEffect, useState } from 'react';
import { Checkbox, TableHead, TableRow, TableCell } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const CheckBoxTableHeader = props => {
  const { 
    numSelected, totalRow, onSelectAllClick, columnNames, actionExist, selected 
  } = props;

  const [ toggleCheckBoxKey, setCheckBoxKey ] = useState(uuidv4());

  useEffect( () => {
    setCheckBoxKey(uuidv4());
  }, [selected]);

  return (<React.Fragment>
    <TableHead style={{background: 'whitesmoke'}}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            key={toggleCheckBoxKey}
            checked={totalRow > 0 && numSelected === totalRow}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all clients' }}
          />
        </TableCell>
        {columnNames.map(currColumn => {
          return (<TableCell key={`CheckBoxTableCol${currColumn}`}>
            <i><b>{currColumn}</b></i>
          </TableCell>);
        })}

        {/* If there are action button exists at the end, we add empty cell */}
        { actionExist && <TableCell key={`CheckBoxTableColEmpty`} /> }

      </TableRow>
    </TableHead>
  </React.Fragment>);
}

export default CheckBoxTableHeader;