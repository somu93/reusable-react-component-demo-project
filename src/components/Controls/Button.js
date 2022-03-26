import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5),
    },
    label: {
        textTransform: 'none'
    }
}))

export default function Button(props) {

    const classes = useStyles();

    const { text, color = "default", size = "medium", variant = "contained", onClick, disabled = false, disableElevation = true, type = "button", children, ...other } = props;

    return (
        <MuiButton
            color={color}
            size={size}
            variant={variant}
            onClick={onClick ? onClick : null}
            classes={{ root: classes.root, label: classes.label }}
            disabled={disabled}
            disableElevation={disableElevation}
            type={type}
            {...other}
        >
            {children ? children : text}
        </MuiButton>
    )
}
