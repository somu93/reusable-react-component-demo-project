import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export default function DateTimePicker(props) {
    const { name, label, value, onChange, minDate, format = "yyyy/MM/dd hh:mm a" } = props;

    const handleDateChange = value => ({
        target: {
            name,
            value
        }
    })
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDateTimePicker
                    value={value}
                    label={label}
                    name={name}
                    minDate={minDate ? new Date(minDate) : null}
                    onChange={date => onChange(handleDateChange(date))}
                    format={format}
                />
            </MuiPickersUtilsProvider>

        </div>
    )
};
