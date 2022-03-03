/*eslint-disable */

import '../styles/CustomInput.scss';

// mui
import { Typography, Grid } from '@mui/material';

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

// mui icon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

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
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
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

export function CustomCheckbox({ label, nameType, id }) {
    return (
        <>
            <input type="radio" id={id} name={nameType} />
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
