import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiToolbar-root': {
            height: '53px',
            fontSize: '16px',
            fontWeight: 'bold',
            background: theme.palette.accent.main,
            color: '#fff'
        }
    }
}));


export default function MatToolbar({ children, color }) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        {children}
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}
