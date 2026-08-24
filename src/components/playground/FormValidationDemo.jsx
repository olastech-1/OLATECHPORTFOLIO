// src/components/playground/FormValidationDemo.jsx
import { useState } from 'react';
import { FaCheck, FaXmark } from 'react-icons/fa6';

function FormValidationDemo() {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const isValid = /^\S+@\S+\.\S+$/.test(email);

  return (
    <div>
      <label className="font-medium text-sm" htmlFor="demo-email">
        Email address
      </label>
      <div className="relative mt-2">
        <input
          id="demo-email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="you@email.com"
          className={`w-full px-4 py-2.5 pr-10 rounded-xl border outline-none text-sm bg-paper ${touched && email ? (isValid ? 'border-teal' : 'border-red-400') : 'border-ink/15 focus:border-gold'}`}
        />
        {touched && email && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2">
            {isValid ? (
              <FaCheck className="text-teal text-sm" />
            ) : (
              <FaXmark className="text-red-400 text-sm" />
            )}
          </span>
        )}
      </div>
      {touched && email && !isValid && (
        <p className="text-red-500 text-xs mt-2">That doesn't look like a valid email.</p>
      )}
      {touched && isValid && <p className="text-teal text-xs mt-2">Looks good.</p>}
      <p className="text-slate2 text-xs mt-4 font-mono2">
        Validated on every keystroke after the first blur — same logic as the real Contact page.
      </p>
    </div>
  );
}

export default FormValidationDemo;
