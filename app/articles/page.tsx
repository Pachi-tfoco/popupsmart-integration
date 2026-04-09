export default function Articles() {
  const posts = [
    {
      id: 1,
      date: "March 24, 2026",
      readTime: "8 min read",
      title: "The Shift to AI-Native Interfaces",
      excerpt:
        "How generative UI is changing the way we think about component libraries and user intent in modern web applications.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      category: "Design",
    },
    {
      id: 2,
      date: "March 18, 2026",
      readTime: "12 min read",
      title: "Edge Computing: Beyond the Hype",
      excerpt:
        "A deep dive into deploying Next.js applications at the edge to achieve near-zero latency for global users.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      category: "Engineering",
    },
    {
      id: 3,
      date: "March 10, 2026",
      readTime: "5 min read",
      title: "Minimalism in a World of Noise",
      excerpt:
        "Why the most successful digital products of 2026 are stripping away features in favor of core utility and speed.",
      image:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200",
      category: "Product",
    },
    {
      id: 4,
      date: "March 02, 2026",
      readTime: "15 min read",
      title: "The Future of CSS: Beyond Tailwind?",
      excerpt:
        "Exploring upcoming browser APIs that might change how we style applications and whether utility classes will remain king.",
      image:
        "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=1200",
      category: "Development",
    },
    {
      id: 5,
      date: "Feb 24, 2026",
      readTime: "10 min read",
      title: "Building for Sustainability",
      excerpt:
        "Reducing the carbon footprint of your digital infrastructure through efficient code and green hosting providers.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
      category: "Ethical Tech",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto border-b border-zinc-900">
        <h1 className="text-6xl font-extrabold tracking-tighter mb-4 italic">
          THOUGHTS & LOGS
        </h1>
        <p className="text-zinc-500 text-lg">
          Exploring the intersection of code, design, and future tech.
        </p>
      </section>

      {/* Articles List */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="flex flex-col gap-24">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              {/* Date/Category Sidebar */}
              <div className="md:col-span-2 text-zinc-500 pt-1">
                <p className="text-xs font-mono uppercase tracking-widest mb-2">
                  {post.date}
                </p>
                <p className="text-xs text-emerald-500 font-bold uppercase">
                  {post.category}
                </p>
              </div>

              {/* Main Content */}
              <div className="md:col-span-6">
                <h2 className="text-3xl font-bold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm font-medium text-zinc-500">
                  <span>{post.readTime}</span>
                  <span className="w-8 h-[1px] bg-zinc-800"></span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300 text-white">
                    Read Article →
                  </span>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="md:col-span-4 aspect-[4/3] overflow-hidden rounded-sm bg-zinc-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter / Footer */}
      <section className="bg-zinc-950 py-24 px-6 border-t border-zinc-900">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Stay in the loop</h3>
          <p className="text-zinc-500 mb-8">
            Receive a monthly summary of our latest insights and technical deep
            dives.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="email@example.com"
              className="flex-1 bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-md focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button className="bg-white text-black px-6 py-3 rounded-md font-bold hover:bg-emerald-400 transition-colors">
              Join
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
