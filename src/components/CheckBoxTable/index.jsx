import React, { useState } from 'react';
import { Table } from '@material-ui/core';
import CheckBoxTableHeader from './CheckBoxTableHeader';
import CheckBoxTableBody from './CheckBoxTableBody';

const CheckBoxTableContainer = props => {
  
  const { rowCount, fieldList,  columnNames, tableData} = props;
  const [selected, updateSelected] = useState(new Array(rowCount).fill(false));
  const [numSelected, updateNumSelected] = useState(0);

  const onSelectClick = (index) => {
    updateSelected(prevSelected => {
      prevSelected[index] = !prevSelected[index];
      return prevSelected;
    });
    updateNumSelected(prevNumSelected => prevNumSelected + 1);
  }

  const onSelectAllClick = () => {
    const toggleSelect = !(numSelected === rowCount);
    updateSelected(new Array(rowCount).fill(toggleSelect));
    updateNumSelected(toggleSelect ? rowCount : 0);
  }

  const headerProps 
    = { numSelected, rowCount, onSelectAllClick, columnNames };

  const bodyProps = { tableData, selected, fieldList, onSelectClick };

  return <CheckBoxTable headerProps={headerProps} bodyProps={bodyProps}/>;
}


const CheckBoxTable = ({headerProps, bodyProps}) => {

  return (<Table>

    {/* Headers */}
    <CheckBoxTableHeader {...headerProps} />

    {/* Body */}
    <CheckBoxTableBody {...bodyProps} />
    
  </Table>);
}

export default CheckBoxTableContainer;     