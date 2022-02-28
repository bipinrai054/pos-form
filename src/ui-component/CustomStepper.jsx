import React from 'react';

// mui
import { Stepper, Step, StepLabel } from '@mui/material';

// eslint-disable-next-line
export default function CustomStepper({ activeStep }) {
    const [
        showVariantDetails
        //  setShowVariantDetails
    ] = React.useState(true);

    return (
        <>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel> Item Details</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Choose The Variant</StepLabel>
                </Step>

                {showVariantDetails ? (
                    <Step>
                        <StepLabel>Variant Details</StepLabel>
                    </Step>
                ) : null}
                <Step>
                    <StepLabel>Completed</StepLabel>
                </Step>
            </Stepper>
        </>
    );
}
