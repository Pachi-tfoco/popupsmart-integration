export default async function Insights({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Unwrapping the params Promise for Next.js 15+
  const { locale } = await params;
  const isAr = locale === "ar";

  const content = {
    en: {
      title: "Industry",
      subtitle: "Insights",
      data: [
        {
          category: "Market Trend",
          stat: "84% Adoption",
          desc: "Enterprise migration to AI-native cloud infrastructure in Q1 2026.",
        },
        {
          category: "Tech Spec",
          stat: "1.2s Load Time",
          desc: "Average improvement in LCP using distributed edge compute nodes.",
        },
        {
          category: "User Data",
          stat: "+40% Retention",
          desc: "Analysis of user loyalty across localized digital experiences.",
        },
        {
          category: "Growth",
          stat: "2.5x Velocity",
          desc: "Year-over-year increase in cross-platform deployment speed.",
        },
        {
          category: "Security",
          stat: "Zero Breach",
          desc: "Efficiency of biometric authentication in decentralized systems.",
        },
        {
          category: "Eco Tech",
          stat: "-30% Carbon",
          desc: "Reduction in server energy consumption via green code optimization.",
        },
      ],
    },
    ar: {
      title: "رؤى",
      subtitle: "الصناعة",
      data: [
        {
          category: "توجه السوق",
          stat: "84% اعتماد",
          desc: "هجرة الشركات إلى البنية التحتية السحابية الأصلية للذكاء الاصطناعي.",
        },
        {
          category: "مواصفات تقنية",
          stat: "1.2 ثانية",
          desc: "متوسط التحسين في سرعة تحميل الصفحة باستخدام حوسبة الحافة.",
        },
        {
          category: "بيانات المستخدم",
          stat: "+40% استبقاء",
          desc: "تحليل ولاء المستخدم عبر التجارب الرقمية المحلية.",
        },
        {
          category: "النمو",
          stat: "2.5x سرعة",
          desc: "زيادة سنوية في سرعة النشر عبر المنصات المختلفة.",
        },
        {
          category: "الأمن",
          stat: "صفر خروقات",
          desc: "كفاءة المصادقة البيومترية في الأنظمة اللامركزية.",
        },
        {
          category: "تقنية خضراء",
          stat: "-30% كربون",
          desc: "تقليل استهلاك طاقة الخادم من خلال تحسين الأكواد البرمجية.",
        },
      ],
    },
  };

  const t = isAr ? content.ar : content.en;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tighter italic">
          {isAr ? (
            <>
              {t.title} <span className="text-emerald-500">{t.subtitle}</span>
            </>
          ) : (
            <>
              {t.title} <span className="text-emerald-500">{t.subtitle}</span>
            </>
          )}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapping through 12 items (repeating the data twice to ensure scrolling) */}
          {[...t.data, ...t.data].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-emerald-500 transition-all duration-500 group"
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-500">
                {item.category}
              </span>
              <div className="text-4xl font-bold my-6 tracking-tight group-hover:translate-x-1 transition-transform">
                {item.stat}
              </div>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
