import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';
import React from 'react'

export default function Checkbox(props) {
    const { name, label, onChange, value, color = "primary" } = props;

    const handleCheckBoxEvent = (event) => {
        return {
            target: { name, value: event.target.checked, ...event.target }
        }
    }
    return (
        <div>
            <FormControl>
                <FormControlLabel
                    control={
                        <MuiCheckbox
                            name={name}
                            color={color}
                            checked={value}
                            onChange={e => onChange(handleCheckBoxEvent(e))}
                        />
                    }
                    label={label}
                />
            </FormControl>
        </div>
    )
};
