import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-panel rounded-2xl p-8 border border-neutral-800 shadow-card w-full max-w-md">
        <div className="mb-6">
          <a href="/" className="text-2xl font-bold">
            <span className="text-gold">Virtual</span>-Mind
          </a>
        </div>

        <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
        <p className="opacity-70 text-sm mb-6">
          Sign in to access your virtual minds
        </p>

        {error && (
          <div className="bg-red-900/30 border border-red-700 text-red-300 
          rounded-xl px-4 py-3 text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm opacity-70 mb-1 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-black border border-neutral-700 rounded-xl 
              px-4 py-3 text-white focus:outline-none focus:border-gold"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm opacity-70 mb-1 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-black border border-neutral-700 rounded-xl 
              px-4 py-3 text-white focus:outline-none focus:border-gold"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-2xl bg-gold text-black 
            font-semibold hover:opacity-90 transition"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="text-sm opacity-70 mt-6 text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="text-gold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}