/*eslint-disable */

import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// import PaymentTab from './PaymentTab';
// import IntlTelInput from 'react-intl-tel-input';
// import 'react-intl-tel-input/dist/main.css';

import VariantDetails from '../../components/VariantDetails';
import ItemDetails from '../../components/ItemDetails';
import VariantChoice from '../../components/VariantChoice';

const steps = ['Choose the Variant', 'Item Details', 'Variant Details'];

export default function PorcessOrder() {
    const [itemType, setItemType] = React.useState('single');

    console.log(itemType);

    // const [ativeCollaps, setAtiveCollaps] = React.useState('');

    const [activeStep, setActiveStep] = React.useState(0);

    console.log(activeStep);

    const [skipped, setSkipped] = React.useState(new Set());
    const isStepOptional = (step) => {
        return step === 1;
    };
    const isStepSkipped = (step) => {
        return skipped.has(step);
    };
    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleSkip = () => {
    //     if (!isStepOptional(activeStep)) {
    //         // You probably want to guard against something like this,
    //         // it should never occur unless someone's actively trying to break something.
    //         throw new Error("You can't skip a step that isn't optional.");
    //     }
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped((prevSkipped) => {
    //         const newSkipped = new Set(prevSkipped.values());
    //         newSkipped.add(activeStep);
    //         return newSkipped;
    //     });
    // };

    // const changeCollaps = (value) => {
    //     if(ativeCollaps && ativeCollaps == value  ){
    //       setAtiveCollaps('')
    //     }else{
    //     }
    //     setAtiveCollaps(value);
    // };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };

    return (
        <Paper>
            <Box sx={{ width: '100%' }}>
                {/* <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = <Typography variant="caption">Optional</Typography>;
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                         
                        );
                    })}
                </Stepper> */}
                <Stepper activeStep={activeStep}>
                    <Step>
                        <StepLabel>Choose Variant </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Item Details</StepLabel>
                    </Step>
                    {itemType == 'single' ? null : (
                        <Step>
                            <StepLabel>Variant Details</StepLabel>
                        </Step>
                    )}
                </Stepper>

                <>
                    <TabPanel value={activeStep} index={0}>
                        <Grid container sx={{ py: 15 }}>
                            <Grid item xs={12} textAlign="center">
                                <Typography variant="h3" gutterBottom>
                                    Choose Item Type
                                </Typography>
                                <Typography variant="subtitle1" style={{ color: '#a6a6b9' }} gutterBottom>
                                    Choose the type of item you want to create.
                                </Typography>

                                {/* custom checkbox */}
                                <Box
                                    className="checkbox-container"
                                    textAlign="left"
                                    sx={{ display: 'flex', justifyContent: 'center' }}
                                    alignItems="center"
                                >
                                    {/* original */}
                                    {/* <CustomCheckbox type="radio" label="Single" id="single" nameType="item_variant" value="single" />
                    <CustomCheckbox type="radio" label="Variable" id="variant" nameType="item_variant" value="variable" /> */}

                                    {/* test checkbox */}

                                    <>
                                        <input
                                            type="radio"
                                            id="single"
                                            name="item-type"
                                            value="single"
                                            onChange={(e) => setItemType(e.target.value)}
                                        />
                                        <label htmlFor="single">
                                            <Grid container>
                                                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={2}>
                                                    {/* <AccessibilityIcon sx={{ fontSize: '42px' }} /> */}
                                                </Grid>

                                                <Grid item xs={10}>
                                                    <Typography fontWeight="fontWeightBold" fontSize="large">
                                                        Single
                                                    </Typography>
                                                    <Typography sx={{ color: '#a1a5b7' }} variant="subtitle1">
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </label>
                                    </>
                                    <>
                                        <input
                                            type="radio"
                                            id="variant"
                                            name="item-type"
                                            value="variant"
                                            onChange={(e) => setItemType(e.target.value)}
                                        />
                                        <label htmlFor="variant">
                                            <Grid container>
                                                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={2}>
                                                    {/* <AccessibilityIcon sx={{ fontSize: '42px' }} /> */}
                                                </Grid>

                                                <Grid item xs={10}>
                                                    <Typography fontWeight="fontWeightBold" fontSize="large">
                                                        Variant
                                                    </Typography>
                                                    <Typography sx={{ color: '#a1a5b7' }} variant="subtitle1">
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </label>
                                    </>
                                </Box>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={activeStep} index={1}>
                        <ItemDetails />
                    </TabPanel>

                    {itemType === 'variant' ? (
                        <TabPanel value={activeStep} index={2}>
                            <VariantDetails />
                        </TabPanel>
                    ) : null}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button color="inherit" variant="outlined" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button variant="contained" onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                        </Button>
                    </Box>
                </>
            </Box>
        </Paper>
    );
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
