// pages/pricing.js
import { useState } from "react";

export default function Pricing() {
  const [loading, setLoading] = useState("");

  async function go(priceEnvVar) {
    try {
      setLoading(priceEnvVar);
      const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_CREATOR && priceEnvVar === "creator"
        ? process.env.NEXT_PUBLIC_STRIPE_PRICE_CREATOR
        : process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO;

      const resp = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId })
      });
      const data = await resp.json();
      if (data.url) window.location.href = data.url;
      else alert(data.error || "Checkout error");
    } finally {
      setLoading("");
    }
  }

  return (
    <main className="min-h-screen">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          <span className="text-gold">Virtual</span>-Mind
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
          <a href="/#how" className="hover:text-gold">How it works</a>
          <a href="/pricing" className="hover:text-gold">Pricing</a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold mb-2">Pricing</h1>
        <p className="opacity-80 mb-8">Start free, upgrade anytime. Cancel whenever.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Creator */}
          <div className="bg-panel rounded-2xl p-6 border border-neutral-800 shadow-card">
            <h2 className="text-2xl font-bold mb-1">Creator</h2>
            <div className="text-gold text-3xl font-extrabold mb-4">$19<span className="text-base text-white/80"> / month</span></div>
            <ul className="text-sm space-y-2 opacity-90 mb-6">
              <li>• 1 hosted virtual mind</li>
              <li>• Psychology-backed onboarding</li>
              <li>• Private by default</li>
              <li>• Export persona JSON</li>
            </ul>
            <button
              onClick={() => go("creator")}
              disabled={loading === "creator"}
              className="px-5 py-3 rounded-2xl bg-gold text-black font-semibold hover:opacity-90 transition w-full"
            >
              {loading === "creator" ? "Redirecting…" : "Choose Creator"}
            </button>
          </div>

          {/* Pro */}
          <div className="bg-panel rounded-2xl p-6 border border-neutral-800 shadow-card">
            <h2 className="text-2xl font-bold mb-1">Pro</h2>
            <div className="text-gold text-3xl font-extrabold mb-4">$49<span className="text-base text-white/80"> / month</span></div>
            <ul className="text-sm space-y-2 opacity-90 mb-6">
              <li>• Up to 5 virtual minds</li>
              <li>• Embed/widget access</li>
              <li>• Priority generation</li>
              <li>• Early API access</li>
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
