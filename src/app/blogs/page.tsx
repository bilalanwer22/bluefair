import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Blue Fair Golf Club",
  description: "Read the latest golf tips, tournament news, and club updates from Blue Fair.",
};

export default function BlogsPage() {
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

      <section className="min-h-[40vh] bg-bluefair-50" />
    </>
  );
}
