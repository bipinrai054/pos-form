import '../styles/CustomInput.scss';

// mui
import { Typography } from '@mui/material';

export function CustomInput({ type, placeholder, label }) {
    return (
        <div>
            <Typography sx={{ mt: 3, mb: 2 }}>
                <label className="test" htmlFor="input">
                    {label}
                </label>
            </Typography>
            <input id="input" type={type} placeholder={placeholder} />
        </div>
    );
}

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

export function CustomTextarea({ placeholder }) {
    return (
        <div>
            <textarea placeholder={placeholder} rows="4" cols="25" />
        </div>
    );
}
