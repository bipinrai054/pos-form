/*eslint-disable */

// mui
import { Grid, Typography } from '@mui/material';

// component
import { CustomSelect } from '../ui-component/CustomInput';
import VariantTable from './VariantTable';

export default function VariantDetails({ variantDetails, setVariantDetails }) {
    return (
        <>
            <Grid container sx={{ display: 'grid' }}>
                <Grid item>
                    <Typography variant="h3">Variation</Typography>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <CustomSelect label="Select Variable" />
                    </Grid>
                </Grid>
                <Grid container sx={{ mt: 7, mb: 5.3 }}>
                    <VariantTable variantDetails={variantDetails} setVariantDetails={setVariantDetails} />
                </Grid>
            </Grid>
        </>
    );
}
