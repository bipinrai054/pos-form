// mui
import { Box, Grid, Typography } from '@mui/material';

// components
import { CustomCheckbox } from 'ui-component/CustomInput';

const SamplePage = () => (
    <Grid container sx={{ py: 15 }}>
        <Grid item xs={12} textAlign="center">
            <Typography variant="h3" gutterBottom>
                Choose Item Type
            </Typography>
            <Typography variant="subtitle1" style={{ color: '#a6a6b9' }} gutterBottom>
                Choose the type of item you want to create.
            </Typography>

            {/* custom checkbox */}
            <Box className="checkbox-container" textAlign="left" sx={{ display: 'flex', justifyContent: 'center' }} alignItems="center">
                <CustomCheckbox type="radio" label="Single" id="single" nameType="item_variant" />
                <CustomCheckbox type="radio" label="Variable" id="variant" nameType="item_variant" />
            </Box>
        </Grid>
    </Grid>
);

export default SamplePage;
