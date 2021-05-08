import PageLayout from 'src/components/PageLayout';
import { getBlogBySlug, getAllBlogs, urlFor } from 'lib/api';
import { Row, Col } from 'react-bootstrap';
import BlogHeader from 'src/components/BlogHeader';
import BlogContent from 'src/components/BlogContent';
import Container from '@material-ui/core/Container';

const BlogDetail = ({ blog }) => {
  return (
    <PageLayout>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <BlogHeader
              author={blog.author}
              coverImage={urlFor(blog.coverImage).height(600).url()}
              date={blog.date}
              subtitle={blog.subtitle}
              title={blog.title}
            />
            <hr />
            <BlogContent content={blog.content} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const blog = await getBlogBySlug(params.slug, preview);
  return {
    props: { blog, preview },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  return {
    paths: blogs?.map((b) => ({ params: { slug: b.slug } })),
    fallback: false,
  };
}

export default BlogDetail;
