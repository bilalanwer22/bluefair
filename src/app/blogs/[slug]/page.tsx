import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPostDate, getAllBlogSlugs, getBlogPost } from "@/lib/cms";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: `${post.seo.seo_title || post.title} | Blue Fair Golf Club`,
    description: post.seo.seo_description || post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const image = post.featured_image;

  return (
    <>
      <section className="bg-gradient-to-br from-bluefair-950 to-bluefair-800 text-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="text-sm font-semibold text-bluefair-300 hover:text-white"
          >
            ← Back to all posts
          </Link>
          <h1 className="mt-6 font-display text-3xl sm:text-4xl font-bold leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-bluefair-200">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            {post.author.name && (
              <>
                <span aria-hidden="true">·</span>
                <span>{post.author.name}</span>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-bluefair-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {image && (
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={image.url}
                alt={image.alt || post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          {post.content && (
            <article
              className="blog-content space-y-4 text-gray-700 leading-relaxed [&_a]:text-bluefair-600 [&_a]:underline [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-bluefair-950 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_p]:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}
        </div>
      </section>
    </>
  );
}
