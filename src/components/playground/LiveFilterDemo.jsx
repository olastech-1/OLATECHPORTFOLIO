// src/components/playground/LiveFilterDemo.jsx
import { useState } from 'react';

const items = [
  {
    name: 'React',
  },
  {
    name: 'Tailwind CSS',
  },
  {
    name: 'JavaScript',
  },
  {
    name: 'Supabase',
  },
  {
    name: 'PostgreSQL',
  },
  {
    name: 'Vite',
  },
  {
    name: 'React Router',
  },
  {
    name: 'Git',
  },
];

function LiveFilterDemo() {
  const [query, setQuery] = useState('');
  const filtered = items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search my tech stack…"
        className="w-full px-4 py-2.5 rounded-xl border border-ink/15 outline-none focus:border-gold text-sm bg-paper"
      />
      <div className="flex flex-wrap gap-2 mt-4 min-h-[40px]">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <span key={item.name} className="pill">
              {item.name}
            </span>
          ))
        ) : (
          <p className="text-slate2 text-sm">No matches for "{query}".</p>
        )}
      </div>
      <p className="text-slate2 text-xs mt-4 font-mono2">
        {filtered.length} of {items.length} shown — filtered live, no page reload.
      </p>
    </div>
  );
}

export default LiveFilterDemo;
