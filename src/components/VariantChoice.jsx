// mui
import { Grid, Typography, Paper } from '@mui/material';

// components
import { CustomCheckbox } from 'ui-component/CustomInput';

const SamplePage = () => (
    <Grid
        container
        spacing={3}
        // sx={{ px: 58, py: 10 }}
        sx={{ py: 13.1, px: 45 }}
    >
        <Grid item xs={12}>
            <Paper sx={{ p: 5 }}>
                <Typography variant="h3" gutterBottom>
                    Choose Item Type
                </Typography>
                <Typography variant="subtitle1" style={{ color: '#a6a6b9' }} gutterBottom>
                    Choose the type of item you want to create.
                </Typography>

                <Grid container spacing={5}>
                    <Grid item>
                        <CustomCheckbox type="radio" label="Variant" id="variant" htmlfor="variant" nameType="item_variant" />
                    </Grid>

                    <Grid item>
                        <CustomCheckbox type="radio" label="Non-variant" id="non_variant" htmlfor="non_variant" nameType="item_variant" />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
);

export default SamplePage;
