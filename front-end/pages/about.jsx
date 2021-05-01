import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import { getAllAuthors } from 'lib/api';

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  }),
);
const About = ({ className, authors }) => {
  //! const {name ,social, image, position, location } = authors;
  // console.log(authors)
  // author is all of data that you have to display
  const classes = useStyles();
  return <div className={clsx(classes.root, className)}>Yooo</div>;
};
export default About;

export async function getStaticProps({ preview = false }) {
  const authors = await getAllAuthors();
  return {
    props: {
      authors,
    },
    revalidate: 30,
  };
}
