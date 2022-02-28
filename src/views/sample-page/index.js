// material-ui
// import { Typography } from '@mui/material';

// project imports
// import MainCard from 'ui-component/cards/MainCard';

// mui
import { Grid, Typography, Paper } from '@mui/material';

// components
import { CustomCheckbox } from '../../ui-component/CustomInput';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <Grid container>
        <Grid item>
            <Typography variant="h4">Dashboard / Menu / Create</Typography>
        </Grid>

        <Grid item xs={12} sx={{ height: '100%' }}>
            <Paper>
                <Typography variant="h3">Choose Item Type</Typography>

                <Grid container>
                    <Grid item xs={6}>
                        <CustomCheckbox type="radio" label="Variant" nameType="item_variant" />
                    </Grid>

                    <Grid item xs={6}>
                        <CustomCheckbox type="radio" label="Non-variant" nameType="item_variant" />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
);

export default SamplePage;
