// src/components/playground/DemoBadge.jsx

function DemoBadge({ label = 'Interactive' }) {
  return (
    <span className="pill !bg-teal/15 !text-teal inline-flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
      {label}
    </span>
  );
}

export default DemoBadge;
