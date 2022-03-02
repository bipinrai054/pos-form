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
import CustomStepper from '../../../ui-component/CustomStepper';
import VariantChoice from '../../../components/VariantChoice';
import ItemDetails from '../../../components/ItemDetails';
import VariantDetails from '../../../components/VariantDetails';

// ==============================|| DEFAULT DASHBOARD ||============================== //
// eslint-disable-next-line
const Dashboard = () => {
    // const [step, setStep] = useState(1);

    // const [isLoading, setLoading] = useState(true);
    // useEffect(() => {
    //     setLoading(false);
    // }, []);

    const [activeStep, setActiveStep] = React.useState(0);

    // eslint-disable-next-line
    const prevStep = () => {
        if (activeStep <= 0) {
            setActiveStep(0);
        } else {
            setActiveStep((currentStep) => currentStep - 1);
        }
    };

    // eslint-disable-next-line
    const nextStep = () => {
        if (activeStep >= 4) {
            setActiveStep(4);
        } else {
            setActiveStep((currentStep) => currentStep + 1);
        }
    };

    console.log(activeStep);

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

                    {/* item details start */}
                    {/* <ItemDetails /> */}
                    {/* item details end */}

                    {/* variant choosing component start */}
                    {/* <VariantChoice /> */}
                    {/* varaint choosing component end */}

                    <VariantDetails />

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
