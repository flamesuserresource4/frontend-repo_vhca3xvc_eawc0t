import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    // In a real app, send to backend. For now, just simulate.
    setStatus('Sending...');
    setTimeout(() => {
      // Basic front-end validation
      if (!payload.name || !payload.email || !payload.message) {
        setStatus('Please fill in all fields.');
        return;
      }
      setStatus('Thanks! Your message has been sent.');
      e.currentTarget.reset();
    }, 800);
  }

  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Let’s Talk
          </h2>
          <p className="mt-3 text-slate-400">
            Tell us about your project, and we’ll get back within one business day.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl shadow-slate-900/20 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-slate-300">Name</label>
              <input
                name="name"
                className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="jane@company.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-300">Message</label>
            <textarea
              name="message"
              rows={5}
              className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="What can we help you build?"
            />
          </div>
          <div className="mt-6 flex items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-2.5 font-medium text-slate-900 transition hover:opacity-95"
            >
              Send Message
            </button>
            <span className="text-sm text-slate-400">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
