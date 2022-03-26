import { FormControl, FormHelperText, InputLabel, makeStyles, MenuItem, Select as MuiSelect } from '@material-ui/core';
import { ErrorMessage, getIn } from 'formik';
import React from 'react'


const useStyles = makeStyles((theme) => ({
    menuPaper: {
        maxHeight: 200
    }
}));

export default function FormikSelectGroup(props) {
    const { form: { setFieldValue, touched, errors, handleBlur }, field: { value, name }, label, id, options, helperText = "", ...rest } = props;

    const fieldError = getIn(errors, name);
    const showError = getIn(touched, name) && !!fieldError;

    const classes = useStyles();


    return (
        <>
            <FormControl error={showError}>
                <InputLabel>{label}</InputLabel>
                <MuiSelect
                    label={label}
                    id={id}
                    name={name}
                    value={value}
                    onBlur={handleBlur}
                    onChange={e => {
                        setFieldValue(name, e.target.value);
                    }}
                    MenuProps={{ classes: { paper: classes.menuPaper } }}
                    {...rest}
                >
                    <MenuItem value=''>Select {label}</MenuItem>
                    {
                        options && options.map((option) => (<MenuItem value={option.id} key={option.id}>{option.label}</MenuItem>))
                    }
                </MuiSelect>
                <FormHelperText>{showError ? <ErrorMessage name={name} /> : helperText}</FormHelperText>
            </FormControl>

        </>
    )
}
