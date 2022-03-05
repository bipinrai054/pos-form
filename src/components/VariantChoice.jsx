/*eslint-disable */

import React from 'react';

// mui
import { Box, Grid, Typography } from '@mui/material';

// components
import { CustomCheckbox } from 'ui-component/CustomInput';

// mui icons
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const SamplePage = () => {
    const [itemType, setItemType] = React.useState('');
    console.log(itemType);

    return (
        <Grid container sx={{ py: 15 }}>
            <Grid item xs={12} textAlign="center">
                <Typography variant="h3" gutterBottom>
                    Choose Item Type
                </Typography>
                <Typography variant="subtitle1" style={{ color: '#a6a6b9' }} gutterBottom>
                    Choose the type of item you want to create.
                </Typography>

                {/* custom checkbox */}
                <Box className="checkbox-container" textAlign="left" sx={{ display: 'flex', justifyContent: 'center' }} alignItems="center">
                    {/* original */}
                    {/* <CustomCheckbox type="radio" label="Single" id="single" nameType="item_variant" value="single" />
                    <CustomCheckbox type="radio" label="Variable" id="variant" nameType="item_variant" value="variable" /> */}

                    {/* test checkbox */}

                    <>
                        <input type="radio" id="single" name="item-type" value="single" onChange={(e) => setItemType(e.target.value)} />
                        <label htmlFor="single">
                            <Grid container>
                                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={2}>
                                    <AccessibilityIcon sx={{ fontSize: '42px' }} />
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
                        <input type="radio" id="variant" name="item-type" value="variant" onChange={(e) => setItemType(e.target.value)} />
                        <label htmlFor="variant">
                            <Grid container>
                                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={2}>
                                    <AccessibilityIcon sx={{ fontSize: '42px' }} />
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
    );
};

export default SamplePage;
