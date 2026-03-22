export default function App() {
  const features = [
    {
      title: "Smart Product Browsing",
      desc: "A smooth and modern catalog experience that helps users explore products quickly with clear layouts and engaging UI.",
      icon: "🛍️",
    },
    {
      title: "Cart Management",
      desc: "Users can add, remove, and manage products in the cart easily before moving to checkout.",
      icon: "🛒",
    },
    {
      title: "Secure Checkout",
      desc: "A streamlined checkout flow designed to make purchases safer, faster, and more trustworthy.",
      icon: "🔐",
    },
    {
      title: "AI Recommendations",
      desc: "Personalized suggestions based on user activity, preferences, and browsing behavior to improve engagement.",
      icon: "🤖",
    },
    {
      title: "Intelligent Search",
      desc: "AI-powered search that helps users discover relevant products faster with smarter matching and suggestions.",
      icon: "🔎",
    },
    {
      title: "REST API Integration",
      desc: "A scalable backend structure that connects frontend interactions with product, cart, and order data efficiently.",
      icon: "⚙️",
    },
  ];

  const stack = ["React", "Node.js", "AI/ML", "REST API"];

  const blogCards = [
    {
      title: "Why Modern E-Commerce Needs AI",
      category: "Insight",
      text: "Customers expect faster discovery, relevant suggestions, and smoother interactions. AI helps bridge that gap by making shopping more personalized and efficient.",
    },
    {
      title: "How the Platform Improves User Engagement",
      category: "Experience",
      text: "By combining product browsing, smart search, and recommendation logic, the platform creates a more interactive and conversion-friendly user journey.",
    },
    {
      title: "From Frontend to Backend",
      category: "Architecture",
      text: "React delivers the modern interface, Node.js powers the backend, AI/ML enhances discovery, and REST APIs connect the complete e-commerce workflow.",
    },
  ];

  const workflow = [
    "Users browse products through a modern responsive interface",
    "Search and filters help narrow down relevant items",
    "AI suggests products based on behavior and preferences",
    "Selected products are managed inside the cart",
    "Checkout handles order flow securely and smoothly",
    "REST APIs connect frontend actions with backend data operations",
  ];

  const benefits = [
    "Improves product discovery",
    "Enhances personalization with AI",
    "Boosts user engagement and retention",
    "Creates a smoother buying journey",
    "Supports scalable frontend-backend communication",
    "Gives the project a modern real-world architecture",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-slate-950 to-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
              AI-Powered E-Commerce Project Showcase
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Modern E-Commerce AI
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A blog-style project website designed to showcase your AI-enhanced e-commerce platform,
              explain its functionality, and present how modern shopping experiences can be improved
              through intelligent search, personalized recommendations, and scalable full-stack design.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#features"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
              >
                Explore Features
              </a>
              <a
                href="#workflow"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Workflow
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <p className="text-sm font-medium text-slate-400">Core Focus</p>
              <h3 className="mt-2 text-xl font-semibold">Personalized Shopping</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                The platform uses AI-driven recommendations and smart search to make product discovery more relevant.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:mt-10">
              <p className="text-sm font-medium text-slate-400">Frontend</p>
              <h3 className="mt-2 text-xl font-semibold">React Experience</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                A responsive interface for browsing products, viewing details, and managing the shopping journey.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <p className="text-sm font-medium text-slate-400">Backend</p>
              <h3 className="mt-2 text-xl font-semibold">Node.js + APIs</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Handles product, cart, and order operations through a scalable REST-based architecture.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:mt-10">
              <p className="text-sm font-medium text-slate-400">Main Advantage</p>
              <h3 className="mt-2 text-xl font-semibold">Smarter Engagement</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                AI-powered interactions improve user engagement and create a more modern e-commerce experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Technology Stack</p>
            <h2 className="mt-3 text-3xl font-bold">Built with modern full-stack components</h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {stack.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Blog Highlights</p>
          <h2 className="mt-3 text-3xl font-bold">Explaining the platform through clean story-based sections</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {blogCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                {card.category}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Core Features</p>
            <h2 className="mt-3 text-3xl font-bold">The main capabilities of the platform</h2>
            <p className="mt-4 text-slate-300">
              This blog website illustrates the complete shopping workflow and highlights the AI-enhanced
              elements that make the project stand out as a modern e-commerce solution.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-black/30 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-black/40"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Platform Workflow</p>
            <h2 className="mt-3 text-3xl font-bold">How users interact with the system</h2>
            <div className="mt-8 space-y-4">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-emerald-500/10 p-8 shadow-xl backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Why it stands out</p>
            <h3 className="mt-3 text-2xl font-bold">Project Benefits</h3>
            <div className="mt-6 space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/30">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:px-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Problem Statement</p>
            <h3 className="mt-3 text-2xl font-bold">Traditional online stores often feel generic</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Standard e-commerce platforms may provide basic browsing and checkout, but they often lack
              intelligent personalization and relevant discovery features. This can reduce engagement and
              make product exploration slower for users.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Project Solution</p>
            <h3 className="mt-3 text-2xl font-bold">A modern AI-enhanced shopping platform</h3>
            <p className="mt-4 leading-8 text-slate-200">
              Modern E-Commerce AI combines a strong frontend, scalable backend, secure checkout, and
              AI-driven recommendation and search systems to deliver a more personalized, efficient, and
              engaging shopping experience.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-400/15 via-white/5 to-emerald-400/15 p-10 shadow-2xl backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Final Note</p>
          <h2 className="mt-3 text-3xl font-bold">A strong portfolio presentation for your AI commerce project</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            This blog-style website helps you present your Modern E-Commerce AI project in a clean,
            professional, and visually impressive way for portfolio reviews, academic showcases,
            project demonstrations, and recruiter presentations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#blog"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Read Project Story
            </a>
            <a
              href="#features"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
