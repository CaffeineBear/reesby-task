import React from 'react';
// import { DataGrid } from '@material-ui/data-grid';
import { Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'
import clientData from '../data/clients.json';

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
    return ( <Table>

        {/* Headers */}
        <TableHead>
            <TableRow>
                { columnNames.map( currColumn => {
                    return (<TableCell>
                        {currColumn}
                    </TableCell>);
                })}
            </TableRow>
        </TableHead>    

        {/* Body */}
        <TableBody>
            { clientData.map( (currData, indexI) => {
                return (currData && <TableRow key={`ClientRow${indexI}`} > 
                
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