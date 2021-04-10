import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import Head from 'next/head';

export default function PageLayout({ children, className }) {
  return (
    <>
      <Head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&family=Barlow:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Container>
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className="page-footer">
          <div>
            <a href="#">Footer</a>
          </div>
        </footer>
      </Container>
    </>
  );
}
