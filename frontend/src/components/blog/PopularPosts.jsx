import { Link } from "react-router-dom";

export default function PopularPosts({ posts, title = "Popular Posts" }) {
  return (
    <aside className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <div className="mt-5 space-y-5">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="flex gap-4 group">
            <img src={post.image} alt={post.title} className="h-16 w-16 rounded-2xl object-cover" loading="lazy" />
            <div>
              <p className="font-semibold leading-snug text-slate-800 group-hover:text-green-700">{post.title}</p>
              <p className="mt-1 text-sm text-slate-500">{post.readingTime}</p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
