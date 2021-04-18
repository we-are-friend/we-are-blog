import { useState } from 'react';
import PageLayout from 'src/components/PageLayout';
import { getPaginatedBlogs } from 'lib/api';
import { useGetBlogsPages } from 'src/hooks/useGetBlogsPages';
import { Grid, Button, Typography } from '@material-ui/core';
import VerticalCard from 'src/components/VerticalCard';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    bloglist: {
      margin: theme.spacing(10, 0),
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

  const { data, size, setSize, hitEnd } = useGetBlogsPages({ filter });

  return (
    <PageLayout>
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
      </Grid>
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
    revalidate: 1,
  };
}
