import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  spinner: {
    margin: 'auto',
    display: 'block',
    width: '120px',
    height: '120px',
  },
}));
const Spinner = () => {
  const classes = useStyles();
  return <CircularProgress disableShrink className={classes.spinner} />;
};

export default Spinner;
