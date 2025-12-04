import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for using Rajab Ali's Portfolio website.",
  alternates: {
    canonical: "https://rajabali.pk/terms_conditions",
  },
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-300 pt-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms & <span className="text-lime-600">Conditions</span>
          </h1>
          <p className="text-gray-400">
            Please read these terms and conditions carefully before using this website.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-6 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">1. Introduction</h2>
            <p>
              These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, <strong>Rajab Ali Portfolio</strong> accessible at https://rajabali.pk.
            </p>
            <p className="mt-2">
              By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, <strong>Rajab Ali</strong> and/or his licensors own all the intellectual property rights and materials contained in this Website. This includes the source code, design, layout, and portfolio project demonstrations displayed on this site.
            </p>
            <p className="mt-2">
              You are granted a limited license only for purposes of viewing the material contained on this Website. You may not:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-400">
              <li>Republish material from rajabali.pk without proper attribution.</li>
              <li>Sell, rent or sub-license material from the website.</li>
              <li>Reproduce, duplicate or copy material from the website for commercial purposes.</li>
              <li>Redistribute content from Rajab Ali (unless content is specifically made for redistribution).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-400">
              <li>Publishing any Website material in any other media without credit;</li>
              <li>Using this Website in any way that is or may be damaging to this Website;</li>
              <li>Using this Website in any way that impacts user access to this Website;</li>
              <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
              <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">4. Limitation of Liability</h2>
            <p>
              In no event shall Rajab Ali, nor any of his officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Rajab Ali, including his officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">5. Services & Engagement</h2>
            <p>
              This website serves as a portfolio and point of contact for web development services. Submitting a form or contacting Rajab Ali via this website does not create a binding service contract. 
            </p>
            <p className="mt-2">
              All professional web development services, freelance projects, and consulting engagements are subject to a separate written agreement or contract signed by both parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the State of <strong>Pakistan</strong>, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Pakistan for the resolution of any disputes.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-gray-800">
           <Link href="/" className="text-sm text-lime-600 hover:text-lime-600 underline decoration-lime-600/30">
              &larr; Back to Home
           </Link>
        </div>
      </div>
    </main>
  );
}