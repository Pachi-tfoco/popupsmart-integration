import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter">
          BRAND<span className="text-blue-600">.</span>
        </Link>

        <div className="flex gap-8 items-center">
          <Link
            href="/articles"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Articles
          </Link>
          <Link
            href="/insights"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Insights
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Portfolio
          </Link>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-slate-800 transition-transform active:scale-95">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
