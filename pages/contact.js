export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      <p className="opacity-80 mb-4">
        We’re here to help with any questions about your Virtual-Mind account,
        billing, or technical issues.
      </p>
      <p className="opacity-80 mb-4">
        You can reach our support team directly at{" "}
        <a
          href="mailto:support@virtual-mind.ai"
          className="text-gold hover:underline"
        >
          support@virtual-mind.ai
        </a>
        . We usually reply within 1–2 business days.
      </p>
      <p className="opacity-80">
        For partnership or press inquiries, please include “Partnership” or
        “Press” in your subject line so we can route your message quickly.
      </p>
    </main>
  );
}
