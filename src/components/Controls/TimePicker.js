import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export default function TimePicker(props) {
    const { name, label, value, onChange } = props;

    const handleDateChange = value => ({
        target: {
            name,
            value
        }
    })
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                    value={value}
                    label={label}
                    name={name}
                    onChange={date => onChange(handleDateChange(date))}
                    mask="__:__ _M"
                />
            </MuiPickersUtilsProvider>

        </div>
    )
}
