// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaWhatsapp, FaLocationDot } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="font-display font-bold text-2xl">
              Ola<span className="text-gold">Tech</span>
            </span>
            <p className="mt-5 text-white/50 text-sm leading-relaxed">
              Modern, responsive websites built to help small businesses grow online.
            </p>
            <div className="flex gap-4 mt-6 text-lg text-white/50">
              <a
                href="https://github.com/olastech-1"
                target="_blank"
                rel="noopener"
                className="hover:text-white"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <div className="flex flex-col gap-3 text-white/50 text-sm">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
              <Link to="/projects" className="hover:text-white">
                Projects
              </Link>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-3 text-white/50 text-sm">
              <p>Business websites</p>
              <p>Landing pages</p>
              <p>E-commerce</p>
              <p>Website redesign</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-white/50 text-sm">
              <a
                href="mailto:olatechdevelop@gmail.com"
                className="hover:text-white flex items-center gap-2"
              >
                <FaEnvelope className="text-gold w-4" />
                olatechdevelop@gmail.com
              </a>
              <a
                href="https://wa.me/2347040181204"
                className="hover:text-white flex items-center gap-2"
              >
                <FaWhatsapp className="text-teal w-4" />
                +234 704 018 1204
              </a>
              <p className="flex items-center gap-2">
                <FaLocationDot className="text-white/40 w-4" />
                Nigeria
              </p>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 OlaTech. All rights reserved.</p>
          <p>
            Designed &amp; built by <span className="text-gold font-medium">OlaTech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
