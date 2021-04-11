import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import PageLayout from 'src/components/PageLayout';
import Banner from 'src/components/Banner';
import CustomButton from 'src/components/CustomButton';

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  }),
);
const About = ({ className }) => {
  const classes = useStyles();
  return (
    <PageLayout>
      <div className={clsx(classes.root, className)}>
        About we-are-friend
        <Banner />
        <CustomButton>Hi</CustomButton>
      </div>
    </PageLayout>
  );
};
export default About;
