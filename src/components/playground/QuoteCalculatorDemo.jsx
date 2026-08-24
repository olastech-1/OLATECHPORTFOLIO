// src/components/playground/QuoteCalculatorDemo.jsx
import { useState } from 'react';

const addOns = [
  {
    id: 'pages',
    label: 'Extra pages (x3)',
    cost: 90,
  },
  {
    id: 'ecommerce',
    label: 'E-commerce / cart',
    cost: 200,
  },
  {
    id: 'cms',
    label: 'Editable content (CMS)',
    cost: 120,
  },
  {
    id: 'seo',
    label: 'SEO setup',
    cost: 60,
  },
];

const basePrice = 100;

function QuoteCalculatorDemo() {
  const [selected, setSelected] = useState([]);

  function toggle(id) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  }
  const total =
    basePrice + addOns.filter((a) => selected.includes(a.id)).reduce((sum, a) => sum + a.cost, 0);

  return (
    <div>
      <p className="text-slate2 text-sm">
        Base site: <span className="font-semibold text-body">${basePrice}</span>
      </p>
      <div className="space-y-2 mt-4">
        {addOns.map((addOn) => (
          <label
            key={addOn.id}
            className="flex items-center justify-between gap-3 text-sm cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selected.includes(addOn.id)}
                onChange={() => toggle(addOn.id)}
                className="accent-gold w-4 h-4"
              />
              {addOn.label}
            </span>
            <span className="text-slate2 font-mono2 text-xs">+${addOn.cost}</span>
          </label>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6 pt-4 border-t border-ink/10">
        <span className="font-semibold text-sm">Estimated total</span>
        <span className="font-display font-bold text-2xl text-gold">${total}</span>
      </div>
      <p className="text-slate2 text-xs mt-3 font-mono2">
        Rough ballpark only — recalculates instantly as you check boxes.
      </p>
    </div>
  );
}

export default QuoteCalculatorDemo;
