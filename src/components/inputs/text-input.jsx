import * as React from 'react';
import TextField from '@material-ui/core/TextField';

export const TextInput = ({
    input,
    label,
    disabled,
    type,
    multiline,
    rowsMax
}) => {
    const {value, onChange} = input;
    return (
        <TextField
            label={label}
            value={value}
            type={type}
            onChange={onChange}
            disabled={disabled}
            multiline={multiline}
            rowsMax={rowsMax}
        />
    );
};
