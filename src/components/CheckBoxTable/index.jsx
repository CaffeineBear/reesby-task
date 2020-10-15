import React, { useState } from 'react';
import { Table, TablePagination  } from '@material-ui/core';
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
    updateSelected(prevSelected => {
      prevSelected[index] = !prevSelected[index];
      return prevSelected;
    });
    updateNumSelected(prevNumSelected => prevNumSelected + 1);
  }

  const onSelectAllClick = () => {
    const toggleSelect = !(numSelected === totalRow);
    updateSelected(new Array(totalRow).fill(toggleSelect));
    updateNumSelected(toggleSelect ? totalRow : 0);
  }

  const headerProps = { 
    numSelected, totalRow, onSelectAllClick, columnNames, 
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
    <Table>
      {/* Headers */}
      <CheckBoxTableHeader {...headerProps} />

      {/* Body */}
      <CheckBoxTableBody {...bodyProps} />
    </Table>

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