import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Nova Fintech Dashboard",
      category: "UI/UX Design & Development",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      description:
        "A high-performance financial tracking system built for decentralized asset management.",
      tags: ["Next.js", "Chart.js", "Tailwind"],
    },
    {
      id: 2,
      title: "E-Commerce Reimagined",
      category: "Brand Identity",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200",
      description:
        "A headless commerce solution focusing on sub-second page loads and mobile-first UX.",
      tags: ["Shopify", "React", "Node.js"],
    },
    {
      id: 3,
      title: "Architectural Visualizer",
      category: "3D Rendering",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      description:
        "Pushing the boundaries of WebGL to showcase real estate in a fully immersive environment.",
      tags: ["Three.js", "GSAP", "Canvas"],
    },
    {
      id: 4,
      title: "The Green Initiative",
      category: "Non-Profit",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
      description:
        "A data-driven platform tracking global reforestation efforts in real-time.",
      tags: ["Data Viz", "PostgreSQL", "Next.js"],
    },
    {
      id: 5,
      title: "Urban Pulse App",
      category: "Mobile Design",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      description:
        "Redefining how city dwellers interact with local public transport systems.",
      tags: ["React Native", "Firebase", "Maps API"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-6xl font-extrabold tracking-tighter mb-4 italic">
          SELECTED WORK
        </h1>
        <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
          A curated collection of digital experiences where performance meets
          aesthetic. Scroll to explore recent collaborations.
        </p>
      </section>

      {/* Project List */}
      <div className="px-6 pb-24 space-y-32 max-w-6xl mx-auto">
        {projects.map((project) => (
          <section
            key={project.id}
            className="group flex flex-col md:flex-row gap-12 items-center"
          >
            {/* Image Container */}
            <div className="relative w-full md:w-3/5 aspect-video overflow-hidden rounded-sm bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-2/5">
              <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">
                {project.category}
              </span>
              <h2 className="text-4xl font-bold mb-6 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h2>
              <p className="text-zinc-400 mb-8 text-lg">
                {project.description}
              </p>
              <div className="flex gap-3 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-zinc-700 rounded-full text-xs text-zinc-500 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <footer className="py-24 border-t border-zinc-900 text-center">
        <h3 className="text-2xl mb-6">Have a project in mind?</h3>
        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-emerald-400 transition-colors">
          Let&apos;s Connect
        </button>
      </footer>
    </main>
  );
}
