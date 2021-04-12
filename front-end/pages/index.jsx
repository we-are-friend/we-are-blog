import { Row, Col } from 'react-bootstrap';
import PageLayout from 'src/components/PageLayout';
import CardItem from 'src/components/CardItem';

import { getAllBlogs } from 'lib/api';
import useGetBlogs from 'src/hooks/useGetBlogs';

export default function Home({ blogs: initialData }) {
  const { data: blogs } = useGetBlogs(initialData);

  return (
    <PageLayout>
      <Row className="mb-5">
        {blogs.map((blog) => (
          <Col key={blog.slug} md="4">
            <CardItem
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
          </Col>
        ))}
      </Row>
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
