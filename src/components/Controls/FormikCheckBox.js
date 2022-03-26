import { FormControlLabel, Checkbox as MuiCheckbox, FormControl, FormHelperText } from '@material-ui/core';
import { ErrorMessage, getIn, useField } from 'formik';
import React from 'react'

export default function FormikCheckBox({ helperText = "", ...props }) {
    const [field, meta] = useField({
        name: props.name,
        type: 'checkbox',
        value: props.value
    });

    const fieldError = getIn(meta, props.name);
    const showError = getIn(meta, 'touched') && !!fieldError;

    return (
        <FormControl error={showError}>
            <FormControlLabel
                control={<MuiCheckbox {...props} {...field} />}
                label={props.label}
            />
            <FormHelperText>{showError ? <ErrorMessage name={props.name} /> : helperText}</FormHelperText>
        </FormControl>

    );
};
