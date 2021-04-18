import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import MenuList from './MenuList';

const useStyles = makeStyles(() => ({
  root: {},
  drawerContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  menuList: {
    flexGrow: 1,
  },
}));

const SideBar = ({ className, onMenuClick }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((state) => !state);
    onMenuClick && onMenuClick();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="topbar-menu"
        className={clsx(classes.root, className)}
        color="inherit"
        edge="start"
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <div className={classes.drawerContent}>
          <MenuList className={classes.menuList} onMenuClick={handleClose} />
        </div>
      </Drawer>
    </>
  );
};

export default SideBar;
