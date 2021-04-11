import { Container } from 'react-bootstrap';
// eslint-disable-next-line import/no-unresolved
import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer';

export default function PageLayout({ children, className }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Container>
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className="page-footer">
          <div>
            <Footer />
          </div>
        </footer>
      </Container>
    </>
  );
}
