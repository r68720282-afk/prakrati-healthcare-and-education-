import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const filteredBlogs = useMemo(() => {
    if (!search.trim()) return blogs;

    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const featuredBlog =
    blogs.find((blog) => blog.featured) || blogs[0];

  const latestBlogs = filteredBlogs.filter(
    (blog) => blog.id !== featuredBlog.id
  );

  const categories = [...new Set(blogs.map((b) => b.category))];

  return (
    <div className="bg-slate-50">

      {/* Hero */}

      <section
        className="relative h-[380px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/blog/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-green-900/70" />

        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div>

            <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-white text-sm tracking-wider uppercase">
              Prakrati Healthcare & Education
            </span>

            <h1 className="mt-6 text-5xl font-bold text-white">
              Our Blog
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-green-100">
              Health Tips, Wellness, Nutrition,
              Healthcare Awareness and Education
              Articles for Everyone.
            </p>

            <div className="mt-8 text-green-100">
              Home /
              <span className="font-semibold text-white">
                {" "}
                Blog
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Main */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left */}

          <div className="lg:col-span-2">

            {/* Search */}

            <input
              type="text"
              placeholder="Search health articles..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="mb-10 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-green-600"
            />

            {/* Featured */}

            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="h-96 w-full object-cover"
              />

              <div className="p-8">

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  Featured
                </span>

                <h2 className="mt-5 text-4xl font-bold text-slate-800">
                  {featuredBlog.title}
                </h2>

                <p className="mt-5 text-slate-600 leading-8">
                  {featuredBlog.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
                  <span>{featuredBlog.date}</span>
                  <span>{featuredBlog.readingTime}</span>
                  <span>{featuredBlog.author}</span>
                </div>

                <Link
                  to={`/blog/${featuredBlog.slug}`}
                  className="mt-8 inline-block rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
                >
                  Read Full Article →
                </Link>

              </div>

            </div>

            {/* Latest */}

            <div className="mt-14">

              <h2 className="mb-8 text-3xl font-bold text-slate-800">
                Latest Articles
              </h2>

              <div className="grid md:grid-cols-2 gap-8">

                {latestBlogs.map((blog) => (

                  <div
                    key={blog.id}
                    className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-56 w-full object-cover"
                    />

                    <div className="p-6">

                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        {blog.category}
                      </span>

                      <h3 className="mt-4 text-2xl font-bold text-slate-800">
                        {blog.title}
                      </h3>

                      <p className="mt-4 text-slate-600 leading-7">
                        {blog.excerpt}
                      </p>

                      <div className="mt-5 flex justify-between text-sm text-slate-500">
                        <span>{blog.date}</span>
                        <span>{blog.readingTime}</span>
                      </div>

                      <Link
                        to={`/blog/${blog.slug}`}
                        className="mt-6 inline-block font-semibold text-green-700 hover:text-green-800"
                      >
                        Read More →
                      </Link>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Sidebar */}

          <aside>

            <div className="rounded-2xl bg-white p-7 shadow-lg">

              <h3 className="text-2xl font-bold text-slate-800">
                Categories
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {categories.map((cat) => (

                  <span
                    key={cat}
                    className="cursor-pointer rounded-full bg-slate-100 px-4 py-2 text-sm transition hover:bg-green-600 hover:text-white"
                  >
                    {cat}
                  </span>

                ))}

              </div>

            </div>

            <div className="mt-8 rounded-2xl bg-white p-7 shadow-lg">

              <h3 className="text-2xl font-bold text-slate-800">
                Popular Posts
              </h3>

              <div className="mt-6 space-y-5">

                {blogs.slice(0, 5).map((blog) => (

                  <Link
                    key={blog.id}
                    to={`/blog/${blog.slug}`}
                    className="block border-b pb-4 last:border-none"
                  >
                    <p className="font-semibold text-slate-700 hover:text-green-700">
                      {blog.title}
                    </p>

                    <span className="text-sm text-slate-500">
                      {blog.date}
                    </span>

                  </Link>

                ))}

              </div>

            </div>

            <div className="mt-8 rounded-2xl bg-green-700 p-8 text-white shadow-xl">

              <h3 className="text-2xl font-bold">
                Subscribe
              </h3>

              <p className="mt-4 text-green-100">
                Receive the latest healthcare
                articles directly in your inbox.
              </p>

              <input
                type="email"
                placeholder="Your Email"
                className="mt-6 w-full rounded-xl px-4 py-3 text-black outline-none"
              />

              <button className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-green-700 transition hover:bg-slate-100">
                Subscribe
              </button>

            </div>

          </aside>

        </div>

      </section>

    </div>
  );
}
