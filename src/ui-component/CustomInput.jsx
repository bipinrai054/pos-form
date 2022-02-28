import '../styles/CustomInput.scss';

// mui
import { Typography } from '@mui/material';

//  eslint-disable-next-line
export function CustomInput({ type, placeholder, label }) {
    return (
        <div>
            {/* eslint-disable-next-line */}
            <Typography sx={{ mt: 3, mb: 2 }}>
                <label className="test" htmlFor="input">
                    {label}
                </label>
            </Typography>
            <input id="input" type={type} placeholder={placeholder} />
        </div>
    );
}

//  eslint-disable-next-line
export function CustomSelect({ label }) {
    return (
        <div>
            <Typography sx={{ mt: 4, mb: 1 }}>
                <label className="test" htmlFor="input">
                    {label}
                </label>
            </Typography>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    );
}

//  eslint-disable-next-line
export function CustomTextarea({ placeholder }) {
    return (
        <div>
            <textarea placeholder={placeholder} rows="3" />
        </div>
    );
}
