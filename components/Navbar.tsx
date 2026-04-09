"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Navbar() {
  const params = useParams();
  const locale = params.locale || "en";
  const isAr = locale === "ar";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-900"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-bold text-xl text-white">
          BRAND<span className="text-emerald-500">.</span>
        </Link>

        <div className="flex gap-8 items-center">
          <Link
            href={`/${locale}/articles`}
            className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-emerald-400"
          >
            {isAr ? "مقالات" : "Articles"}
          </Link>
          <Link
            href={`/${locale}/insights`}
            className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-emerald-400"
          >
            {isAr ? "رؤى" : "Insights"}
          </Link>
          <Link
            href={`/${locale}/portfolio`}
            className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-emerald-400"
          >
            {isAr ? "أعمالنا" : "Portfolio"}
          </Link>

          {/* Locale Switcher */}
          <Link
            href={isAr ? "/en/portfolio" : "/ar/portfolio"}
            className="text-[10px] border border-zinc-700 px-2 py-1 rounded text-zinc-500 hover:bg-zinc-800"
          >
            {isAr ? "EN" : "AR"}
          </Link>
        </div>
      </div>
    </nav>
  );
}
