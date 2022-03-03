/*eslint-disable */

// mui
import { Grid, Typography } from '@mui/material';

export default () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Grid container sx={{ display: 'grid' }} spacing={3}>
                        <Grid item>
                            <Typography fontWeight="bold">Item Type</Typography>
                            <Typography>Single</Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight="bold">Category</Typography>
                            <Typography>Snacks</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container sx={{ display: 'grid' }} spacing={3}>
                        <Grid item>
                            <Typography fontWeight="bold">Item Type</Typography>
                            <Typography>Single</Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight="bold">Category</Typography>
                            <Typography>Snacks</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
