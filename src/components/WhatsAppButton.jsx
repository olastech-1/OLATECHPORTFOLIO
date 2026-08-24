// src/components/WhatsAppButton.jsx
import { FaWhatsapp } from 'react-icons/fa6';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2347040181204?text=Hi%20OlaTech%2C%20I%27d%20like%20to%20discuss%20a%20project"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full fab-wa text-white shadow-2xl transition"
    >
      <span className="absolute inset-0 rounded-full bg-teal/50 animate-ping"></span>
      <FaWhatsapp className="text-xl sm:text-2xl relative" />
    </a>
  );
}

export default WhatsAppButton;
