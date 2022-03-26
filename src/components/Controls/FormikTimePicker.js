import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { getIn } from 'formik';

export default function FormikTimePicker(props) {
    const { label, form: { touched, errors, setFieldValue }, field: { value, name, onBlur: fieldOnBlur }, onBlur, minDate, maxDate, children, helperText = "", ...rest } = props;

    const fieldError = getIn(errors, name);
    const showError = getIn(touched, name) && !!fieldError;

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                    value={value}
                    label={label}
                    name={name}
                    onBlur={
                        onBlur ??
                        function (e) {
                            fieldOnBlur(e ?? name);
                        }
                    }
                    onChange={value => {
                        setFieldValue(name, value);
                    }}
                    error={showError}
                    mask="__:__ _M"
                    helperText={showError ? fieldError : helperText}
                    {...rest}
                />
            </MuiPickersUtilsProvider>

        </div>
    )
}

