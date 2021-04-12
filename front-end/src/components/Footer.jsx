import React from 'react';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  Typography,
  Container,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import { red } from '@material-ui/core/colors';

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
    /*
    bgSocailMedia: {
      backgroundColor: '#44318D',
      opacity: 0.1,
    },
    */
    socialMediaIcons: {
      color: '#44318D',
      //color: theme.primary,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
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
          <InstagramIcon className={classes.socialMediaIcons} />
          <GitHubIcon className={classes.socialMediaIcons} />
          <TwitterIcon className={classes.socialMediaIcons} />
          <YouTubeIcon className={classes.socialMediaIcons} />
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
