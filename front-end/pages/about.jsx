import React from 'react';
import { getAllAuthors } from 'lib/api';
import PageLayout from 'src/components/PageLayout';
import {
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import AuthorVerticalCard from 'src/components/AuthorVerticalCard';
import Container from '@material-ui/core/Container';
import AuthorHorizontalCard from 'src/components/AuthorHorizontalCard';

const useStyles = makeStyles((theme) =>
  createStyles({
    bloglist: {
      margin: theme.spacing(5, 0),
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(10, 0),
      },
    },
    PageLayout: {
      position: 'relative',
    },
    loadmore: {
      margin: theme.spacing(3, 0),
    },
  }),
);

export const BlogList = ({ data = [], smUp }) => {
  return data.map((author) => (
    <Grid key={author.name} item md={4} sm={6} xs={12}>
      {smUp ? (
        <AuthorVerticalCard
          caption={author.location}
          image={author.avatar}
          social={author.social}
          subtitle={author.position}
          title={author.name}
        />
      ) : (
        <AuthorHorizontalCard
          caption={author.location}
          image={author.avatar}
          social={author.social}
          subtitle={author.position}
          title={author.name}
        />
      )}
    </Grid>
  ));
};

const About = ({ className, authors }) => {
  //! const {name ,social, image, position, location } = authors;
  const classes = useStyles();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <PageLayout className={classes.PageLayout}>
      {/* <Position /> */}
      <Container>
        <Grid container className={classes.bloglist} justify="center">
          <Grid container item xs={12}>
            <Typography
              gutterBottom
              color="primary"
              variant={smUp ? 'h3' : 'h5'}
            >
              About us
            </Typography>
          </Grid>
          <Grid
            container
            item
            alignItems="center"
            spacing={smUp ? 3 : 2}
            xs={12}
          >
            <BlogList data={authors} smUp={smUp} />
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
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
