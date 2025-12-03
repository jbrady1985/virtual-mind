export default function Privacy() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-panel border border-neutral-800 shadow-card rounded-2xl max-w-3xl w-full p-8">
        <h1 className="text-3xl font-extrabold text-gold mb-4">Privacy Policy</h1>
        <p className="opacity-90 mb-4">
          Virtual-Mind.ai respects your privacy. We collect only the minimal information required to provide our service—such as your email, billing information, and answers from your personality quiz.
        </p>
        <p className="opacity-90 mb-4">
          Your data is never sold or shared with third parties. All payments are processed securely by Stripe, and we never store your credit card details.
        </p>
        <p className="opacity-90 mb-4">
          You can request deletion of your account and associated data at any time by emailing us at <a href="mailto:support@virtual-mind.ai" className="text-gold underline">support@virtual-mind.ai</a>.
        </p>
        <p className="opacity-70 text-sm mt-6">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </main>
  );
}
