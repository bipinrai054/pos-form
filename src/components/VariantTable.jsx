/*eslint-disable */

import React from 'react';

// mui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material';

// components
import {
    CustomInput,
    CustomSelect
    // CustomFileUpload
} from '../ui-component/CustomInput';
import CustomSwitch from '../ui-component/CustomSwitch';

// icons
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function BasicTable({ variantDetails, setVariantDetails }) {
    console.log(variantDetails);

    const [img, setImg] = React.useState(null);

    const imgChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImg(e.target.files[0]);
        }
    };

    return (
        <TableContainer component={Paper} elevation={4} sx={{ p: 4 }}>
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
                        <TableCell style={{ width: '170px' }} component="th" scope="row">
                            <CustomInput type="text" placeholder="Variant Name" />
                        </TableCell>
                        <TableCell style={{ width: '130px' }} component="th" scope="row">
                            <CustomSelect />
                        </TableCell>
                        <TableCell style={{ width: '131px' }} component="th" scope="row">
                            <CustomInput type="number" placeholder="Exc. Tax" />
                        </TableCell>
                        <TableCell style={{ width: '131px' }} component="th" scope="row">
                            <CustomInput type="number" placeholder="Inc. Tax" />
                        </TableCell>
                        <TableCell style={{ width: '153px' }} component="th" scope="row">
                            {/* custom file upload component */}
                            {/* <CustomFileUpload imgChange={imgChange} img={img} /> */}

                            <Box
                                display="flex"
                                //  justifyContent="center"
                                alignItems="center"
                                sx={{ pt: 2.5 }}
                            >
                                <input type="file" accept="image/*" id="actual-btn" style={{ display: 'none' }} onChange={imgChange} />
                                <Button variant="contained" sx={{ mr: 1 }}>
                                    <label style={{ fontSize: '12px' }} className="actual-label" for="actual-btn">
                                        Choose File
                                    </label>
                                </Button>
                                {img && (
                                    <>
                                        <img style={{ height: '30px', width: '35px' }} src={URL.createObjectURL(img)} alt="test" />
                                    </>
                                )}
                            </Box>
                        </TableCell>
                        <TableCell style={{ width: '153px' }} component="th" scope="row">
                            <Box sx={{ pt: 2.5 }}>
                                <CustomSwitch table="table" />
                            </Box>
                        </TableCell>
                        <TableCell style={{ width: '67px' }} component="th" scope="row">
                            <RemoveCircleIcon sx={{ mt: 3 }} className="remove-btn" fontSize="large" color="error" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
