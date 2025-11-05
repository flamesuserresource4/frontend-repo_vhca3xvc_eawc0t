import Spline from '@splinetool/react-spline';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-slate-100 font-semibold tracking-tight">
          SilverWave Labs
        </a>
        <nav className="hidden gap-8 md:flex">
          <a href="#services" className="text-slate-300 hover:text-sky-300 transition">Services</a>
          <a href="#testimonials" className="text-slate-300 hover:text-sky-300 transition">Testimonials</a>
          <a href="#blog" className="text-slate-300 hover:text-sky-300 transition">Blog</a>
          <a href="#contact" className="text-slate-900 bg-sky-300 hover:bg-sky-200 rounded-md px-3 py-1.5 font-medium transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
            Futuristic • Reliable • Scalable
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
            Modern software for teams that move fast — and ship with confidence
          </h1>
          <p className="mt-4 max-w-xl text-slate-400">
            We design and build secure, cloud-native products. From MVP to enterprise scale, our team delivers impact with craftsmanship.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-2.5 font-medium text-slate-900 hover:opacity-95 transition">
              Start a project
            </a>
            <a href="#services" className="rounded-lg border border-slate-800 bg-slate-900/60 px-5 py-2.5 font-medium text-slate-200 hover:border-slate-700 transition">
              Explore services
            </a>
          </div>
        </div>
        <div className="relative h-[460px] w-full rounded-2xl border border-slate-800 bg-slate-900/40 shadow-[0_0_80px_-20px] shadow-sky-500/20">
          <Spline
            scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-slate-950/0 via-slate-950/0 to-slate-950/20" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} SilverWave Labs. All rights reserved.</p>
        <div className="text-sm text-slate-500">
          Built with a modern tech stack • Dark blue & silver theme
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
