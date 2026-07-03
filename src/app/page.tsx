import Link from "next/link";

const features = [
  {
    title: "Championship Course",
    description:
      "Our 18-hole championship course spans 7,200 yards of meticulously maintained fairways and challenging greens.",
    icon: "⛳",
  },
  {
    title: "Pro Coaching",
    description:
      "Learn from PGA-certified instructors with personalized lessons for beginners and seasoned players alike.",
    icon: "🏌️",
  },
  {
    title: "Premium Clubhouse",
    description:
      "Relax in our luxury clubhouse featuring fine dining, a pro shop, and panoramic views of the course.",
    icon: "🏠",
  },
  {
    title: "Member Events",
    description:
      "Join exclusive tournaments, social gatherings, and seasonal events designed for our vibrant community.",
    icon: "🏆",
  },
];

const stats = [
  { value: "18", label: "Championship Holes" },
  { value: "7,200", label: "Yards of Fairway" },
  { value: "50+", label: "Years of Excellence" },
  { value: "2,500+", label: "Happy Members" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bluefair-950 via-bluefair-900 to-bluefair-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-bluefair-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-bluefair-300 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-bluefair-300 font-medium tracking-widest uppercase text-sm mb-4">
              Welcome to Blue Fair
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where Every Swing
              <span className="block text-bluefair-300">Meets Perfection</span>
            </h1>
            <p className="text-lg text-bluefair-100 leading-relaxed mb-8 max-w-2xl">
              Discover a world-class golf experience nestled in breathtaking
              blue-hued landscapes. Blue Fair offers championship courses,
              expert coaching, and a community passionate about the game.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-bluefair-500 px-8 py-3.5 text-base font-semibold text-white shadow-xl hover:bg-bluefair-400 transition-all hover:scale-105"
              >
                Book a Tee Time
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border-2 border-bluefair-400 px-8 py-3.5 text-base font-semibold text-bluefair-100 hover:bg-bluefair-800 transition-colors"
              >
                Explore Our Club
              </Link>
            </div>
          </div>
        </div>

        <div className="relative border-t border-bluefair-700/50 bg-bluefair-950/50">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl sm:text-4xl font-bold text-bluefair-300">
                    {stat.value}
                  </p>
                  <p className="text-sm text-bluefair-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-bluefair-950 mb-4">
              Why Choose Blue Fair?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From pristine fairways to world-class amenities, we deliver an
              unmatched golfing experience for players of all skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-bluefair-100 bg-gradient-to-b from-bluefair-50 to-white p-6 shadow-sm hover:shadow-lg hover:border-bluefair-200 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-bold text-bluefair-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="py-20 bg-bluefair-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-bluefair-950 mb-6">
                A Course Like No Other
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Designed by renowned architect James Whitfield, our course
                weaves through rolling hills, crystal-clear water hazards, and
                ancient oak trees. Each hole presents a unique challenge that
                keeps golfers coming back season after season.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The signature 12th hole — a par-3 over a shimmering blue lake —
                has been featured in Golf Digest&apos;s &quot;Top 100 Holes in
                America&quot; for three consecutive years.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-bluefair-600 font-semibold hover:text-bluefair-700"
              >
                Learn more about our course
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-bluefair-600 to-bluefair-800 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-6xl mb-4">🏌️‍♂️</div>
                <p className="font-display text-2xl font-bold">Blue Fair Course</p>
                <p className="text-bluefair-200 mt-2">Par 72 · 7,200 Yards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bluefair-700 to-bluefair-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready to Play at Blue Fair?
          </h2>
          <p className="text-bluefair-100 max-w-2xl mx-auto mb-8">
            Join our community of passionate golfers and experience the fairway
            like never before. Memberships and guest passes are available year-round.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-bluefair-800 shadow-xl hover:bg-bluefair-50 transition-colors"
          >
            Get in Touch Today
          </Link>
        </div>
      </section>
    </>
  );
}
