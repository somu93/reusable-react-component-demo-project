import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

export default function useForms(initialValue) {
    const [values, setValues] = useState(initialValue);

    const handelInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    return {
        values,
        setValues,
        handelInputChange
    }
};

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            margin: theme.spacing(1)
        }
    }
}))

export const Form = ({ children }) => {
    const classes = useStyles();
    return (
        <form noValidate autoComplete="off" className={classes.root}>
            {children}
        </form>
    )
}
