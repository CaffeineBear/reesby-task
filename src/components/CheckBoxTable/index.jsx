import React, { useState } from 'react';
import { Table, TablePagination  } from '@material-ui/core';
import CheckBoxTableHeader from './CheckBoxTableHeader';
import CheckBoxTableBody from './CheckBoxTableBody';

const CheckBoxTableContainer = props => {
  
  const { 
    fieldList,  columnNames, tableData, selected, updateSelected,
    pageInfo, setPageInfo
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

  const headerProps 
    = { numSelected, totalRow, onSelectAllClick, columnNames };

  const bodyProps = { 
    tableData, selected, fieldList, onSelectClick, pageInfo
  };

  const handleChangePage = (event, newPage) => {
    setPageInfo( prevInfo => {
      return({
        ...prevInfo,
        currPage: newPage
      });
    });
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
  const { pageInfo, handleChangePage } = pageProps;
  return (<Table>

    {/* Headers */}
    <CheckBoxTableHeader {...headerProps} />

    {/* Body */}
    <CheckBoxTableBody {...bodyProps} />

    <TablePagination 
      rowsPerPageOptions={5}
      count={pageInfo.totalRow}
      rowsPerPage={pageInfo.rowsPerPage}
      page={pageInfo.currPage}
      onChangePage={handleChangePage}
    />
    
  </Table>);
}

export default CheckBoxTableContainer;     