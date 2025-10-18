import { useParams, Link } from "react-router";
import { blogPosts } from "@/blog/data/blog-data";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 pt-32 pb-18 text-center">
        <h1 className="text-secondary text-3xl font-bold">
          Artikel tidak ditemukan
        </h1>
        <Link
          to="/blog"
          className="text-primary mt-4 inline-block hover:underline"
        >
          ← Kembali ke Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="relative mx-auto max-w-5xl px-4 pt-32 pb-18">
      <h1 className="text-secondary text-center text-4xl leading-tight font-bold">
        {post.title}
      </h1>
      <div className="prose prose-invert text-secondary mt-6 max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            table: ({ node, ...props }) => (
              <div className="table-container">
                <table {...props} />
              </div>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      <Link
        to="/blog"
        className="text-primary mt-8 inline-block hover:underline"
      >
        ← Kembali ke Blog
      </Link>
    </article>
  );
};

export default BlogDetail;
