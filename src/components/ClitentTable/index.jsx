import React, { useState } from 'react';
import { Table } from '@material-ui/core';
import ClientTableHeader from './ClientTableHeader';
import ClientTableBody from './ClientTableBody';
import clientData from '../../data/clients.json';

const ClientTable = props => {
  const columnNames = [
    "Client Name",
    "Email",
    "Phone",
    "Industry",
    "Point of Contact",
    "Website"
  ];

  const fieldList = [
    "clientName",
    "clientEmail",
    "clientPersonalPhone",
    "clientIndustry",
    "clientPocName"
  ];

  const rowCount = clientData.length;
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

  const ClientTableHeaderProps 
    = { numSelected, rowCount, onSelectAllClick, columnNames };

  const tableBodyProps = { clientData, selected, fieldList, onSelectClick };

  return (<Table>

    {/* Headers */}
    <ClientTableHeader {...ClientTableHeaderProps} />

    {/* Body */}
    <ClientTableBody {...tableBodyProps} />
    
  </Table>);
}

export default ClientTable;     