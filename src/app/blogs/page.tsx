import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { getBlogPosts } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Blogs | Blue Fair Golf Club",
  description: "Read the latest golf tips, tournament news, and club updates from Blue Fair.",
};

interface BlogsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
  const data = await getBlogPosts(page);
  const posts = data?.posts ?? [];
  const pagination = data?.pagination;

  return (
    <>
      <section className="bg-gradient-to-br from-bluefair-950 to-bluefair-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-bluefair-300 font-medium tracking-widest uppercase text-sm mb-4">
            Insights & Updates
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Blue Fair Blog
          </h1>
          <p className="text-lg text-bluefair-100 max-w-3xl leading-relaxed">
            Stay up to date with golf tips, tournament highlights, course news,
            and stories from the Blue Fair community.
          </p>
        </div>
      </section>

      <section className="bg-bluefair-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-bluefair-100 bg-white p-12 text-center">
              <p className="text-lg text-gray-600">No blog posts yet.</p>
              <p className="mt-2 text-sm text-gray-500">
                Publish a post in WordPress and assign it to Blue Fair.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {pagination && pagination.total_pages > 1 && (
                <nav className="mt-12 flex items-center justify-center gap-4">
                  {page > 1 && (
                    <Link
                      href={`/blogs?page=${page - 1}`}
                      className="rounded-full border-2 border-bluefair-600 px-6 py-2 text-sm font-semibold text-bluefair-700 hover:bg-bluefair-600 hover:text-white transition-colors"
                    >
                      ← Previous
                    </Link>
                  )}
                  <span className="text-sm text-gray-600">
                    Page {pagination.current_page} of {pagination.total_pages}
                  </span>
                  {page < pagination.total_pages && (
                    <Link
                      href={`/blogs?page=${page + 1}`}
                      className="rounded-full border-2 border-bluefair-600 px-6 py-2 text-sm font-semibold text-bluefair-700 hover:bg-bluefair-600 hover:text-white transition-colors"
                    >
                      Next →
                    </Link>
                  )}
                </nav>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
