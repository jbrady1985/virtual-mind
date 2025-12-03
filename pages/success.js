export default function Success() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-panel border border-neutral-800 shadow-card rounded-2xl max-w-xl w-full p-8 text-center">
        <h1 className="text-3xl font-extrabold">
          🎉 <span className="text-gold">Welcome to Virtual-Mind</span>
        </h1>
        <p className="mt-3 opacity-90">
          Your subscription was created successfully (test mode).
        </p>
        <p className="mt-2 text-sm opacity-70">
          You can close this tab or return to the pricing page.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/" className="px-4 py-2 rounded-2xl border border-neutral-700 hover:border-gold transition">Home</a>
          <a href="/pricing" className="px-4 py-2 rounded-2xl bg-gold text-black font-semibold hover:opacity-90 transition">Manage plan</a>
        </div>
      </div>
    </main>
  );
}
