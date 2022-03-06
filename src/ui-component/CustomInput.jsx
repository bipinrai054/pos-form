/*eslint-disable */

import React from 'react';

import '../styles/CustomInput.scss';

// mui
import { Typography, Grid, Box, Button } from '@mui/material';

// mui icon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

export function CustomInput({ type, placeholder, label, value }) {
    return (
        <div>
            <Typography sx={{ mt: 3, mb: 1 }}>
                {label && (
                    <label className="test" htmlFor="input">
                        {label}
                    </label>
                )}
            </Typography>
            <input id="input" type={type} placeholder={placeholder} value={value} />
        </div>
    );
}

export function CustomSelect({ label }) {
    return (
        <div>
            <Typography sx={{ mt: 3, mb: 1 }}>
                {label && (
                    <label className="test" htmlFor="select">
                        {label}
                    </label>
                )}
            </Typography>
            <select id="select">
                <option value="volvo">PS4</option>
                <option value="saab">Nintendo Switch</option>
                <option value="opel">Xbox One X</option>
                <option value="audi">Google Stadia</option>
            </select>
        </div>
    );
}

export function CustomTextarea({ placeholder }) {
    return (
        <div>
            <textarea placeholder={placeholder} rows="3" />
        </div>
    );
}

export function CustomCheckbox({ label, nameType, id, value, setItemType }) {
    return (
        <>
            <input type="radio" id={id} name={nameType} value={value} onChange={(e) => setItemType(e.target.value)} />
            <label htmlFor={id}>
                <Grid container>
                    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={2}>
                        {label == 'Single' ? (
                            <AccessibilityIcon sx={{ fontSize: '42px' }} />
                        ) : (
                            <ShoppingCartIcon sx={{ fontSize: '42px' }} />
                        )}
                    </Grid>

                    <Grid item xs={10}>
                        <Typography fontWeight="fontWeightBold" fontSize="large">
                            {label}
                        </Typography>
                        <Typography sx={{ color: '#a1a5b7' }} variant="subtitle1">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </Typography>
                    </Grid>
                </Grid>
            </label>
        </>
    );
}
