import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from 'next/link';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0, 2),
    },
  }),
);
const AuthorSocialMedia = ({ className, social }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      {social.linkedin && (
        <Link href={social.github} passHref={true}>
          <IconButton color="primary" size="small">
            <LinkedInIcon />
          </IconButton>
        </Link>
      )}
      {social.github && (
        <Link href={social.github} passHref={true}>
          <IconButton color="primary" size="small">
            <GitHubIcon />
          </IconButton>
        </Link>
      )}
    </div>
  );
};
export default AuthorSocialMedia;
