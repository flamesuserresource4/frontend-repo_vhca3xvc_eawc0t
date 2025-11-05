import { Rocket, Code, Shield, Cloud } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description:
      'End-to-end web and mobile solutions tailored to your business goals with scalable, cloud-native architectures.',
    icon: Code,
  },
  {
    title: 'Product Acceleration',
    description:
      'From MVP to enterprise scale — we embed with your team to ship polished, high-impact features faster.',
    icon: Rocket,
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Automated CI/CD, observability, and cost-optimized infrastructure on AWS, GCP, or Azure.',
    icon: Cloud,
  },
  {
    title: 'Security & Compliance',
    description:
      'Security audits, hardened pipelines, and compliance-ready foundations for regulated industries.',
    icon: Shield,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            Modern engineering for ambitious teams — built with TypeScript, React, Python, and cloud-native best practices.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-xl shadow-slate-900/20 hover:shadow-slate-900/40 transition-shadow"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/60 ring-1 ring-slate-800">
                <Icon className="h-6 w-6 text-sky-300" />
              </div>
              <h3 className="text-lg font-medium text-slate-100">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
