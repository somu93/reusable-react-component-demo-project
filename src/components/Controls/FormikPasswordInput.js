import { FormControl, FormGroup, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { getIn } from 'formik';
import React, { useState } from 'react';


const useStyles = makeStyles(theme => ({
    validationMessage: {
        fontSize: '0.75rem',
        color: '#f44336',
        marginLeft: '14px',
        marginRight: '14px'
    }
}))

export default function FormikPasswordInput(props) {

    const classes = useStyles();

    const { label, form: { setFieldValue, touched, errors, handleBlur }, field: { value, name }, helperText = "", variant, ...rest } = props;

    const fieldError = getIn(errors, name);
    const showError = getIn(touched, name) && !!fieldError;

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div>
            <FormGroup>
                <FormControl variant={variant} style={{ 'marginBottom': '5px' }}>
                    <InputLabel htmlFor="outlined-adornment-password" style={{ 'color': showError ? '#f44336' : '' }}>{label}</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={value}
                        onBlur={handleBlur}
                        onChange={e => {
                            setFieldValue(name, e.target.value);
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                        error={showError}
                        {...rest}
                    />
                    {
                        showError ? <span className={classes.validationMessage}>{fieldError}</span> : helperText
                    }
                </FormControl>
            </FormGroup>
        </div>
    )
};



