import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from '@material-ui/core';

export default function PageLayout({ children, className }) {
  return (
    <>
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
