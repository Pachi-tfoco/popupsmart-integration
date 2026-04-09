import Image from "next/image";

export default function Portfolio({ params }: { params: { locale: string } }) {
  const isAr = params.locale === "ar";

  const content = {
    en: {
      heroTitle: "SELECTED WORK",
      heroDesc:
        "A curated collection of digital experiences where performance meets aesthetic. Scroll to explore recent collaborations.",
      ctaTitle: "Have a project in mind?",
      ctaBtn: "Let's Connect",
    },
    ar: {
      heroTitle: "أعمال مختارة",
      heroDesc:
        "مجموعة منسقة من التجارب الرقمية حيث يلتقي الأداء مع الجمال. تصفح لاستكشاف أحدث مشاريعنا.",
      ctaTitle: "هل لديك مشروع في بالك؟",
      ctaBtn: "تواصل معنا",
    },
  };

  const projects = [
    {
      id: 1,
      title: isAr ? "لوحة تحكم نوفا" : "Nova Fintech Dashboard",
      category: isAr ? "تصميم الواجهات وتطويرها" : "UI/UX Design & Development",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      description: isAr
        ? "نظام تتبع مالي عالي الأداء مصمم لإدارة الأصول اللامركزية."
        : "A high-performance financial tracking system built for decentralized asset management.",
      tags: ["Next.js", "Chart.js", "Tailwind"],
    },
    {
      id: 2,
      title: isAr ? "إعادة تصور التجارة الإلكترونية" : "E-Commerce Reimagined",
      category: isAr ? "هوية العلامة التجارية" : "Brand Identity",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200",
      description: isAr
        ? "حل تجارة إلكترونية يركز على سرعة تحميل فائقة وتجربة مستخدم مخصصة للهواتف."
        : "A headless commerce solution focusing on sub-second page loads and mobile-first UX.",
      tags: ["Shopify", "React", "Node.js"],
    },
    {
      id: 3,
      title: isAr ? "المصور المعماري" : "Architectural Visualizer",
      category: isAr ? "تصميم ثلاثي الأبعاد" : "3D Rendering",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      description: isAr
        ? "تجاوز حدود WebGL لعرض العقارات في بيئة غامرة بالكامل."
        : "Pushing the boundaries of WebGL to showcase real estate in a fully immersive environment.",
      tags: ["Three.js", "GSAP", "Canvas"],
    },
    {
      id: 4,
      title: isAr ? "مبادرة البيئة" : "The Green Initiative",
      category: isAr ? "غير ربحي" : "Non-Profit",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
      description: isAr
        ? "منصة قائمة على البيانات لتتبع جهود إعادة تشجير الغابات العالمية في الوقت الفعلي."
        : "A data-driven platform tracking global reforestation efforts in real-time.",
      tags: ["Data Viz", "PostgreSQL", "Next.js"],
    },
    {
      id: 5,
      title: isAr ? "تطبيق نبض المدينة" : "Urban Pulse App",
      category: isAr ? "تصميم تطبيقات الهاتف" : "Mobile Design",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      description: isAr
        ? "إعادة تعريف كيفية تفاعل سكان المدن مع أنظمة النقل العام المحلية."
        : "Redefining how city dwellers interact with local public transport systems.",
      tags: ["React Native", "Firebase", "Maps API"],
    },
  ];

  const t = isAr ? content.ar : content.en;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 italic">
          {t.heroTitle}
        </h1>
        <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
          {t.heroDesc}
        </p>
      </section>

      {/* Project List */}
      <div className="px-6 pb-24 space-y-32 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <section
            key={project.id}
            // Logic: Alternate image position on desktop, flip for RTL
            className={`group flex flex-col gap-12 items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
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
              <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
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
        <h3 className="text-2xl mb-6">{t.ctaTitle}</h3>
        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-emerald-400 transition-colors">
          {t.ctaBtn}
        </button>
      </footer>
    </main>
  );
}
