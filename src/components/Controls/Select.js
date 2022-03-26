import { FormControl, InputLabel, makeStyles, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    menuPaper: {
        maxHeight: 200
    }
}));

export default function Select(props) {
    const { name, label, id, value, onChange, options } = props;
    const classes = useStyles();

    return (
        <div>
            <FormControl>
                <InputLabel id="">{label}</InputLabel>
                <MuiSelect
                    label={label}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    MenuProps={{ classes: { paper: classes.menuPaper } }}
                >
                    <MenuItem value=''>Select {label}</MenuItem>
                    {
                        options && options.map((option) => (<MenuItem value={option.id} key={option.id}>{option.label}</MenuItem>))
                    }
                </MuiSelect>
            </FormControl>
        </div>
    )
}
