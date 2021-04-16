import PageLayout from 'src/components/PageLayout';
import { getAllBlogs } from 'lib/api';
import useGetBlogs from 'src/hooks/useGetBlogs';
import { Grid } from '@material-ui/core';
import VerticalCard from 'src/components/VerticalCard';

export default function Home({ blogs: initialData }) {
  const { data: blogs } = useGetBlogs(initialData);

  return (
    <PageLayout>
      <Grid container justify="center">
        <Grid container item spacing={3} xs={10}>
          {blogs.map((blog) => (
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
          ))}
        </Grid>
      </Grid>
    </PageLayout>
  );
}

//? This function is called during the build (build time)
//? Provides props to your page
//? It will create static page
export async function getStaticProps() {
  const blogs = await getAllBlogs({ offset: 0 });
  return {
    props: {
      blogs,
    },
  };
}
