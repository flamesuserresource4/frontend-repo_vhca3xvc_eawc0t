import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'They delivered our MVP in record time without compromising quality. The engineering rigor is outstanding.',
    author: 'Amelia Hart',
    role: 'VP Product, NovaHealth',
  },
  {
    quote:
      'A trusted partner from strategy to execution. Our deployment pipeline and reliability improved 10x.',
    author: 'David Kim',
    role: 'CTO, FinEdge',
  },
  {
    quote:
      'Elegant architecture, clear communication, and results that moved our metrics. Highly recommended.',
    author: 'Priya Nair',
    role: 'Head of Engineering, OrbitAI',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            We partner with startups and enterprises to build reliable, scalable products.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="relative rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-xl shadow-slate-900/20"
            >
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-slate-300">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">
                <span className="font-medium text-slate-200">{t.author}</span> — {t.role}
              </figcaption>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
