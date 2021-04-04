// import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RouterLink from './RouterLink';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.grey[400],
  },
}));

const BlogNavbar = () => {
  const classes = useStyles();
  return (
    // <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
    //   <Navbar.Brand className="fj-navbar-brand">
    //     <Link href="/">
    //       <a>We-are-blog</a>
    //     </Link>
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="ml-auto">
    //       <Nav.Link
    //         as={() => (
    //           <Link href="/">
    //             <a className="fj-navbar-item fj-navbar-link">Home</a>
    //           </Link>
    //         )}
    //       />
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <RouterLink to="/">
          <Button color="inherit" variant="outlined">
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
          </Button>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default BlogNavbar;
