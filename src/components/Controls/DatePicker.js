import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export default function DatePicker(props) {
    const { name, label, value, onChange, minDate, maxDate, format = "MM/dd/yyyy" } = props;

    const handleDateChange = value => ({
        target: {
            name,
            value
        }
    })
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    value={value}
                    label={label}
                    name={name}
                    onChange={date => onChange(handleDateChange(date))}
                    minDate={() => minDate ? new Date(minDate) : null}
                    maxDate={() => maxDate ? new Date(maxDate) : null}
                    format={format}

                />
            </MuiPickersUtilsProvider>

        </div>
    )
}
