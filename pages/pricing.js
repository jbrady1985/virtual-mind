// pages/pricing.js
import { useState } from "react";

export default function Pricing() {
  const [loading, setLoading] = useState("");

  async function go(plan) {
    try {
      setLoading(plan);

      const priceId =
        plan === "creator"
          ? process.env.NEXT_PUBLIC_STRIPE_PRICE_CREATOR
          : process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO;

      const resp = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await resp.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Checkout error");
      }
    } finally {
      setLoading("");
    }
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          <span className="text-gold">Virtual</span>-Mind
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
          <a href="/#how" className="hover:text-gold">How it works</a>
          <a href="/pricing" className="hover:text-gold">Pricing</a>
        </nav>
      </header>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold mb-2">Pricing</h1>
        <p className="opacity-80 mb-8">
          Choose how deep you want your virtual mind to go. Upgrade or cancel anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* CREATOR */}
          <div className="bg-panel rounded-2xl p-6 border border-neutral-800 shadow-card">
            <h2 className="text-2xl font-bold mb-1">Creator</h2>
            <p className="text-sm opacity-80 mb-4">
              A streamlined psychology profile that captures how you think and make decisions.
            </p>

            <div className="text-gold text-3xl font-extrabold mb-4">
              $19<span className="text-base text-white/80"> / month</span>
            </div>

            <ul className="text-sm space-y-2 opacity-90 mb-6">
              <li>• Short psychology-backed quiz</li>
              <li>• Core decision style and constraints</li>
              <li>• Single default persona</li>
              <li>• Basic chatbot behavior</li>
              <li>• Persona JSON export</li>
            </ul>

            <button
              onClick={() => go("creator")}
              disabled={loading === "creator"}
              className="px-5 py-3 rounded-2xl bg-gold text-black font-semibold hover:opacity-90 transition w-full"
            >
              {loading === "creator" ? "Redirecting…" : "Choose Creator"}
            </button>
          </div>

          {/* PRO */}
          <div className="bg-panel rounded-2xl p-6 border border-neutral-800 shadow-card">
            <h2 className="text-2xl font-bold mb-1">Pro</h2>
            <p className="text-sm opacity-80 mb-4">
              A deeper profile with multiple modes and tagged prompting so your AI adapts to context.
            </p>

            <div className="text-gold text-3xl font-extrabold mb-4">
              $49<span className="text-base text-white/80"> / month</span>
            </div>

            <ul className="text-sm space-y-2 opacity-90 mb-6">
              <li>• Expanded questionnaire and refinements</li>
              <li>• Multiple persona modes</li>
              <li>
                • Tagged prompting (
                <span className="text-gold">[work]</span>,{" "}
                <span className="text-gold">[personal]</span>,{" "}
                <span className="text-gold">[strategy]</span>)
              </li>
              <li>• Different tones and constraints per tag</li>
              <li>• Exportable tag-based persona config</li>
            </ul>

            <button
              onClick={() => go("pro")}
              disabled={loading === "pro"}
              className="px-5 py-3 rounded-2xl bg-gold text-black font-semibold hover:opacity-90 transition w-full"
            >
              {loading === "pro" ? "Redirecting…" : "Choose Pro"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
