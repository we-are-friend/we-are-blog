import React from 'react';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import { createStyles, makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RouterLink from 'src/components/RouterLink';
import { navContent } from 'src/config';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 1,
      width: 250,
      display: 'flex',
      flexDirection: 'column',
    },
    list: {
      flexGrow: 1,
    },
  }),
);

const MenuList = ({ className, onMenuClick }) => {
  const classes = useStyles();

  const handleClick = () => {
    onMenuClick && onMenuClick();
  };
  return (
    <div className={clsx(classes.root, className)} role="presentation">
      <List className={classes.list}>
        {React.Children.toArray(
          navContent?.map(({ link, content }) => (
            // eslint-disable-next-line react/jsx-key
            <RouterLink href={link} onClick={handleClick}>
              <ListItem button>
                <ListItemText primary={content} />
              </ListItem>
            </RouterLink>
          )),
        )}
      </List>
    </div>
  );
};

export default MenuList;
