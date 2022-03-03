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

    const prevStep = (e) => {
        e.preventDefault();
        if (activeStep <= 0) {
            setActiveStep(0);
        } else {
            setActiveStep((currentStep) => currentStep - 1);
        }
    };

    const nextStep = (e) => {
        e.preventDefault();

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
                            <CustomStepper activeStep={activeStep} />
                        </Grid>
                    </Grid>

                    {(() => {
                        switch (activeStep) {
                            case 0:
                                return <VariantChoice />;
                            case 1:
                                return <ItemDetails />;
                            case 2:
                                return <VariantDetails />;
                            case 3:
                                return <Typography variant="h5">Thank you for your order!</Typography>;
                            default:
                                return <Typography variant="h5">Thank you for your order!</Typography>;
                        }
                    })()}
                    <Grid container sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item>
                            {activeStep === 0 ? null : (
                                <Button className="form-btn" variant="outlined" startIcon={<ArrowBack />} onClick={prevStep}>
                                    Previous
                                </Button>
                            )}
                        </Grid>
                        <Grid item>
                            {activeStep === 4 ? null : (
                                <Button className="form-btn" variant="contained" endIcon={<ArrowForward />} onClick={nextStep}>
                                    {activeStep === 3 ? 'Submit' : 'Next'}
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
