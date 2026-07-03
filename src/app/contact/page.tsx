import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Blue Fair Golf Club",
  description: "Get in touch with Blue Fair for tee times, memberships, events, and general inquiries.",
};

const contactInfo = [
  {
    title: "Visit Us",
    details: ["123 Fairway Drive", "Blue Valley, CA 90210"],
    icon: "📍",
  },
  {
    title: "Call Us",
    details: ["Main: (555) 123-4567", "Pro Shop: (555) 123-4568"],
    icon: "📞",
  },
  {
    title: "Email Us",
    details: ["General: info@bluefair.com", "Membership: members@bluefair.com"],
    icon: "✉️",
  },
  {
    title: "Hours",
    details: ["Mon–Fri: 6:00 AM – 8:00 PM", "Sat–Sun: 5:30 AM – 9:00 PM"],
    icon: "🕐",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-bluefair-950 to-bluefair-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-bluefair-300 font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Contact Blue Fair
          </h1>
          <p className="text-lg text-bluefair-100 max-w-3xl leading-relaxed">
            Have questions about memberships, tee times, or events? We&apos;d love
            to hear from you. Reach out and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="rounded-2xl border border-bluefair-100 bg-bluefair-50 p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{info.icon}</div>
                <h3 className="font-display text-lg font-bold text-bluefair-900 mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail) => (
                  <p key={detail} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-bluefair-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="font-display text-2xl font-bold text-bluefair-950 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-sm mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bluefair-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bluefair-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bluefair-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bluefair-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bluefair-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="tee-time">Book a Tee Time</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="events">Events & Tournaments</option>
                    <option value="lessons">Golf Lessons</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-bluefair-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-bluefair-600 py-3.5 text-sm font-semibold text-white hover:bg-bluefair-700 transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex-1 min-h-[300px] bg-gradient-to-br from-bluefair-600 to-bluefair-900 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-5xl mb-4">🗺️</div>
                  <p className="font-display text-xl font-bold">Blue Fair Location</p>
                  <p className="text-bluefair-200 mt-2 text-sm">
                    123 Fairway Drive, Blue Valley, CA 90210
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-display text-lg font-bold text-bluefair-950 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      q: "Do you offer guest passes?",
                      a: "Yes! Members can bring guests. Day passes are also available for non-members.",
                    },
                    {
                      q: "Is there a dress code?",
                      a: "Collared shirts and appropriate golf attire are required on the course and in the clubhouse.",
                    },
                    {
                      q: "Can I rent equipment?",
                      a: "Our pro shop offers club rentals, including premium sets from top brands.",
                    },
                  ].map((faq) => (
                    <div key={faq.q}>
                      <p className="font-medium text-bluefair-800 text-sm">{faq.q}</p>
                      <p className="text-gray-600 text-sm mt-1">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
