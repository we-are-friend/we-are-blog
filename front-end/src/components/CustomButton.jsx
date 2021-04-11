import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      // fontSize: theme.spacing(1),
      color: theme.palette.primary.main,
    },
  }),
);

const CustomButton = ({ className, children }) => {
  const classes = useStyles();
  return (
    <Button className={clsx(classes.root, className)} variant="contained">
      {children}
    </Button>
  );
};
export default CustomButton;
