/* eslint-disable*/

import React from 'react';
// mui
import { Grid, Paper, Typography, Button, Box } from '@mui/material';

// mui-icons
import { ArrowBack, ArrowForward } from '@mui/icons-material';

// prime-react
import { Toast } from 'primereact/toast';

// new components
import CustomStepper from '../../../ui-component/CustomStepper';
import VariantDetails from '../../../components/VariantDetails';
import VariantChoice from '../../../components/VariantChoice';
import ItemDetails from '../../../components/ItemDetails';

// ui-components
import TabPanel from '../../../ui-component/TabPanel';

// ==============================|| DEFAULT DASHBOARD ||============================== //
const Dashboard = () => {
    // state
    // item type choice component
    const [itemType, setItemType] = React.useState('single');
    // item details component
    const [itemDetails, setItemDetails] = React.useState({
        category: '',
        brand: '',
        itemName: '',
        expiryDate: '',
        alertQuantity: 1,
        image: '',
        unit: '',
        priceIncTax: 1,
        priceExcTax: 1,
        ticket: 'KOT',
        description: ''
    });
    // variant details component
    const [variantName, setVariantName] = React.useState('');
    const [variantDetails, setVariantDetails] = React.useState({
        varItemName: '',
        varUnit: 1,
        varPriceIncTax: 1,
        varPriceExcTax: 1,
        varImage: '',
        varTicket: 'KOT'
    });

    // stepper
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

    // toast
    const toast = React.useRef(null);

    function showBottomLeft() {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Order submitted', life: 3000 });
    }

    // test
    // function TabPanel(props) {
    //     const { children, value, index, ...other } = props;
    //     return (
    //         <div
    //             role="tabpanel"
    //             hidden={value !== index}
    //             id={`simple-tabpanel-${index}`}
    //             aria-labelledby={`simple-tab-${index}`}
    //             {...other}
    //         >
    //             {value === index && (
    //                 // <Box sx={{ p: 3 }}>
    //                 <Typography>{children}</Typography>
    //                 // </Box>
    //             )}
    //         </div>
    //     );
    // }

    return (
        <Grid container spacing={3}>
            <Grid item>
                <Typography variant="h4">Dashboard / Menu / Create</Typography>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 3 }}>
                    <Grid sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
                        <Grid item xs={8}>
                            <CustomStepper itemType={itemType} activeStep={activeStep} />
                        </Grid>
                    </Grid>

                    {/* original */}
                    {/* {(() => {
                        switch (activeStep) {
                            case 0:
                                return <VariantChoice setItemType={setItemType} />;
                            case 1:
                                return <ItemDetails />;
                            case 2:
                                return <VariantDetails />;
                        }
                    })()} */}

                    {/* test */}
                    <TabPanel value={activeStep} index={0}>
                        <VariantChoice setItemType={setItemType} />
                    </TabPanel>
                    <TabPanel value={activeStep} index={1}>
                        <ItemDetails />
                    </TabPanel>

                    {itemType === 'variable' && (
                        <TabPanel value={activeStep} index={2}>
                            <VariantDetails />
                        </TabPanel>
                    )}

                    <Grid container sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item>
                            {activeStep === 0 ? null : (
                                <Button className="form-btn" variant="outlined" startIcon={<ArrowBack />} onClick={prevStep}>
                                    Previous
                                </Button>
                            )}
                        </Grid>
                        <Grid item>
                            {activeStep === 3 ? null : (
                                <Button
                                    className="form-btn"
                                    variant="contained"
                                    endIcon={<ArrowForward />}
                                    // onClick={nextStep}
                                    onClick={activeStep === 2 ? showBottomLeft : nextStep}
                                >
                                    {activeStep === 2 ? 'Submit' : 'Next'}
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

            <Toast ref={toast} position="bottom-right" />
        </Grid>
    );
};

export default Dashboard;
