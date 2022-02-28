import React, { useEffect, useState } from 'react';

// material-ui
import { Grid, Paper, Typography } from '@mui/material';

// project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

// new components
import { CustomInput, CustomSelect, CustomTextarea } from '../../../ui-component/CustomInput';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [step, setStep] = useState(1);

    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item>
                <Typography variant="h4">Dashboard / Menu / Create</Typography>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 3 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Grid container flexDirection="column" spacing={3}>
                                <Grid item>
                                    <CustomSelect />
                                </Grid>
                                <Grid item>
                                    <CustomInput type="text" placeholder="Item Name" />
                                </Grid>
                                <Grid item>
                                    <CustomInput type="number" placeholder="Alert Quantity" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container flexDirection="column" spacing={3}>
                                <Grid item>
                                    <CustomSelect />
                                </Grid>
                                <Grid item>
                                    <CustomInput type="date" />
                                </Grid>
                                <Grid item>
                                    <CustomInput type="file" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ mt: 5 }}>
                        <Grid item xs={12}>
                            <CustomTextarea placeholder="Description" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
