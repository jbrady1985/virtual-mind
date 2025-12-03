export default function Refund() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-panel border border-neutral-800 shadow-card rounded-2xl max-w-3xl w-full p-8">
        <h1 className="text-3xl font-extrabold text-gold mb-4">Refund & Cancellation Policy</h1>
        <p className="opacity-90 mb-4">
          We offer a 7-day satisfaction guarantee on new subscriptions. If you are unsatisfied within the first week of your initial purchase, contact us for a full refund.
        </p>
        <p className="opacity-90 mb-4">
          You can cancel your subscription at any time through your Stripe customer portal or by emailing us at <a href="mailto:support@virtual-mind.ai" className="text-gold underline">support@virtual-mind.ai</a>.
        </p>
        <p className="opacity-90 mb-4">
          Upon cancellation, you will retain access to your plan until the end of the billing cycle. Refunds are not provided for partial months beyond the initial 7-day window.
        </p>
        <p className="opacity-70 text-sm mt-6">Effective: {new Date().toLocaleDateString()}</p>
      </div>
    </main>
  );
}
