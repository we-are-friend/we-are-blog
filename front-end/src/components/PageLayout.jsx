import { Container } from 'react-bootstrap';
import Navbar from './Navbar';

export default function PageLayout({ children, className }) {
  return (
    <>
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
