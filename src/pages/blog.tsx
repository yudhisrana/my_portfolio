import { useState } from "react";
import { Link } from "react-router";
import { blogPosts } from "@/blog/data/blog-data";

const categories = ["Semua", "Perkuliahan", "Teknologi", "Pengembangan Web"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredPosts =
    activeCategory === "Semua"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const sortedPosts = [...filteredPosts].sort((a, b) => b.id - a.id);

  return (
    <section className="relative pt-32 pb-18">
      <div className="mx-auto max-w-6xl space-y-12 px-4">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h1 className="text-secondary text-4xl leading-tight font-bold">
            Selamat Datang di <span className="text-primary">Blog Saya</span>
          </h1>
          <p className="text-secondary leading-relaxed">
            Tempat saya berbagi tulisan ringan dari berbagai tugas kuliah atau
            topik seputar teknologi dan pengembangan web.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "hover:bg-primary bg-gray-200 text-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {sortedPosts.length > 0 ? (
            sortedPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 transition-all hover:-translate-y-1 hover:bg-neutral-800"
              >
                <h2 className="text-secondary text-xl font-semibold">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 line-clamp-3 text-gray-300">
                  {post.content.replace(/[#*`]/g, "").slice(0, 160)}...
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary mt-4 inline-block font-medium hover:underline"
                >
                  Baca Selengkapnya →
                </Link>
              </article>
            ))
          ) : (
            <p className="text-secondary col-span-full text-center">
              Belum ada artikel dalam kategori ini.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
