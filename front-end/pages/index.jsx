import { useState } from 'react';
import PageLayout from 'src/components/PageLayout';
import { getPaginatedBlogs } from 'lib/api';
import { useGetBlogsPages } from 'src/hooks/useGetBlogsPages';
import { Grid, Typography } from '@material-ui/core';
import VerticalCard from 'src/components/VerticalCard';
import { createStyles, makeStyles } from '@material-ui/core';
import Banner from 'src/components/Banner';
import Container from '@material-ui/core/Container';
import usePosition from 'src/hooks/usePosition';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) =>
  createStyles({
    bloglist: {
      margin: theme.spacing(10, 0),
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    PageLayout: {
      position: 'relative',
    },
  }),
);

//! filter to support new feature
// eslint-disable-next-line no-unused-vars
export const BlogList = ({ data = [], filter }) => {
  return data.map((page) =>
    page.map((blog) => (
      <Grid key={blog.slug} item xs={4}>
        <VerticalCard
          author={blog.author}
          date={blog.date}
          image={blog.coverImage}
          link={{
            href: '/blogs/[slug]',
            as: `/blogs/${blog.slug}`,
          }}
          subtitle={blog.subtitle}
          title={blog.title}
        />
      </Grid>
    )),
  );
};

export default function Home({ blogs }) {
  //! filter to support new feature
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();

  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });
  const positionStore = usePosition();
  const enableFabButton = positionStore.getElementY() < -740;

  const { data, size, setSize, hitEnd } = useGetBlogsPages({ filter });

  return (
    <PageLayout className={classes.PageLayout}>
      <Banner />
      {/* <Position /> */}
      <Container>
        <Grid container className={classes.bloglist} justify="center">
          <Grid container item xs={10}>
            <Typography gutterBottom variant="h3" color="primary">
              MOST READ
            </Typography>
          </Grid>
          <Grid container item spacing={3} xs={10}>
            <BlogList data={data || [blogs]} filter={filter} />
          </Grid>
          {/* <Grid container item alignItems="center" xs={10}>
          <Button disabled={hitEnd} onClick={() => setSize(size + 1)}>
            Load More
          </Button>
        </Grid> */}
          <a href="#banner">jump link</a>
        </Grid>
      </Container>

      <Zoom timeout={200} unmountOnExit in={enableFabButton}>
        <Fab href="#banner" className={classes.fab} variant="extended">
          <NavigationIcon className={classes.extendedIcon} />
          Navigate
        </Fab>
      </Zoom>
    </PageLayout>
  );
}

//? This function is called during the build (build time)
//? Provides props to your page
//? It will create static page
export async function getStaticProps({ preview = false }) {
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });
  return {
    props: {
      blogs,
      preview,
    },
    revalidate: 30,
  };
}
