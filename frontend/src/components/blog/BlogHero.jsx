import { Link } from "react-router-dom";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
      <img src="/blog/blog-hero-healthcare.svg" alt="Healthcare awareness" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        <nav className="mb-6 text-sm font-medium text-green-100" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2">&gt;</span>
          <span>Blog</span>
        </nav>
        <h1 className="text-4xl md:text-6xl font-bold">Our Blog</h1>
        <p className="mt-5 text-lg md:text-xl text-green-50">Health tips, education, wellness and awareness articles.</p>
      </div>
    </section>
  );
}
