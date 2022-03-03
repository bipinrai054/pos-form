import '../styles/CustomInput.scss';

// mui
import { Typography } from '@mui/material';

//  eslint-disable-next-line
export function CustomInput({ type, placeholder, label, value }) {
    return (
        <div>
            {/* eslint-disable-next-line */}
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

//  eslint-disable-next-line
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

//  eslint-disable-next-line
export function CustomTextarea({ placeholder }) {
    return (
        <div>
            <textarea placeholder={placeholder} rows="3" />
        </div>
    );
}

// eslint-disable-next-line
export function CustomCheckbox({ label, nameType, id, htmlfor }) {
    return (
        <div className="check-container">
            <input id={id} className="btn-check" type="radio" name={nameType} />

            <label className="test" htmlFor={htmlfor}>
                {label}
            </label>
        </div>
    );
}
