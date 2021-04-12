import React from 'react';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  Typography,
  Container,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';

import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    footerContainer: {
      marginTop: '115px',
      marginBottom: '40px',
    },
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
    copyRight: {
      color: '#C2C2C2',
    },

    iconContainer: {},
    socialMediaIcons: {
      // color: '#44318D',
      backgroundColor: 'red',
      // borderRadius: '50%',
    },
  }),
);
const Footer = ({ className }) => {
  const classes = useStyles();
  return (
    <footer align="center" className={clsx(classes.root, className)}>
      <Container className={classes.footerContainer}>
        <Typography align="center" className={classes.title} color="primary">
          LOGO-LOGO-LOGO
        </Typography>
        <Typography className={classes.subtitle} variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          hic.
        </Typography>

        <Typography className={classes.copyRight} variant="overline">
          &copy; {new Date().getFullYear()} We Are Friend Co. All rights
          reserved.
        </Typography>

        <div>
          <IconButton
            aria-label="delete"
            // className={classes.margin}
            className={classes.socialMediaIcons}
            color="primary"
            size="medium"
          >
            <InstagramIcon />
          </IconButton>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
