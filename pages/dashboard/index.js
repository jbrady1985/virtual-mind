import { getSession } from "next-auth/react";
import Link from "next/link";

export default function Dashboard({ user }) {
  return (
    <main className="min-h-screen">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b border-neutral-900">
        <a href="/" className="text-2xl font-bold">
          <span className="text-gold">Virtual</span>-Mind
        </a>
        <div className="flex items-center gap-4">
          <span className="text-sm opacity-70">{user?.name || user?.email}</span>
          <a href="/api/auth/signout" className="px-4 py-2 rounded-2xl border border-neutral-700 hover:border-gold transition text-sm">
            Sign out
          </a>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Welcome back{user?.name ? `, ${user.name}` : ""}
          </h1>
          <p className="opacity-70 mt-1">Manage your virtual minds from here</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="bg-panel rounded-2xl p-5 border border-neutral-800">
            <div className="text-sm opacity-70 mb-1">Current Plan</div>
            <div className="text-gold font-semibold text-lg">No active plan</div>
            <Link href="/pricing" className="text-xs opacity-50 hover:text-gold mt-1 block">Upgrade →</Link>
          </div>
          <div className="bg-panel rounded-2xl p-5 border border-neutral-800">
            <div className="text-sm opacity-70 mb-1">Minds Created</div>
            <div className="text-white font-semibold text-lg">0</div>
          </div>
          <div className="bg-panel rounded-2xl p-5 border border-neutral-800">
            <div className="text-sm opacity-70 mb-1">Messages This Month</div>
            <div className="text-white font-semibold text-lg">0</div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Your Minds</h2>
          <Link href="/dashboard/minds/new" className="px-4 py-2 rounded-2xl bg-gold text-black font-semibold hover:opacity-90 transition text-sm">
            + Create Mind
          </Link>
        </div>
        <div className="bg-panel rounded-2xl p-8 border border-neutral-800 text-center">
          <p className="opacity-50 text-sm">No minds yet. Create your first virtual mind to get started.</p>
          <Link href="/dashboard/minds/new" className="mt-4 inline-block px-5 py-3 rounded-2xl bg-gold text-black font-semibold hover:opacity-90 transition text-sm">
            Create your first mind
          </Link>
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: session.user,
    },
  };
}