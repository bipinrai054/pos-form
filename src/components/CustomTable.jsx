// mui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// components
import { CustomInput, CustomSelect } from '../ui-component/CustomInput';

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
                        <TableCell>Purchase Price Exc. Tax</TableCell>
                        <TableCell>Purchase Price Inc. Tax</TableCell>
                        <TableCell>Product Image</TableCell>
                        <TableCell>
                            <AddCircleIcon className="add-btn" color="primary" fontSize="large" />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <CustomInput type="text" placeholder="Item Variant Name" />
                        </TableCell>
                        <TableCell component="th" scope="row">
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
                            {/* eslint-disable-next-line */}
                            <RemoveCircleIcon sx={{ mt: 3 }} className="remove-btn" fontSize="large" color="error" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
