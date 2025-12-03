export default function Refund() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-semibold mb-6">Refund Policy</h1>
      <p className="opacity-80 mb-4">
        At Virtual-Mind, we aim to ensure satisfaction with every purchase.
        Refunds are handled according to the type of plan you have selected.
      </p>
      <ul className="list-disc ml-6 opacity-80 space-y-2">
        <li>
          <strong>Monthly subscriptions:</strong> You may cancel anytime. We do
          not issue partial refunds for the current billing period, but your
          access will remain active until the end of the month.
        </li>
        <li>
          <strong>Annual plans:</strong> Refunds are available within 14 days of
          purchase, prorated for unused time. After that period, the subscription
          remains active for its full term.
        </li>
        <li>
          <strong>One-time purchases:</strong> All sales are final unless the
          product fails to function as described.
        </li>
      </ul>
      <p className="mt-6 opacity-80">
        To request a refund or discuss eligibility, email us at{" "}
        <a
          href="mailto:support@virtual-mind.ai"
          className="text-gold hover:underline"
        >
          support@virtual-mind.ai
        </a>.
      </p>
    </main>
  );
}
