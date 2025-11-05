const posts = [
  {
    title: 'Designing Reliable Systems with Cloud-Native Patterns',
    excerpt:
      'A practical guide to resiliency patterns — circuit breakers, bulkheads, and backpressure — in modern microservices.',
    date: 'Sep 28, 2025',
    tag: 'Architecture',
  },
  {
    title: 'Type-Safe Frontends at Scale with React & TypeScript',
    excerpt:
      'How we structure large React codebases for velocity — without sacrificing reliability or DX.',
    date: 'Sep 12, 2025',
    tag: 'Frontend',
  },
  {
    title: 'From Zero to CI/CD: Shipping Faster with Confidence',
    excerpt:
      'We break down a pragmatic pipeline blueprint that balances speed, quality, and affordability.',
    date: 'Aug 30, 2025',
    tag: 'DevOps',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Insights & Blog
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            Notes from the field on building modern, scalable software.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="relative rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 hover:-translate-y-0.5 transition-transform shadow-xl shadow-slate-900/20"
            >
              <div className="mb-3 flex items-center gap-3 text-xs text-slate-400">
                <span className="rounded-full bg-slate-900/70 px-2 py-1 ring-1 ring-slate-800">{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="text-lg font-medium text-slate-100">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{p.excerpt}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
