import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FaTruck } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "150px",
    maxWidth: "150px",
    margin: theme.spacing(1),
    marginRight: '15px'
  },
  arrowRoot: {
    flexDirection: "column",
    display: "flex",
    fontSize: "17px"
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: '-10px',
    fontSize: '13px',
    fontWeight: "bold",
    height: "15px"
  },
  arrow: {
    display: "flex",
  },
  line: {
    marginTop: '10px',
    background: '#3f51b5',
    height: '20px',
    float: 'left',
    textAlign: 'center',
    flexGrow: 1
  },
  value: {
    color: 'white',
    fontSize: '14px'
  },
  point: {
    width: '0px',
    height: '0px',
    borderTop: '20px solid transparent',
    borderBottom: '20px solid transparent',
    borderLeft: '30px solid #3f51b5',
    float: 'right'
  },
  icon: {
    display: "flex",
    alignItems: "center",
    paddingRight: theme.spacing(1)
  },
  time: {
    display: "flex",
    justifyContent: 'flex-start'
  },
  startTime: {
    transform: "rotate(90deg)",
    marginTop: "20px",
    marginLeft: "-20px"
  },
  timeDiff: {
    display: "flex",
    flexDirection: "column",
    fontSize: '14px'
    // color: "red",
  }
}));

const Arrow = ({ value, first, last }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.arrowRoot}>
        <span className={classes.title}>{value.title}</span>
        <div className={classes.arrow}>
          <div className={classes.icon}><FaTruck style={{ fontSize: 30, color: '#9c27b0' }} /></div>
          <div className={classes.line}>
            <span className={classes.value}>
              {value.scheduledTime}
            </span>
          </div>
          <div className={classes.point}></div>
        </div>
        <div className={classes.time}>
          <span className={classes.startTime}>{value.startTime}</span>
          <div className={classes.timeDiff} style={value.onTime ? { color: "green" } : { color: "red" }}>
            <span>{value.timeTaken} {value.message}</span>
            {/* <span>{value.message}</span> */}
          </div>
        </div>
      </div>
    </div>

  )
};

export default Arrow;
