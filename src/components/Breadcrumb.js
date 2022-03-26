import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    '& .MuiToolbar-root': {
      height: '30px',
      fontSize: '16px',
      fontWeight: 'bold',
      background: '#E6E8EA',
      color: theme.palette.primary.main
    }
  },
}));

const BreadCrumb = (props) => {
  const classes = useStyles();

  console.log('props in bradcrumb', props);

  const { history, location: { pathname } } = props;
  const pathnames = pathname.split("/").filter(x => x);

  const isHome = pathname === "/app/home" ? true : false;

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar variant="dense">
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          {
            isHome ? (
              <Typography> Home </Typography>
            ) : (
                <Link onClick={() => history.push("/app/home")}>Home</Link>
              )
          }
          {
            isHome ? null :
              (
                pathnames.map((name, index) => {
                  const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                  const isLast = index === pathnames.length - 1;
                  return isLast ? (
                    <Typography key={name}>{name}</Typography>
                  ) : (
                      name === 'app' ? null :
                        <Link key={name} onClick={() => history.push(routeTo)}>
                          {name}
                        </Link>
                    );
                })
              )
          }
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(BreadCrumb)
