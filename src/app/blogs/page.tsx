import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Blue Fair Golf Club",
  description: "Read the latest golf tips, tournament news, and club updates from Blue Fair.",
};

const blogPosts = [
  {
    id: 1,
    title: "5 Tips to Improve Your Drive",
    excerpt:
      "A powerful and accurate drive sets the tone for every hole. Learn how to optimize your stance, grip, and follow-through with advice from our head pro, Sarah Chen.",
    content:
      "The drive is often the most intimidating shot in golf, but with the right fundamentals, it can become your greatest weapon. Start with a shoulder-width stance and ensure your weight is balanced. Focus on a smooth takeaway rather than raw power — tempo is everything. Keep your head still through impact and let your hips lead the rotation. Practice at the range with alignment sticks to build consistency. Remember, accuracy beats distance every time on tight fairways like ours at Blue Fair.",
    author: "Sarah Chen",
    date: "June 15, 2026",
    category: "Tips & Tricks",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Spring Tournament Recap: A Day to Remember",
    excerpt:
      "Our annual Spring Classic brought together 120 players for a day of competitive golf, great weather, and unforgettable moments on the fairway.",
    content:
      "The 2026 Spring Classic was our biggest tournament yet, with players from across the region competing for the coveted Blue Fair trophy. John Davidson took home first place with an impressive 68, while Maria Lopez claimed the women's division with a stellar 71. The day featured closest-to-the-pin contests, longest drive competitions, and a celebratory dinner at the clubhouse. Thank you to all participants and volunteers who made this event a tremendous success.",
    author: "Robert Mitchell",
    date: "May 28, 2026",
    category: "Events",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Course Maintenance: Behind the Greens",
    excerpt:
      "Ever wonder what it takes to keep Blue Fair in championship condition? Our superintendent shares the daily routines that make our course shine.",
    content:
      "Maintaining 18 holes of championship golf requires dedication and precision. Our team starts at 5 AM every day, mowing greens to exact specifications, managing irrigation systems, and monitoring turf health. Seasonal aeration, overseeding, and bunker maintenance are scheduled to minimize disruption while maximizing playability. We use sustainable practices including recycled water and organic fertilizers to protect our beautiful landscape for generations to come.",
    author: "Michael Torres",
    date: "May 10, 2026",
    category: "Course News",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Junior Golf Program: Growing the Next Generation",
    excerpt:
      "Our summer junior program introduces young players to the game with fun, structured lessons and on-course experience.",
    content:
      "Blue Fair's Junior Golf Program returns this summer with sessions for ages 8-17. Led by our certified instructors, the program covers fundamentals, etiquette, and course management in a supportive environment. Participants enjoy weekly clinics, playing opportunities, and end-of-season tournaments. Scholarships are available for qualifying families. Registration opens June 1st — spaces fill quickly, so sign up early!",
    author: "Sarah Chen",
    date: "April 22, 2026",
    category: "Programs",
    readTime: "3 min read",
  },
  {
    id: 5,
    title: "The Art of Reading Greens",
    excerpt:
      "Putting accounts for nearly half your strokes. Master green reading with these proven techniques used by touring professionals.",
    content:
      "Reading greens is part science, part art. Start by surveying the putt from multiple angles — behind the ball, behind the hole, and from the side. Look for subtle breaks caused by grain, slope, and moisture. The plumb-bob method and aim-point systems can help, but experience is your best teacher. At Blue Fair, our bentgrass greens roll true and fast, rewarding players who take time to read every putt carefully.",
    author: "Sarah Chen",
    date: "April 5, 2026",
    category: "Tips & Tricks",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "New Menu at the Blue Fair Clubhouse",
    excerpt:
      "Executive Chef David Park unveils a refreshed dining menu featuring locally sourced ingredients and golf-friendly fare.",
    content:
      "The Blue Fair Clubhouse dining room has unveiled an exciting new menu crafted by Executive Chef David Park. Highlights include pan-seared salmon with seasonal vegetables, the signature Fairway Burger, and a selection of craft cocktails perfect for the 19th hole. The patio dining area offers stunning sunset views over the 18th green. Members receive 10% off all dining — bring your guests and share the Blue Fair experience.",
    author: "Emily Watson",
    date: "March 18, 2026",
    category: "Club News",
    readTime: "4 min read",
  },
];

const categories = ["All", "Tips & Tricks", "Events", "Course News", "Programs", "Club News"];

export default function BlogsPage() {
  return (
    <>
      {/* Page Header */}
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

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  index === 0
                    ? "bg-bluefair-600 text-white"
                    : "bg-bluefair-50 text-bluefair-700 hover:bg-bluefair-100"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-bluefair-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="h-48 bg-gradient-to-br from-bluefair-500 to-bluefair-800 flex items-center justify-center relative">
                  <span className="text-5xl">📰</span>
                  <span className="absolute top-4 left-4 bg-white/90 text-bluefair-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-bluefair-950 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <p className="text-xs text-gray-500 mb-3">
                      By <span className="font-medium text-bluefair-700">{post.author}</span>
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {post.content}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-bluefair-950 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest blog posts, event announcements, and exclusive offers
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-bluefair-500 focus:border-transparent"
            />
            <button
              type="button"
              className="rounded-full bg-bluefair-600 px-6 py-3 text-sm font-semibold text-white hover:bg-bluefair-700 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
