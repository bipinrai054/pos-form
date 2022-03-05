/*eslint-disable */

// mui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// components
import { CustomInput, CustomSelect } from '../ui-component/CustomInput';
import CustomSwitch from '../ui-component/CustomSwitch';

// icons
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function BasicTable() {
    return (
        <TableContainer component={Paper} elevation={4} sx={{ p: 5 }}>
            <Table sx={{ minWidth: 750 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Item Name</TableCell>
                        <TableCell>Item in Unit</TableCell>
                        <TableCell>Price Exc. Tax</TableCell>
                        <TableCell>Price Inc. Tax</TableCell>
                        <TableCell>Product Image</TableCell>
                        <TableCell>Ticket</TableCell>
                        <TableCell>
                            <AddCircleIcon className="add-btn" color="primary" fontSize="large" />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <CustomInput type="text" placeholder="Variant Name" />
                        </TableCell>
                        <TableCell style={{ width: '120px' }} component="th" scope="row">
                            <CustomSelect />
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <CustomInput type="number" placeholder="Exc. Tax" />
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <CustomInput type="number" placeholder="Inc. Tax" />
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <CustomInput type="file" />
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <CustomSwitch table="table" />
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <RemoveCircleIcon sx={{ mt: 3 }} className="remove-btn" fontSize="large" color="error" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
