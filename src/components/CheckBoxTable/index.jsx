/**
 * This is a table component with checkbox at front and optional action button 
 * at the back of each row. 
 */
import React, { useState, useEffect } from 'react';
import { Table, TableContainer, TablePagination } from '@material-ui/core';
import CheckBoxTableHeader from './CheckBoxTableHeader';
import CheckBoxTableBody from './CheckBoxTableBody';

const CheckBoxTableContainer = props => {
  
  const { 
    fieldList,  columnNames, tableData, selected, updateSelected,
    pageInfo, setPageInfo, rowActionComponent, onRowActionEvent
  } = props;

  const { totalRow } = pageInfo;
  
  const [numSelected, updateNumSelected] = useState(0);

  const onSelectClick = (index) => {
    // if selected array is null (meaning no searching results),
    // we ignore to update.
    if(!selected) {
      return;
    }
    
    // Toggling one checkbox to update both selected and num of selected data.
    const newBooleanValue = !selected[index];
    updateSelected(prevSelected => {
      // deep cloning to avoid any reference issue.
      const newSelected = JSON.parse(JSON.stringify(prevSelected));
      newSelected[index] = newBooleanValue;
      return newSelected;
    });
    updateNumSelected(prevNumSelected => {
      if( newBooleanValue ) {
        return prevNumSelected + 1;
      } 
      return prevNumSelected - 1;
    } );
  }

  const onSelectAllClick = () => {
    // This means it has no searching result or data itself. 
    // Then we skip updating selected array.
    if( totalRow === 0 ){
      return;
    }
    const toggleSelect = !(numSelected === totalRow);
    updateSelected(new Array(totalRow).fill(toggleSelect));
    updateNumSelected(toggleSelect ? totalRow : 0);
  }

  // if someone used search bar, total row will become 0 if there are no result
  // So, we also initialize number of selected value back to be zero. 
  useEffect( () => {
    if( totalRow === 0) {
      updateNumSelected(0);
    }
  }, [totalRow]);

  const headerProps = { 
    numSelected, totalRow, onSelectAllClick, columnNames, selected,
    actionExist: (rowActionComponent && typeof onRowActionEvent === 'function')
  };

  const handleChangePage = (event, newPage) => {
    setPageInfo( prevInfo => {
      return({
        ...prevInfo,
        currPage: newPage
      });
    });
  };

  const bodyProps = { 
    tableData, selected, fieldList, onSelectClick, pageInfo, handleChangePage,
    actionComponent: rowActionComponent,
    onActionEvent: onRowActionEvent
  };

  const pageProps = {
    pageInfo,
    handleChangePage
  }

  return <CheckBoxTable headerProps={headerProps} bodyProps={bodyProps}
    pageProps={pageProps}
  />;
}


const CheckBoxTable = ({headerProps, bodyProps, pageProps}) => {
  const { 
    pageInfo: {totalRow, rowsPerPage, currPage},
    handleChangePage
  } = pageProps;
  return (<React.Fragment>
    <TableContainer>
      <Table>
        {/* Headers */}
        <CheckBoxTableHeader {...headerProps} />

        {/* Body */}
        <CheckBoxTableBody {...bodyProps} />

      </Table>
    </TableContainer>

    {/* Table pagination */}
    <TablePagination 
      component="div"
      rowsPerPageOptions={[5]}
      count={totalRow}
      rowsPerPage={rowsPerPage}
      page={currPage}
      onChangePage={handleChangePage}
    />
  </React.Fragment>);
}

export default CheckBoxTableContainer;     