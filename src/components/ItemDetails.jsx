// mui
import { Grid } from '@mui/material';

// components
import { CustomInput, CustomSelect, CustomTextarea } from '../ui-component/CustomInput';

// eslint-disable-next-line
const ItemDetails = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Grid container flexDirection="column" spacing={3}>
                        <Grid item>
                            <CustomSelect label="Category" />
                        </Grid>
                        <Grid item>
                            <CustomInput type="text" placeholder="Name" label="Item Name" />
                        </Grid>
                        <Grid item>
                            <CustomInput type="number" placeholder="10" label="Alert Quantity" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container flexDirection="column" spacing={3}>
                        <Grid item>
                            <CustomSelect label="Brand" />
                        </Grid>
                        <Grid item>
                            <CustomInput type="date" label="Expiry Date" />
                        </Grid>
                        <Grid item>
                            <CustomInput label="Image" type="file" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 5 }}>
                <Grid item xs={12}>
                    <CustomTextarea placeholder="Description" />
                </Grid>
            </Grid>
        </>
    );
};

export default ItemDetails;
