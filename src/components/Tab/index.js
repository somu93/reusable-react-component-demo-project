import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TabHeader from './TabHeader';






const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MatTab(props) {

  const { TabsHeaderList, children, Tabchange } = props;

  const classes = useStyles();
  const [value, setValue] = useState(0);




  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (Tabchange) Tabchange(newValue);
  };

  return (
    <div className={classes.root}>
      <TabHeader value={value} handleChange={handleChange} TabsList={TabsHeaderList} />
      {
        children ? children({ value }) : null
      }
    </div>
  );

};

MatTab.propTypes = {
  TabsHeaderList: PropTypes.array.isRequired,
  // children: PropTypes.any.isRequired,
  Tabchange: PropTypes.func
}



