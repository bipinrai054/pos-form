export function CustomInput({ type, placeholder }) {
    return (
        <div>
            <input type={type} placeholder={placeholder} />
        </div>
    );
}

export function CustomSelect() {
    return (
        <div>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    );
}

export function CustomTextarea() {
    return (
        <div>
            <textarea rows="4" col="4" />
        </div>
    );
}
