import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Rajab Ali - Full Stack Developer Portfolio.",
  alternates: {
    canonical: "https://rajabali.pk/privacy_policy",
  },
};

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-300 pt-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy <span className="text-lime-600">Policy</span>
          </h1>
          <p className="text-gray-400">
            Last Updated: {currentDate}
          </p>
        </header>

        {/* Content */}
        <div className="space-y-6 leading-relaxed">
          <p>
            At <strong>Rajab Ali&apos;s Portfolio</strong> (accessible from https://rajabali.pk), one of my main priorities is the privacy of my visitors and clients. This Privacy Policy document contains types of information that is collected and recorded by my website and how I use it.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">1. Information I Collect</h2>
            <p className="mb-2">
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point I ask you to provide your personal information.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>
                <strong>Client Inquiries:</strong> When you request a quote or contact me for development services, I may collect your name, email address, company name, phone number, and project details (budget, timeline, requirements).
              </li>
              <li>
                <strong>Log Files:</strong> Like many other websites, I use log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">2. How I Use Your Information</h2>
            <p>I use the information I collect in various ways, including to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-400">
              <li>Provide, operate, and maintain my website.</li>
              <li>Respond to your service inquiries, project proposals, and freelance requests.</li>
              <li>Communicate with you regarding project updates, timelines, and deliverables.</li>
              <li>Understand and analyze how you use my website to improve my portfolio showcase.</li>
              <li>Find and prevent fraud.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">3. Cookies and Web Beacons</h2>
            <p>
              Like any other website, Rajab Ali&apos;s Portfolio uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing my web page content based on visitors&apos; browser type and/or other information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">4. Third Party Privacy Policies</h2>
            <p>
              My Privacy Policy does not apply to other advertisers or websites. Thus, I am advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">5. Data Protection Rights (GDPR)</h2>
            <p>
              I would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-400">
              <li>The right to access – You have the right to request copies of your personal data.</li>
              <li>The right to rectification – You have the right to request that I correct any information you believe is inaccurate.</li>
              <li>The right to erasure – You have the right to request that I erase your personal data, under certain conditions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">6. Contact Me</h2>
            <p>
              If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at <a href="mailto:developer@rajabali.com" className="text-lime-600 hover:underline">developer@rajabali.com</a>.
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