import React from 'react'
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio, FormHelperText } from '@material-ui/core';
import { ErrorMessage, getIn } from 'formik';

export default function FormikRadioGroup(props) {

    const { form: { setFieldValue, touched, errors, handleBlur }, field: { value, name }, label, items, disabled, helperText = "", ...rest } = props;

    const fieldError = getIn(errors, name);
    const showError = getIn(touched, name) && !!fieldError;

    return (
        <FormControl error={showError}>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onBlur={handleBlur}
                onChange={e => {
                    console.log('selected value', e.target.value);
                    setFieldValue(name, e.target.value);
                }}
                {...rest}
            >
                {
                    items.map(
                        item => (
                            <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.label} disabled={disabled} />
                        )
                    )
                }
            </MuiRadioGroup>
            <FormHelperText>{showError ? <ErrorMessage name={name} /> : helperText}</FormHelperText>

        </FormControl>
    )
}