import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="font-bold text-xl tracking-tighter text-white"
        >
          BRAND<span className="text-emerald-500">.</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          <Link
            href="/articles"
            className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            Articles
          </Link>
          <Link
            href="/insights"
            className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            Insights
          </Link>
          <Link
            href="/portfolio"
            className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            Portfolio
          </Link>

          {/* Action Button */}
          <button className="ml-4 bg-white text-black px-5 py-1.5 rounded-full text-xs font-bold hover:bg-emerald-400 transition-all active:scale-95">
            LET&apos;S TALK
          </button>
        </div>
      </div>
    </nav>
  );
}
