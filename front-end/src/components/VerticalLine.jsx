import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderLeft: `1px solid ${theme.palette.primary.contrastText}`,
      height: theme.spacing(4.5),
      margin: theme.spacing(0, 1),
    },
  }),
);
const VerticalLine = ({ className }) => {
  const classes = useStyles();
  return <div className={clsx(classes.root, className)} />;
};
export default VerticalLine;
