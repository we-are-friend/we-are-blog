import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import RouterLink from './RouterLink';
import VerticalLine from './VerticalLine';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color: theme.palette.primary.contrastText,
    fontFamily: 'Barlow',
    fontWeight: 800,
    fontSize: '24px',
    lineHeight: '28.8px',
  },
  toolbar: {
    [theme.breakpoints.up('sm')]: {
      height: 56,
      padding: 0,
    },
    [theme.breakpoints.up('md')]: {
      height: 73,
      padding: 0,
    },
    [theme.breakpoints.up('lg')]: {
      height: 96,
      padding: 0,
    },
  },
  navbarText: {
    color: theme.palette.primary.contrastText,
    fontFamily: 'Barlow',
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '1.5px',
    outline: 'none',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  search: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',

    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    '& input::placeholder': {
      ...theme.typography.caption,
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    ...theme.typography.caption,
    [theme.breakpoints.up('sm')]: {
      width: 150,
      '&:focus': {
        width: 160,
      },
    },
  },
  placeholderFont: {},
}));

const navContent = [
  { content: 'HOME', link: '/' },
  { content: 'ABOUT', link: '/About' },
  { content: 'STORYTELLER', link: '/About' },
  { content: 'CHAPTER', link: '/About' },
  { content: 'CONTACT', link: '/About' },
];

const BlogNavbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container>
        <Toolbar className={classes.toolbar} variant="dense">
          <Typography className={classes.title}>LOGO-LOGO-LOGO</Typography>

          <Box flexGrow={1} />

          <div className={classes.sectionMobile}>
            <IconButton aria-label="menu" color="inherit">
              <MenuIcon />
            </IconButton>
          </div>

          <div className={classes.sectionDesktop}>
            {React.Children.toArray(
              navContent?.map(({ link, content }) => (
                // eslint-disable-next-line react/jsx-key
                <RouterLink to={link}>
                  <Button
                    className={classes.navbarText}
                    color="primary"
                    variant="text"
                  >
                    {content}
                  </Button>
                </RouterLink>
              )),
            )}

            <VerticalLine />

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{
                  'aria-label': 'search',
                  className: classes.placeholderFont,
                }}
                placeholder="SEARCH HERE ..."
              />
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default BlogNavbar;
