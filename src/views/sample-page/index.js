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
    <Grid container spacing={3}>
        <Grid item>
            <Typography variant="h4">Dashboard / Menu / Create</Typography>
        </Grid>

        <Grid item xs={12}>
            <Paper sx={{ height: '100%', p: 30 }}>
                <Grid container flexDirection="column" sx={{ pb: 5 }}>
                    <Typography variant="h3" gutterBottom>
                        Choose Item Type
                    </Typography>
                    <Typography variant="subtitle1" style={{ color: '#a6a6b9' }}>
                        Choose the type of item you want to create.
                    </Typography>
                </Grid>

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
