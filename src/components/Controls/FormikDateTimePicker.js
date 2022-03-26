import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { getIn } from 'formik';

export default function FormikDateTimePicker(props) {
    const { label, form: { touched, errors, setFieldValue }, field: { value, name, onBlur: fieldOnBlur }, onBlur, minDate, maxDate, format = "yyyy/MM/dd hh:mm a", children, helperText = "", ...rest } = props;

    const fieldError = getIn(errors, name);
    const showError = getIn(touched, name) && !!fieldError;

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDateTimePicker
                    value={value}
                    label={label}
                    name={name}
                    minDate={() => minDate ? new Date(minDate) : null}
                    maxDate={() => maxDate ? new Date(maxDate) : null}
                    format={format}
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
                    helperText={showError ? fieldError : helperText}
                    {...rest}
                />
            </MuiPickersUtilsProvider>

        </div>
    )
};
