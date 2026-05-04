export default function Home() {
  const faqs = [
    {
      q: "How does automatic categorization work?",
      a: "We use OpenAI to analyze your imported bank and credit card transactions and map them to IRS tax deduction categories like home office, software, travel, and more — instantly."
    },
    {
      q: "Is my financial data secure?",
      a: "Yes. We use Plaid's bank-grade encryption for transaction import and never store your banking credentials. Receipts are encrypted at rest in AWS S3."
    },
    {
      q: "What's included in the $19/mo plan?",
      a: "Unlimited transaction imports, AI categorization, receipt matching, tax report exports (PDF/CSV), and priority support. Cancel anytime."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers Earning $50k+
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Tax Deductions{" "}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your bank or credit card. Our AI categorizes every expense into IRS deduction categories and matches receipts — so you keep more of what you earn.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Saving on Taxes — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Plaid Bank Import", "AI Categorization", "Receipt Matching", "PDF/CSV Reports", "Lemon Squeezy Billing"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-xs px-3 py-1 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#6e7681] text-sm mb-6">Everything you need to maximize deductions</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited bank & card imports via Plaid",
              "AI-powered expense categorization",
              "Receipt upload & matching",
              "Tax report export (PDF & CSV)",
              "Home office, travel, software categories",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5 shrink-0">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secured by Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} TaxTrack. Built for freelancers.
      </footer>
    </main>
  );
}
