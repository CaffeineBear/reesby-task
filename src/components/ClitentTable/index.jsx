import React, { useState, useEffect } from 'react';
import { 
    Checkbox,
    Table, TableHead, TableBody, TableRow, TableCell
} from '@material-ui/core'
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
    const [ selected,    updateSelected    ] = useState(new Array(rowCount).fill(false) );
    const [ numSelected, updateNumSelected ] = useState(0);

    const onSelectClick = (index) => {
        updateSelected( prevSelected => { 
            prevSelected[index] = !prevSelected[index]; 
            return prevSelected;
        });
        updateNumSelected( prevNumSelected => prevNumSelected + 1 );
    }
    
    const onSelectAllClick = () => {
        const toggleSelect = !(numSelected === rowCount);
        updateSelected( new Array(rowCount).fill(toggleSelect) );
        updateNumSelected( toggleSelect ? rowCount : 0 );
    }

    return ( <Table>

        {/* Headers */}
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all clients' }}
                    />
                </TableCell>
                { columnNames.map( currColumn => {
                    return (<TableCell key={`ClientTableColumn${currColumn}`}>
                        {currColumn}
                    </TableCell>);
                })}
            </TableRow>
        </TableHead>    

        {/* Body */}
        <TableBody>
            { clientData.map( (currData, indexI) => {
                return (currData && <TableRow key={`ClientRow${indexI}`} > 
                
                    {/* Checkbox */}
                    <TableCell padding="checkbox"  key={`ClientRow${indexI}-Checkbox`}>
                        <Checkbox
                            checked={selected[indexI]}
                            onChange={ () => {onSelectClick(indexI) } }
                            inputProps={{ 'aria-label': 'select current client' }}
                        />
                    </TableCell>

                    {/* Table Contents */}
                    { fieldList.map( (currField) => {
                        return (<TableCell key={`ClientRow${indexI}-${currField}`} >
                            {currData[currField]}
                        </TableCell>);
                    })}
                </TableRow>); 
            }) }
        </TableBody>
    </Table> );
}

export default ClientTable;     