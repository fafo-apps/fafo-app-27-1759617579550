export const dynamic = "force-dynamic";

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function Home() {
  const themes = [
    {
      name: "Aurora",
      from: "#0ea5e9",
      to: "#22d3ee",
      accent: "#38bdf8",
      textOnAccent: "#062236",
    },
    {
      name: "Sunset",
      from: "#f97316",
      to: "#ef4444",
      accent: "#fb923c",
      textOnAccent: "#3a1a06",
    },
    {
      name: "Lavender",
      from: "#a78bfa",
      to: "#60a5fa",
      accent: "#c4b5fd",
      textOnAccent: "#251f3a",
    },
    {
      name: "Mint",
      from: "#34d399",
      to: "#22c55e",
      accent: "#86efac",
      textOnAccent: "#06341e",
    },
  ];

  const taglines = [
    "A tiny slice of delight.",
    "Simple. Soothing. Serene.",
    "Clean design, calm vibes.",
    "Less noise, more wow.",
  ];

  const features = [
    { title: "Fast by default", desc: "Built with Next.js and Tailwind for snappy performance.", emoji: "⚡" },
    { title: "Responsive", desc: "Looks great on phones, tablets, and desktops.", emoji: "📱" },
    { title: "Accessible", desc: "Readable contrast and keyboard-friendly controls.", emoji: "♿" },
  ];

  const theme = pickRandom(themes);
  const tagline = pickRandom(taglines);

  const gradientStyle: React.CSSProperties = {
    backgroundImage: `radial-gradient(1200px 600px at 0% 0%, ${theme.from}22, transparent 60%), radial-gradient(1000px 500px at 100% 0%, ${theme.to}22, transparent 60%), linear-gradient(180deg, ${theme.from}10, ${theme.to}10)`,
  };

  return (
    <div className="min-h-screen text-foreground" style={gradientStyle}>
      <header className="px-6 sm:px-8 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a className="flex items-center gap-3 group" href="#" aria-label="Home">
            <span
              className="size-8 rounded-full shadow-lg ring-1 ring-black/10"
              style={{ background: theme.accent }}
            />
            <span className="font-semibold tracking-tight text-lg sm:text-xl">
              {theme.name}
            </span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm opacity-80">
            <a className="hover:opacity-100" href="#features">Features</a>
            <a className="hover:opacity-100" href="#about">About</a>
            <a className="hover:opacity-100" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="px-6 sm:px-8">
        <section className="max-w-6xl mx-auto pt-10 sm:pt-16 pb-10 sm:pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
                Make something beautiful
              </h1>
              <p className="mt-4 text-base sm:text-lg opacity-80 max-w-prose">
                {tagline}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 font-medium shadow-lg ring-1 ring-black/10 hover:translate-y-[-1px] transition-transform"
                  style={{ background: theme.accent, color: theme.textOnAccent }}
                >
                  Get started
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 font-medium bg-white/5 hover:bg-white/10 ring-1 ring-black/10 backdrop-blur-md"
                >
                  See features
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl ring-1 ring-black/10 shadow-xl overflow-hidden bg-white/5 backdrop-blur-md">
                <div className="size-full grid grid-cols-3 grid-rows-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-white/10"
                      style={{ background: i % 2 ? `${theme.from}22` : `${theme.to}22` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="max-w-6xl mx-auto py-8 sm:py-12">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-5 bg-white/5 hover:bg-white/10 ring-1 ring-black/10 shadow-sm backdrop-blur-md transition-colors"
              >
                <div className="text-3xl" aria-hidden>
                  {f.emoji}
                </div>
                <h3 className="mt-3 font-semibold text-lg">{f.title}</h3>
                <p className="mt-1 text-sm opacity-80">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto py-12">
          <div className="rounded-2xl p-6 sm:p-8 bg-white/5 ring-1 ring-black/10 backdrop-blur-md">
            <h2 className="text-2xl font-semibold">About this page</h2>
            <p className="mt-3 opacity-80 max-w-prose">
              This site is generated on each request with a random color theme and tagline.
              It uses only native gradients, system fonts from Geist, and a tiny sprinkle of
              glass effects for a calm aesthetic.
            </p>
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto py-12">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between rounded-2xl p-6 sm:p-8 bg-white/5 ring-1 ring-black/10 backdrop-blur-md">
            <div>
              <h3 className="text-xl font-semibold">Like the vibe?</h3>
              <p className="opacity-80">Clone, tweak, and make it yours.</p>
            </div>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 font-medium shadow-lg ring-1 ring-black/10"
              style={{ background: theme.accent, color: theme.textOnAccent }}
            >
              Copy this layout
            </a>
          </div>
        </section>
      </main>

      <footer className="px-6 sm:px-8 pb-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 opacity-80 text-sm">
          <p>© {new Date().getFullYear()} {theme.name}. All rights reserved.</p>
          <p>
            Built with Next.js 15 and Tailwind v4.
          </p>
        </div>
      </footer>
    </div>
  );
}
