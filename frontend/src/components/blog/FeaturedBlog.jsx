import { Link } from "react-router-dom";

export default function FeaturedBlog({ blog }) {
  if (!blog) return null;
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <section className="grid gap-8 overflow-hidden rounded-[2rem] bg-white shadow-xl border border-green-100 lg:grid-cols-2">
      <img src={blog.image} alt={blog.title} className="h-full min-h-96 w-full object-cover" />
      <div className="p-8 md:p-12 flex flex-col justify-center">
        <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-bold uppercase tracking-wide text-green-700">Featured Article</span>
        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900">{blog.title}</h2>
        <p className="mt-4 text-lg text-slate-600">{blog.excerpt}</p>
        <div className="mt-5 text-sm text-slate-500">{blog.author} • {formattedDate} • {blog.readingTime}</div>
        <Link to={`/blog/${blog.slug}`} className="mt-8 w-fit rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-lg shadow-green-100 transition hover:bg-green-700">Read Featured Blog</Link>
      </div>
    </section>
  );
}
