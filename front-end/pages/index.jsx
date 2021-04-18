import { useState } from 'react';
import PageLayout from 'src/components/PageLayout';
import { getPaginatedBlogs } from 'lib/api';
import { useGetBlogsPages } from 'src/hooks/useGetBlogsPages';
import { Grid, Button } from '@material-ui/core';
import VerticalCard from 'src/components/VerticalCard';

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
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const { data, size, setSize, hitEnd } = useGetBlogsPages({ filter });

  return (
    <PageLayout>
      <Grid container justify="center">
        <Grid container item spacing={3} xs={10}>
          <BlogList data={data || [blogs]} filter={filter} />
        </Grid>
      </Grid>
      <div style={{ textAlign: 'center' }}>
        <Button disabled={hitEnd} onClick={() => setSize(size + 1)}>
          {/* {isLoadingMore ? '...' : isReachingEnd ? 'No more blogs' : 'More Blogs'} */}
          Load More
        </Button>
      </div>
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
