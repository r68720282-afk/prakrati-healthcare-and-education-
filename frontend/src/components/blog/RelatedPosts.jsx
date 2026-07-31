import BlogCard from "./BlogCard";

export default function RelatedPosts({ posts }) {
  if (!posts.length) return null;

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-slate-900">Related Posts</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {posts.map((post) => <BlogCard key={post.slug} blog={post} />)}
      </div>
    </section>
  );
}
