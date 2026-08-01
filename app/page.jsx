import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto">
        <span className="font-bold text-xl text-brand-600">ContentPilot AI</span>
        <div className="flex gap-3">
          <Link href="/login" className="px-4 py-2 text-sm font-medium text-brand-600">
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm font-medium bg-brand-500 text-white rounded-lg hover:bg-brand-600"
          >
            Start free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center px-6 pt-16 pb-20">
        <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold mb-5">
          AI-powered content planning
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
          Plan, write, and schedule your content
          <br /> in minutes, not hours.
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          ContentPilot AI generates captions, blog outlines, and hashtags for your
          business, then drops them straight into your content calendar.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/signup"
            className="px-6 py-3 bg-brand-500 text-white rounded-lg font-medium hover:bg-brand-600"
          >
            Start free
          </Link>
          <Link
            href="/dashboard"
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50"
          >
            View demo dashboard
          </Link>
        </div>
      </section>

      {/* Feature grid */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6 pb-20">
        {[
          {
            title: "AI content generator",
            desc: "Turn a topic into captions, hooks, and hashtags in one click.",
          },
          {
            title: "Content calendar",
            desc: "Drag posts across weeks and keep every channel in sync.",
          },
          {
            title: "Simple analytics",
            desc: "See what's scheduled, published, and performing at a glance.",
          },
        ].map((f) => (
          <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
