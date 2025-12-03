export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-panel border border-neutral-800 shadow-card rounded-2xl max-w-3xl w-full p-8 text-center">
        <h1 className="text-3xl font-extrabold text-gold mb-4">Contact Us</h1>
        <p className="opacity-90 mb-4">
          For support, billing inquiries, or account questions, please email us at:
        </p>
        <a href="mailto:support@virtual-mind.ai" className="text-gold text-lg font-semibold underline">
          support@virtual-mind.ai
        </a>
        <p className="opacity-80 text-sm mt-6">
          We typically respond within 1–2 business days.
        </p>
      </div>
    </main>
  );
}
