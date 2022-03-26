import React from 'react';
import { AppBar, Tabs, Tab, makeStyles } from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';



function areEqual(prevProps, nextProps) {
    if (prevProps.value === nextProps.value) {
        return true;
    };

    return false
};

const useStyles = makeStyles(theme => ({

    'root': {
        '& .MuiAppBar-colorDefault': {
            color: 'rgba(0, 0, 0, 0.87)',
            backgroundColor: '#eee'
        },
        '& .MuiTab-textColorInherit': {
            color: "inherit",
            opacity: 1,
            fontSize: '13px'
        },
        '& .MuiTab-textColorInherit.Mui-selected': {
            fontWeight: 700,
            fontSize: '13px'
        }
    }
}))
function TabHeader({ value, handleChange, TabsList, color, highlightColor, ...otherProps }) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color={color || 'default'}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor={highlightColor || 'primary'}
                    {...otherProps}
                >
                    {
                        TabsList.map(tab => (
                            <Tab key={tab.id} label={tab.label} icon={tab.icon ? <icon /> : null} />
                        ))
                    }
                </Tabs>
            </AppBar>
        </div>
    )
};

TabHeader.propTypes = {
    TabsList: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
};

export default React.memo(withWidth()(TabHeader), areEqual);
