/* eslint-disable*/

import React from 'react';
// mui
import { Grid, Paper, Typography, Button } from '@mui/material';

// mui-icons
import { ArrowBack, ArrowForward } from '@mui/icons-material';

// new components
import CustomStepper from '../../../ui-component/CustomStepper';
import VariantDetails from '../../../components/VariantDetails';
import VariantChoice from '../../../components/VariantChoice';
import ItemDetails from '../../../components/ItemDetails';

// ==============================|| DEFAULT DASHBOARD ||============================== //
const Dashboard = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const prevStep = () => {
        if (activeStep <= 0) {
            setActiveStep(0);
        } else {
            setActiveStep((currentStep) => currentStep - 1);
        }
    };

    const nextStep = () => {
        if (activeStep >= 4) {
            setActiveStep(4);
        } else {
            setActiveStep((currentStep) => currentStep + 1);
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item>
                <Typography variant="h4">Dashboard / Menu / Create</Typography>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 3 }}>
                    <Grid sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
                        <Grid item xs={8}>
                            <CustomStepper
                            //  activeStep={activeStep}
                            />
                        </Grid>
                    </Grid>

                    {activeStep === 0 ? (
                        <ItemDetails />
                    ) : activeStep === 1 ? (
                        <VariantChoice />
                    ) : activeStep === 2 ? (
                        <VariantDetails />
                    ) : null}

                    <Grid container sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item>
                            <Button
                                className="form-btn"
                                variant="outlined"
                                startIcon={<ArrowBack />}
                                // onClick={prevStep}
                            >
                                Previous
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                className="form-btn"
                                variant="contained"
                                endIcon={<ArrowForward />}
                                // onClick={nextStep}
                            >
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
