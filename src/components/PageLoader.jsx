// src/components/PageLoader.jsx

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center pt-24">
      <div className="flex items-center gap-3 text-slate2">
        <span className="w-2 h-2 rounded-full bg-gold animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-2 h-2 rounded-full bg-gold animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-2 h-2 rounded-full bg-gold animate-bounce"></span>
        <span className="font-mono2 text-xs ml-2">Loading playground…</span>
      </div>
    </div>
  );
}

export default PageLoader;
