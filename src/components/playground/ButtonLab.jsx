// src/components/playground/ButtonLab.jsx
import { useState } from 'react';

const sizes = {
  sm: '!py-2 !px-4 text-xs',
  md: '!py-3 !px-6 text-sm',
  lg: '!py-4 !px-8 text-base',
};

const variants = {
  gold: 'btn-gold',
  outline: 'btn-outline',
  ghostDark: 'btn-ghost-dark',
};

function ButtonLab() {
  const [size, setSize] = useState('md');
  const [variant, setVariant] = useState('gold');
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div
        className={`rounded-xl flex items-center justify-center p-10 mb-6 ${variant === 'ghostDark' ? 'bg-ink' : 'bg-paperdim'}`}
      >
        <button
          disabled={disabled || loading}
          className={`btn ${variants[variant]} ${sizes[size]} disabled:opacity-50`}
        >
          {loading ? 'Loading…' : 'Start a project'}
        </button>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <p className="font-medium mb-2">Size</p>
          <div className="flex gap-2">
            {Object.keys(sizes).map((key) => (
              <button
                key={key}
                onClick={() => setSize(key)}
                className={`filter-btn ${size === key ? 'is-active' : ''}`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-medium mb-2">Variant</p>
          <div className="flex gap-2">
            {Object.keys(variants).map((key) => (
              <button
                key={key}
                onClick={() => setVariant(key)}
                className={`filter-btn ${variant === key ? 'is-active' : ''}`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-6 pt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
              className="accent-gold w-4 h-4"
            />
            Disabled
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={loading}
              onChange={(e) => setLoading(e.target.checked)}
              className="accent-gold w-4 h-4"
            />
            Loading
          </label>
        </div>
      </div>
    </div>
  );
}

export default ButtonLab;
