import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";

import Newsletter from "../components/blog/Newsletter";
import RelatedPosts from "../components/blog/RelatedPosts";
import { blogs, getBlogBySlug, getRelatedBlogs } from "../data/blogs";

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) return <Navigate to="/blog" replace />;

  const currentIndex = blogs.findIndex((post) => post.slug === blog.slug);
  const previousBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;
  const relatedPosts = getRelatedBlogs(blog);
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const canonicalPath = `/blog/${blog.slug}`;
  const shareText = encodeURIComponent(blog.title);
  const shareUrl = encodeURIComponent(canonicalPath);

  return (
    <>
      <Helmet>
        <title>{blog.seoTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.keywords.join(", ")} />
        <link rel="canonical" href={canonicalPath} />
        <meta property="og:title" content={blog.seoTitle} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.seoTitle} />
        <meta name="twitter:description" content={blog.metaDescription} />
        <meta name="twitter:image" content={blog.image} />
      </Helmet>

      <article className="bg-white">
        <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <nav className="text-sm font-medium text-slate-500" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-green-700">Home</Link>
              <span className="mx-2">&gt;</span>
              <Link to="/blog" className="hover:text-green-700">Blog</Link>
              <span className="mx-2">&gt;</span>
              <span>{blog.title}</span>
            </nav>
            <span className="mt-8 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">{blog.category}</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight text-slate-900">{blog.title}</h1>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span>{blog.author}</span><span>•</span><span>{formattedDate}</span><span>•</span><span>{blog.readingTime}</span>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(280px,3fr)]">
          <div>
            <img src={blog.image} alt={blog.title} className="w-full rounded-[2rem] object-cover shadow-2xl" />

            <div className="mt-10 rounded-3xl border border-green-100 bg-green-50 p-6">
              <h2 className="text-xl font-bold text-slate-900">Table of Contents</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
                <li>Overview</li>
                <li>Key health guidance</li>
                <li>Practical steps for families</li>
                <li>When to seek professional support</li>
              </ol>
            </div>

            <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">
              {blog.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="font-bold text-slate-900">Share:</span>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Facebook</a>
              <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noreferrer" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">X / Twitter</a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noreferrer" className="rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white">LinkedIn</a>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {previousBlog && <Link to={`/blog/${previousBlog.slug}`} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 transition hover:border-green-200 hover:bg-green-50"><span className="text-sm text-slate-500">Previous Blog</span><p className="mt-2 font-bold text-slate-900">{previousBlog.title}</p></Link>}
              {nextBlog && <Link to={`/blog/${nextBlog.slug}`} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 text-right transition hover:border-green-200 hover:bg-green-50"><span className="text-sm text-slate-500">Next Blog</span><p className="mt-2 font-bold text-slate-900">{nextBlog.title}</p></Link>}
            </div>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <Newsletter />
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Article Keywords</h3>
              <div className="mt-5 flex flex-wrap gap-3">{blog.keywords.map((keyword) => <span key={keyword} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">#{keyword}</span>)}</div>
            </div>
          </aside>
        </div>
      </article>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <RelatedPosts posts={relatedPosts} />
      </div>
    </>
  );
}
