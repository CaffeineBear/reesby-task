import React from 'react';
// import { DataGrid } from '@material-ui/data-grid';
import { Table, TableBody, TableRow, TableCell} from '@material-ui/core'
import clientData from '../data/clients.json';

const ClientTable = props => {

    return ( <Table>
        <TableBody>
            { clientData.map( (currData, indexI) => {
                return (currData && <TableRow key={`ClientRow${indexI}`} > 
                
                    { Object.keys(currData).map( (currKey) => {
                        return (<TableCell key={`ClientRow${indexI}-${currKey}`} >
                            {currData[currKey]}
                        </TableCell>);
                    })}
                </TableRow>); 
            }) }
        </TableBody>
    </Table> );
}

export default ClientTable;     