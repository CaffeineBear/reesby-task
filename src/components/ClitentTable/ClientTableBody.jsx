import React from 'react';
import { Checkbox, TableBody, TableRow, TableCell } from '@material-ui/core';

const ClientTableBody = props => {
  const { clientData, selected, fieldList, onSelectClick } = props;
  return (<React.Fragment>
    <TableBody>
      {clientData.map((currData, index) => {
        return (currData && <TableRow key={`ClientRow${index}`} >

          {/* Checkbox */}
          <TableCell padding="checkbox" key={`ClientRow${index}-Checkbox`}>
            <Checkbox
              checked={selected[index]}
              onChange={() => { onSelectClick(index) }}
              inputProps={{ 'aria-label': 'select current client' }}
            />
          </TableCell>

          {/* Table Contents */}
          {fieldList.map((currField) => {
            return (<TableCell key={`ClientRow${index}-${currField}`} >
              {currData[currField]}
            </TableCell>);
          })}
        </TableRow>);
      })}
    </TableBody>
  </React.Fragment>);
}

export default ClientTableBody;