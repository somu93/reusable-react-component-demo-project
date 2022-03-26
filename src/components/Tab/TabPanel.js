import React from 'react'
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        '& .MuiGrid-root': {
            marginTop: '0px'
        }
    }
}));



export default function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            className={classes.root}
            {...other}
        >
            {value === index && (
                children ? children : null
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
