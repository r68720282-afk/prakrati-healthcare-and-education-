import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

import BlogHero from "../components/blog/BlogHero";
import BlogSearch from "../components/blog/BlogSearch";
import Categories from "../components/blog/Categories";
import FeaturedBlog from "../components/blog/FeaturedBlog";
import BlogGrid from "../components/blog/BlogGrid";
import PopularPosts from "../components/blog/PopularPosts";
import Newsletter from "../components/blog/Newsletter";
import Pagination from "../components/blog/Pagination";
import { blogCategories, blogs } from "../data/blogs";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const featuredBlog = blogs.find((blog) => blog.featured);
  const popularPosts = blogs.slice(0, 4);
  const latestPosts = blogs.slice(0, 5);

  const filteredBlogs = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return blogs.filter((blog) => {
      const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
      const matchesSearch = !normalizedSearch || blog.title.toLowerCase().includes(normalizedSearch);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const updateCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const updateSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <>
      <Helmet>
        <title>Our Blog | Prakrati Healthcare & Education</title>
        <meta name="description" content="Health tips, education, wellness and awareness articles from Prakrati Healthcare & Education." />
        <meta name="keywords" content="health blog, healthcare awareness, wellness, education, Prakrati Healthcare" />
        <link rel="canonical" href="/blog" />
        <meta property="og:title" content="Our Blog | Prakrati Healthcare & Education" />
        <meta property="og:description" content="Health tips, education, wellness and awareness articles." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <BlogHero />

      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-14 space-y-12">
          <FeaturedBlog blog={featuredBlog} />

          <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(280px,3fr)]">
            <section className="space-y-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-green-600">Latest Blogs</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Expert health and education articles</h2>
              </div>
              <BlogSearch searchTerm={searchTerm} onSearchChange={updateSearch} />
              <BlogGrid blogs={paginatedBlogs} />
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </section>

            <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900">Categories</h3>
                <div className="mt-5">
                  <Categories categories={blogCategories} activeCategory={activeCategory} onCategoryChange={updateCategory} />
                </div>
              </div>
              <PopularPosts posts={popularPosts} />
              <Newsletter />
              <PopularPosts posts={latestPosts} title="Latest Posts" />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
