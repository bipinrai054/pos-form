import React from 'react';
// mui
import { Grid, Paper, Typography, Button } from '@mui/material';

// mui-icons
import { ArrowBack, ArrowForward } from '@mui/icons-material';

// project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
// import { gridSpacing } from 'store/constant';

// new components
import { CustomInput, CustomSelect, CustomTextarea } from '../../../ui-component/CustomInput';
import CustomStepper from '../../../ui-component/CustomStepper';

// ==============================|| DEFAULT DASHBOARD ||============================== //
// eslint-disable-next-line
const Dashboard = () => {
    // const [step, setStep] = useState(1);

    // const [isLoading, setLoading] = useState(true);
    // useEffect(() => {
    //     setLoading(false);
    // }, []);

    const [activeStep, setActiveStep] = React.useState(0);

    const prevStep = () => setActiveStep((currentStep) => currentStep - 1);
    const nextStep = () => setActiveStep((currentStep) => currentStep + 1);

    return (
        <Grid container spacing={3}>
            <Grid item>
                <Typography variant="h4">Dashboard / Menu / Create</Typography>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 3 }}>
                    <Grid sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
                        <Grid item xs={8}>
                            <CustomStepper activeStep={activeStep} />
                        </Grid>
                    </Grid>

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

                    <Grid container sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item>
                            <Button className="form-btn" variant="outlined" startIcon={<ArrowBack />} onClick={prevStep}>
                                Previous
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className="form-btn" variant="contained" endIcon={<ArrowForward />} onClick={nextStep}>
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
