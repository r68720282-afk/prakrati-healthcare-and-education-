import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <Link to={`/blog/${blog.slug}`} className="block overflow-hidden">
        <img src={blog.image} alt={blog.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span className="rounded-full bg-green-100 px-3 py-1 font-semibold text-green-700">{blog.category}</span>
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{blog.readingTime}</span>
        </div>
        <h2 className="mt-4 text-2xl font-bold leading-snug text-slate-900 group-hover:text-green-700">
          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h2>
        <p className="mt-3 text-slate-600 leading-relaxed">{blog.excerpt}</p>
        <Link to={`/blog/${blog.slug}`} className="mt-6 inline-flex rounded-xl bg-green-600 px-5 py-3 font-semibold text-white shadow-lg shadow-green-100 transition hover:bg-green-700">
          Read More
        </Link>
      </div>
    </article>
  );
}
