import BlogCard from "./BlogCard";

export default function BlogGrid({ blogs }) {
  if (!blogs.length) {
    return <div className="rounded-3xl bg-white p-10 text-center text-slate-600 shadow-sm">No blog posts found. Try another search or category.</div>;
  }

  return <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{blogs.map((blog) => <BlogCard key={blog.slug} blog={blog} />)}</div>;
}
