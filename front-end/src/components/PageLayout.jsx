import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({ children, className }) {
  return (
    <>
      <Navbar />

      <div className={`page-wrapper ${className}`}>{children}</div>

      <Footer />
    </>
  );
}
