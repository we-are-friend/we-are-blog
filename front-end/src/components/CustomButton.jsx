import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import RouterLink from './RouterLink';

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  }),
);

const CustomButton = ({ className, link, children, ...rest }) => {
  const classes = useStyles();
  return (
    <RouterLink as={link?.as || '/'} href={link?.href || '/'}>
      <Button
        className={clsx(classes.root, className)}
        color="primary"
        variant="contained"
        {...rest}
      >
        {children || 'we-are-friend-button'}
      </Button>
    </RouterLink>
  );
};
export default CustomButton;
