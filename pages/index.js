export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          <span className="text-gold">Virtual</span>-Mind
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
          <a href="#how" className="hover:text-gold">How it works</a>
          <a href="#features" className="hover:text-gold">Features</a>
          <a href="/pricing" className="hover:text-gold">Pricing</a>
          <a href="#faq" className="hover:text-gold">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="px-4 py-2 rounded-2xl border border-neutral-700 hover:border-gold transition">Sign in</a>
          <a href="/pricing" className="px-4 py-2 rounded-2xl bg-gold text-black font-semibold hover:opacity-90 transition">Create yours</a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-14">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Build a <span className="text-gold">virtual mind</span> that thinks like you.
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Answer a psychology-backed quiz. We generate a persona config and host your personal decision-mirroring AI in the cloud.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 rounded-2xl bg-gold text-black font-semibold hover:opacity-90 transition">Create your virtual mind</a>
              <a href="#how" className="px-5 py-3 rounded-2xl border border-neutral-700 hover:border-gold transition">See how it works</a>
            </div>
            <div className="mt-6 text-sm opacity-70">
              No coding. Private by default. Export anytime.
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="bg-panel rounded-2xl p-6 shadow-card border border-neutral-800">
              <div className="text-sm opacity-80 mb-2">Persona preview</div>
              <pre className="text-xs bg-black/40 p-4 rounded-xl overflow-auto">
{`{
  "tone": "analytical, concise",
  "risk_tolerance": "moderate",
  "tie_breaker": "ROI",
  "constraints": ["no fluff", "verify facts"],
  "values": ["efficiency","accuracy","clarity"]
}`}
              </pre>
              <div className="mt-4 text-xs opacity-70">Generated after a 3–5 minute onboarding.</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">How it works</h2>
        <ol className="grid md:grid-cols-3 gap-6 text-sm">
          <li className="bg-panel rounded-2xl p-5 border border-neutral-800">
            <div className="text-gold font-semibold mb-1">1. Quiz</div>
            <p>Answer a short, psychology-backed questionnaire that maps your decision style.</p>
          </li>
          <li className="bg-panel rounded-2xl p-5 border border-neutral-800">
            <div className="text-gold font-semibold mb-1">2. Generate</div>
            <p>We build a structured persona JSON that your AI will strictly follow.</p>
          </li>
          <li className="bg-panel rounded-2xl p-5 border border-neutral-800">
            <div className="text-gold font-semibold mb-1">3. Use</div>
            <p>Chat, refine, and embed. Host in the cloud with ongoing improvements.</p>
          </li>
        </ol>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Why Virtual-Mind</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-panel rounded-2xl p-5 border border-neutral-800">
            <div className="text-gold font-semibold mb-1">Explainable</div>
            <p className="text-sm opacity-90">Transparent persona config and few-shots — not a black box.</p>
          </div>
          <div className="bg-panel rounded-2xl p-5 border border-neutral-800">
            <div className="text-gold font-semibold mb-1">Private</div>
            <p className="text-sm opacity-90">Your data is yours. Export or delete anytime.</p>
          </div>
          <div className="bg-panel rounded-2xl p-5 border border-neutral-800">
            <div className="text-gold font-semibold mb-1">Fast to start</div>
            <p className="text-sm opacity-90">3–5 minute onboarding. Live bot in minutes.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="bg-panel rounded-2xl p-5 border border-neutral-800">
            <div className="font-semibold mb-1">Is this the same as a generic chatbot?</div>
            <p className="opacity-90">No — it mirrors your decision style using a structured persona JSON.</p>
          </div>
          <div className="bg-panel rounded-2xl p-5 border border-neutral-800">
            <div className="font-semibold mb-1">Can I refine the personality later?</div>
            <p className="opacity-90">Yes. You can edit the config and re-generate as your preferences change.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm opacity-70 flex justify-between">
          <span>© {new Date().getFullYear()} Virtual-Mind</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
