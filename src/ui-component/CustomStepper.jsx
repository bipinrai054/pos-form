/*eslint-disable */

import React from 'react';
// mui
import { Stepper, Step, StepLabel } from '@mui/material';

// eslint-disable-next-line
export default function CustomStepper({ activeStep, itemType }) {
    console.log(itemType);
    const [test, setTest] = React.useState('variant');
    return (
        <>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel>Choose The Variant</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Item Details</StepLabel>
                </Step>

                {itemType === 'variant' && (
                    <Step>
                        <StepLabel>Variant Details</StepLabel>
                    </Step>
                )}
            </Stepper>
        </>
    );
}
