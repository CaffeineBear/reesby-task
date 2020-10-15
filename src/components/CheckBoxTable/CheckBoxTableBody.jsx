/**
 * This component is a table body which contains the check box at the front.
 */

import React from 'react';
import { Checkbox, TableBody, TableRow, TableCell } from '@material-ui/core';

const CheckBoxTableBody = props => {
  const { 
    tableData, selected, fieldList, onSelectClick,
    pageInfo: { currPage, rowsPerPage },
    actionComponent, onActionEvent
  } = props;

  const ActionComponent = (actionComponentProps) => {
    return <div {...actionComponentProps}>
      {actionComponent}
    </div>
  }

  // Slice table to obtain the viewing page table.
  const startingIndex = (currPage)*rowsPerPage;
  const endingIndex   = startingIndex + rowsPerPage;
  const viewingData = tableData.slice( startingIndex, endingIndex);

  return (<React.Fragment>
    <TableBody>
      {viewingData.map((currData, currIndex) => {
        const indexInWholeTable = startingIndex + currIndex;

        return (currData && <TableRow key={`ClientRow${indexInWholeTable}`} >

          {/* Checkbox */}
          <TableCell padding="checkbox" key={`ClientRow${indexInWholeTable}-Checkbox`}>
            <Checkbox
              checked={selected[indexInWholeTable]}
              onChange={() => { onSelectClick(indexInWholeTable) }}
              inputProps={{ 'aria-label': 'select current client' }}
            />
          </TableCell>

          {/* Table Contents */}
          {fieldList.map((currField) => {
            return (<TableCell key={`ClientRow${indexInWholeTable}-${currField}`} >
              {currData[currField]}
            </TableCell>);
          })}

          {/* Optional Clickable Action at the end */}  
          { ( actionComponent && typeof onActionEvent === 'function' ) &&
            (<TableCell>
              <ActionComponent onClick={ (e) =>  {
                  return onActionEvent(e, indexInWholeTable);
                } }
              />
            </TableCell>)
          }

        </TableRow>);
      })}
    </TableBody>
  </React.Fragment>);
}

export default CheckBoxTableBody;