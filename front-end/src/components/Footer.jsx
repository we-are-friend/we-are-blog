import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    title: {
      marginBottom: theme.spacing(1.5),
      fontFamily: 'Barlow Condensed',
      fontSize: 36,
      fontStyle: 'normal',
      fontWeight: 800,
      lineHeight: '43.2px',
      letterSpacing: 0.25,
      //textAlign: 'left',
    },
    subtitle: {
      marginBottom: theme.spacing(2),
    },
  }),
);
const Footer = ({ className }) => {
  const classes = useStyles();
  return (
    <footer align="center" className={clsx(classes.root, className)}>
      <Typography align="center" className={classes.title} color="primary">
        LOGO-LOGO-LOGO
      </Typography>
      <Typography className={classes.subtitle} variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, hic.
      </Typography>

      <Typography variant="overline">
        &copy; {new Date().getFullYear()} We Are Friend Co. All rights reserved.
      </Typography>
    </footer>
  );
};
export default Footer;
