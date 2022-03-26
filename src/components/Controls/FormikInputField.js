import { FormGroup, TextField } from '@material-ui/core'
import { ErrorMessage, getIn } from 'formik';
import React from 'react'

export default function FormikInputField(props) {
    const { label, form: { setFieldValue, touched, errors, handleBlur }, field: { value, name }, helperText = "", ...rest } = props;

    const fieldError = getIn(errors, name);
    const showError = getIn(touched, name) && !!fieldError;

    return (
        <div>
            <FormGroup>
                <TextField
                    label={label}
                    value={value}
                    name={name}
                    onBlur={handleBlur}
                    onChange={e => {
                        setFieldValue(name, e.target.value);
                    }}
                    error={showError}
                    helperText={showError ? <ErrorMessage name={name} /> : helperText}
                    {...rest}
                />
            </FormGroup>


        </div>
    )
};



