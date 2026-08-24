// src/components/Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgressBar from './ScrollProgressBar';
import BackToTopButton from './BackToTopButton';
import WhatsAppButton from './WhatsAppButton';

function Layout({ children }) {
  return (
    <div className="bg-paper text-body overflow-x-hidden selection:bg-gold selection:text-ink">
      <ScrollProgressBar />
      <Navbar />

      <main>{children}</main>

      <Footer />
      <BackToTopButton />
      <WhatsAppButton />
    </div>
  );
}

export default Layout;
