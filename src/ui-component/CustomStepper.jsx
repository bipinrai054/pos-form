/*eslint-disable */

import React from 'react';
// mui
import { Stepper, Step, StepLabel } from '@mui/material';

// eslint-disable-next-line
export default function CustomStepper({ activeStep, itemType }) {
    return (
        <>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel>Choose The Variant</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Item Details</StepLabel>
                </Step>

                {itemType === 'variable' && (
                    <Step>
                        <StepLabel>Variant Details</StepLabel>
                    </Step>
                )}
            </Stepper>
        </>
    );
}
