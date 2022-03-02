// mui
import { Grid, Typography } from '@mui/material';

// component
import { CustomSelect } from '../ui-component/CustomInput';
import CustomTable from './CustomTable';

export default function VariantDetails() {
    return (
        <>
            <Grid container sx={{ display: 'grid' }}>
                <Grid item>
                    <Typography variant="h3">Variation</Typography>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <CustomSelect label="Tax Rate" />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomSelect label="Select Variable" />
                    </Grid>
                </Grid>
                <Grid container sx={{ mt: 7 }}>
                    <CustomTable />
                </Grid>
            </Grid>
        </>
    );
}
