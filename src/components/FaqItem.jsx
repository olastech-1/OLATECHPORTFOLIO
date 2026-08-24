// src/components/FaqItem.jsx
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chrome p-6">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center font-semibold text-left"
      >
        <span>{question}</span>
        <FaPlus className={`text-gold transition-transform ${isOpen ? 'rotate-45' : ''}`} />
      </button>

      {isOpen && <p className="text-slate2 text-sm mt-4 leading-relaxed">{answer}</p>}
    </div>
  );
}

export default FaqItem;
