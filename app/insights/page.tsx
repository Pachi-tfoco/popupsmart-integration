export default function Insights() {
  const insights = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    category: i % 2 === 0 ? "Market Trend" : "Tech Spec",
    // eslint-disable-next-line react-hooks/purity
    stat: `${Math.floor(Math.random() * 100)}% Growth`,
    desc: "Analysis of user retention across distributed systems.",
  }));

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-light mb-10 tracking-tight">
          Industry <span className="font-bold text-emerald-400">Insights</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-emerald-400">
                {item.category}
              </span>
              <div className="text-3xl font-bold my-4">{item.stat}</div>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
