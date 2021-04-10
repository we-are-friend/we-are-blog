import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  }),
);
const Footer = ({ className }) => {
  const classes = useStyles();
  return (
    <footer className={clsx(classes.root, className)}>
      <a href="#">Footer</a>
    </footer>
  );
};
export default Footer;
