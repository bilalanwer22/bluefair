import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Blue Fair Golf Club",
  description: "Learn about Blue Fair's history, mission, and the team behind our championship golf experience.",
};

const timeline = [
  { year: "1974", event: "Blue Fair Golf Club founded on 200 acres of pristine valley land." },
  { year: "1985", event: "First major renovation completed, adding water features and new bunkers." },
  { year: "2001", event: "Clubhouse expanded with fine dining and a state-of-the-art pro shop." },
  { year: "2015", event: "Course redesign by James Whitfield earns Golf Digest recognition." },
  { year: "2024", event: "Celebrated 50 years of excellence with a golden anniversary tournament." },
];

const team = [
  { name: "Robert Mitchell", role: "Club President", bio: "Leading Blue Fair with 30 years of golf industry experience." },
  { name: "Sarah Chen", role: "Head Golf Professional", bio: "PGA Class A professional specializing in player development." },
  { name: "Michael Torres", role: "Course Superintendent", bio: "Ensuring our fairways remain in championship condition daily." },
  { name: "Emily Watson", role: "Membership Director", bio: "Helping new members discover everything Blue Fair has to offer." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-bluefair-950 to-bluefair-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-bluefair-300 font-medium tracking-widest uppercase text-sm mb-4">
            Our Story
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            About Blue Fair
          </h1>
          <p className="text-lg text-bluefair-100 max-w-3xl leading-relaxed">
            For over five decades, Blue Fair has been the premier destination for
            golfers who demand excellence. Our commitment to quality, community,
            and the timeless spirit of the game sets us apart.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl bg-gradient-to-br from-bluefair-500 to-bluefair-800 aspect-square max-w-md mx-auto flex items-center justify-center shadow-2xl">
              <div className="text-center text-white p-8">
                <div className="text-7xl mb-4">⛳</div>
                <p className="font-display text-2xl font-bold">Est. 1974</p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-bluefair-950 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Blue Fair, we believe golf is more than a sport — it&apos;s a
                way of life. Our mission is to provide an exceptional golfing
                experience in a welcoming environment where members and guests
                can challenge themselves, connect with others, and enjoy the
                natural beauty of our course.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We strive to maintain the highest standards in course conditions,
                member services, and community engagement. Every decision we make
                is guided by our passion for the game and our dedication to the
                people who make Blue Fair their home course.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re a scratch golfer or picking up a club for the
                first time, Blue Fair welcomes you with open arms and fairways
                that inspire greatness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bluefair-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-bluefair-950 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We pursue the highest standards in everything — from course maintenance to member experience.",
              },
              {
                title: "Community",
                description: "Blue Fair is a place where friendships are forged and memories are made on and off the course.",
              },
              {
                title: "Integrity",
                description: "Honesty and respect are at the heart of our club culture, mirroring the values of the game itself.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-bluefair-100 text-center"
              >
                <h3 className="font-display text-xl font-bold text-bluefair-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-bluefair-950 text-center mb-12">
            Our History
          </h2>
          <div className="max-w-2xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bluefair-600 text-white font-bold text-sm">
                    {item.year.slice(2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-bluefair-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-bold text-bluefair-800">{item.year}</p>
                  <p className="text-gray-600 mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-bluefair-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-bluefair-300 text-center mb-12 max-w-2xl mx-auto">
            The dedicated professionals who make Blue Fair a world-class destination.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-bluefair-900/50 border border-bluefair-800 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-bluefair-600 text-2xl font-bold">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-display text-lg font-bold">{member.name}</h3>
                <p className="text-bluefair-400 text-sm mb-3">{member.role}</p>
                <p className="text-bluefair-200 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bluefair-100 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-bluefair-950 mb-4">
            Want to Become a Member?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our membership team to learn about exclusive benefits and pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-bluefair-600 px-8 py-3 font-semibold text-white hover:bg-bluefair-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
