import React, { useState } from 'react';
import { Table } from '@material-ui/core';
import ClientTableHeader from './ClientTableHeader';
import ClientTableBody from './ClientTableBody';
import clientData from '../../data/clients.json';

const ClientTableContainer = props => {
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
    "clientPocName",
    "clientWebsite"
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

  const headerProps 
    = { numSelected, rowCount, onSelectAllClick, columnNames };

  const bodyProps = { clientData, selected, fieldList, onSelectClick };

  return <ClientTable headerProps={headerProps} bodyProps={bodyProps}/>;
}


const ClientTable = ({headerProps, bodyProps}) => {

  return (<Table>

    {/* Headers */}
    <ClientTableHeader {...headerProps} />

    {/* Body */}
    <ClientTableBody {...bodyProps} />
    
  </Table>);
}

export default ClientTableContainer;     