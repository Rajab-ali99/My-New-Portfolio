'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const Marketingfaqs = [
        {
            question: "1. How soon will I see results from social media marketing?",
            answer:
                "While some results like increased engagement can be seen quickly, building a sustainable pipeline of leads and sales typically takes 1-3 months. This allows us to gather data, refine our strategy, and build momentum for long-term, scalable growth."
        },
        {
            question: "2. How do you measure success and report on it?",
            answer:
                "We focus on metrics that matter to your business, not just vanity numbers. Our monthly reports clearly detail performance against your goals, including lead generation, conversion rates, website traffic from social, and Return on Ad Spend (ROAS)."
        },
        {
            question: "3. Who will be creating the content for our accounts?",
            answer:
                "Our in-house team of skilled designers, videographers, and copywriters creates all content. We work closely with you to ensure every piece is on-brand and aligned with your strategy. You maintain final approval on all content. Moreover, you can provide it yourself too."
        },
        {
            question: "4. What is your approach to social media advertising?",
            answer:
                "We start with a clear objective and a well-defined target audience. We then A/B test ad creative, copy, and targeting to find the winning combination. Our focus is always on achieving the lowest cost per result and the highest possible ROI for your budget."
        },
        {
            question: "5. How do we communicate and stay updated on our campaign's progress?",
            answer:
                "You'll have a dedicated Account Manager as your single point of contact. We schedule regular strategy calls and provide access to a live reporting dashboard, ensuring you're always informed and involved."
        },

    ];
     const Tradingfaqs = [
        {
            question: "1. I'm a complete beginner. Is this service suitable for me?",
            answer:
                "Absolutely. Our structured foundation courses are designed specifically for beginners. We start with the basics and progressively build your knowledge, ensuring you have the confidence to move to more advanced topics and tools."
        },
        {
            question: "2. How much capital do I need to start trading with your AI strategies?",
            answer:
                "The required capital depends on the specific market and strategy. We always teach and emphasize the principle of risk management, advising traders to start with only what they can afford to lose. Our training covers position sizing and risk management before you ever place a trade."
        },
        {
            question: `3. Do you provide guaranteed profits or specific "buy/sell" signals?`,
            answer:
                "No reputable educator can guarantee profits, and we are no different. The markets are inherently risky. Instead, we empower you with the education, tools, and analytical skills to make your own informed decisions. We teach you how to fish; we don't just give you a fish."
        },
        {
            question: "4. What kind of time commitment is required to see results?",
            answer:
                "Trading is a skill that requires practice and dedication. We recommend setting aside a few hours per week for learning and market analysis. The more you engage with the material, live sessions, and community, the faster you will progress."
        },
        {
            question: "5. What sets your AI automation apart from other trading bots?",
            answer:
                `Our focus is on education and strategy. We don't just sell a "black box" bot. We teach you the logic behind the automation, how to backtest it, and how to manage it, giving you full understanding and control over your automated trading activities.`
        },

    ];
      const Shopifyfaqs = [
        {
            question: "1. Do I need to have my products ready before we start?",
            answer:
                "It's highly recommended to have your product catalog (images, descriptions, variants) prepared. This allows us to design and build the store around your actual inventory, leading to a more accurate and effective final product."
        },
        {
            question: "2. Can you customize my store beyond a basic theme?",
            answer:
                "Absolutely. While we can customize pre-built themes, our specialty is custom theme development. We code from scratch to create a truly one-of-a-kind store that is perfectly tailored to your brand and business goals."
        },
        {
            question: `3. How do you handle SEO for my Shopify store?`,
            answer:
                "SEO is foundational to our process. We implement core technical SEO, optimize page speed, structure your site architecture for crawlability, and ensure all product pages and content are fully optimized to rank on search engines."
        },
        {
            question: "4. What happens after my store launches?",
            answer:
                "We provide full training on managing your new Shopify store. For long-term success, we offer ongoing Maintenance & Support Plans to handle updates, security, and provide technical assistance so you can focus on running your business."
        },
        {
            question: "5. What is not included in your Shopify development service?",
            answer:
                `Our core service covers design, development, and setup. We do not typically provide product photography, marketing campaign management, or continuous content creation, though we offer these as separate sub-services and can provide trusted partner recommendations.`
        },

    ];
      const Webfaqs = [
        {
            question: "1. What is your typical project timeline for a custom website?",
            answer:
                "Timelines vary based on scope and complexity, but a standard marketing website typically takes 6-10 weeks from kickoff to launch. We provide a detailed project timeline after our initial discovery session."
        },
        {
            question: "2. How do you handle content and assets for the new site?",
            answer:
                "We guide you through the entire process. You provide the core brand content (text, images, etc.), and our team handles the strategic implementation, optimization, and formatting. We can also connect you with trusted copywriting and photography partners if needed."
        },
        {
            question: `3. Will my website be optimized for search engines (SEO)?`,
            answer:
                "Absolutely. Technical SEO is a foundational part of our development process. We build with SEO best practices in mind, ensuring your site is fast, mobile-friendly, and easily crawlable by search engines, giving you a strong head start."
        },
        {
            question: "4. What happens after my website launches?",
            answer:
                "Our partnership doesn't end at launch. We offer comprehensive handover sessions and provide documentation. For ongoing success, we offer tailored Maintenance & Support Plans to handle security, updates, and any future needs."
        },
        {
            question: "5. How is the pricing structured for a custom website?",
            answer:
                `We provide fixed-price project quotes based on the detailed scope we define together during the discovery phase. This ensures no surprise costs and allows you to budget confidently for your investment.`
        },

    ];
      const Wordpressfaqs = [
        {
            question: "1. Will I be able to update the website content myself?",
            answer:
                "Absolutely. A core benefit of WordPress is its user-friendly content management system (CMS). We build your site with this in mind and provide you with training, so you can easily update text, images, and blog posts anytime without needing to code."
        },
        {
            question: "2. How is a custom WordPress theme better than using a pre-made theme?",
            answer:
                "Pre-made themes are built for a generic audience and are often bloated with code you don't need, slowing down your site. A custom theme is built exclusively for your brand and goals, resulting in a faster, more secure, and unique website that provides a superior user experience."
        },
        {
            question: `3. What about website security?`,
            answer:
                "Security is a top priority. We implement foundational security best practices during development, including secure login procedures and careful plugin vetting. For ongoing protection, we strongly recommend our Website Care Plan to handle security monitoring, malware scanning, and core updates."
        },
        {
            question: "4. Do you provide hosting for the websites you build?",
            answer:
                "While we don't provide hosting directly, we have strong partnerships with elite, managed WordPress hosting providers. We will provide a clear recommendation based on your traffic and technical needs and can handle the entire setup process for you."
        },
        {
            question: "5. What is included in your ongoing Maintenance Plan?",
            answer:
                `Our Maintenance Plan is designed to protect your investment. It typically includes regular WordPress core and plugin updates, security monitoring, daily off-site backups, performance optimization, and a quota of support time for small tweaks and issues.
`
        },

    ];
      const LLCfaqs = [
        {
            question: "1. What documents and information do I need to provide to get started?",
            answer:
                "The requirements vary by country, but typically we need scanned copies of your passport/ID, proof of address, and basic company details (proposed name, business activity, shareholding structure). We provide a simple, customized checklist after our initial consultation."
        },
        {
            question: "2. How long does the entire company formation process take?",
            answer:
                `Processing times depend on the government body. Typically:
                 USA LLC: 3-10 business days
                 UK Ltd: 24-48 hours
                 Pakistan (Pvt) Ltd: 10-20 business days
                 We provide a precise timeline upon selecting your jurisdiction.`
        },
        {
            question: `3. What is the difference between an Active and Inactive Taxpayer in Pakistan, and why does it matter?`,
            answer:
                "An Active Taxpayer is someone who has filed their tax return for the latest tax year. This status is crucial as it avoids a penalty on many financial transactions, makes you eligible for tax refunds, and is often required for government tenders and business licenses."
        },
        {
            question: "4. Do your fees include government charges?",
            answer:
                "Our service fee is separate from mandatory government filing fees. We believe in total transparency. Our initial quote will clearly itemize our professional service fee and the exact government charges so you see the full picture upfront."
        },
        {
            question: "5. Will I need to be physically present for any part of the process?",
            answer:
                `For most standard company formations, no physical presence is required. We act on your behalf through powers of attorney and other legal documents. The process is designed to be completely remote and hassle-free for you.`
        },

    ];
     const Tutionfaqs = [
        {
            question: "1. Do you work with established institutions or only individual coaches?",
            answer:
                "We partner with both. Our solutions are scalable, serving individual experts launching their first course as well as established coaching businesses and formal education providers looking to enhance or migrate their online offerings."
        },
        {
            question: "2. What exactly do you deliver, and how long does a typical project take?",
            answer:
                `We deliver a fully functional, high-converting online education platform tailored to your brand, including website, payment integration, and student onboarding. Project timelines typically range from 4 to 12 weeks, depending on the scope and complexity of your specific requirements.`
        },
        {
            question: `3. How do you handle the technical side of hosting and maintenance?`,
            answer:
                "We offer managed hosting solutions to ensure your platform is fast, secure, and always online. We also provide ongoing maintenance and support packages to handle updates and technical issues, so you don't have to."
        },
        {
            question: "4. Can you help us market our courses, or do you just build the platform?",
            answer:
                "Absolutely. While our core service is building the platform, we offer comprehensive marketing sub-services—including funnel design, content strategy, and paid ads—to ensure you attract students effectively. We can build the engine and help you fuel it."
        },
        {
            question: "5. What is your pricing structure?",
            answer:
                `We provide custom project quotes based on your specific goals and requirements. This ensures you only pay for what you truly need. We discuss budget and ROI expectations transparently from our very first conversation.`
        },

    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-[#0b0b0b] px-6 md:px-10">
            <div className="flex justify-center items-center flex-col ">
                <span className="text-emerald-500 text-sm font-black px-3 mb-3 py-0.5 rounded-full bg-gray-800">FREQUENTLY ASKED QUESTIONS</span>                   
                 
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
                    We've Got Answers!
                </h2>
            </div>
            <div className="max-w-4xl mx-auto">
                 <h2 className="text-center text-2xl text-red-500 font-bold my-2">About Marketing</h2>
                {Marketingfaqs.map((faq, index) => (
                    <div
                        key={index}
                        className="mb-4 bg-[#121212] border border-white/10 rounded-4xl p-5 transition-all duration-300"
                    >
                        {/* Header */}
                        <button
                            className="w-full flex justify-between cursor-pointer  items-center text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-white font-bold text-sm  md:text-xl">
                                {faq.question}
                            </span>
                            <motion.div
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="p-2 bg-emerald-500 rounded-full text-black"
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="overflow-hidden mt-3"
                                >
                                    <p className="text-gray-300 font-semibold text-xs md:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
            <div className="max-w-4xl mx-auto">
                 <h2 className="text-center text-2xl font-bold mt-10 text-red-500 my-2">About Trading</h2>
                {Tradingfaqs.map((faq, index) => (
                    <div
                        key={index}
                        className="mb-4 bg-[#121212] border border-white/10 rounded-4xl p-5 transition-all duration-300"
                    >
                        {/* Header */}
                        <button
                            className="w-full flex justify-between cursor-pointer  items-center text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-white font-bold text-sm  md:text-xl">
                                {faq.question}
                            </span>
                            <motion.div
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="p-2 bg-emerald-500 rounded-full text-black"
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="overflow-hidden mt-3"
                                >
                                    <p className="text-gray-300 font-semibold text-xs md:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
            <div className="max-w-4xl mx-auto">
                 <h2 className="text-center text-2xl font-bold mt-10 text-red-500 my-2">About Shopify Store</h2>
                {Shopifyfaqs.map((faq, index) => (
                    <div
                        key={index}
                        className="mb-4 bg-[#121212] border border-white/10 rounded-4xl p-5 transition-all duration-300"
                    >
                        {/* Header */}
                        <button
                            className="w-full flex justify-between cursor-pointer  items-center text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-white font-bold text-sm  md:text-xl">
                                {faq.question}
                            </span>
                            <motion.div
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="p-2 bg-emerald-500 rounded-full text-black"
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="overflow-hidden mt-3"
                                >
                                    <p className="text-gray-300 font-semibold text-xs md:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
            <div className="max-w-4xl mx-auto">
                 <h2 className="text-center text-2xl font-bold mt-10 text-red-500 my-2">About Custom Web Development</h2>
                {Webfaqs.map((faq, index) => (
                    <div
                        key={index}
                        className="mb-4 bg-[#121212] border border-white/10 rounded-4xl p-5 transition-all duration-300"
                    >
                        {/* Header */}
                        <button
                            className="w-full flex justify-between cursor-pointer  items-center text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-white font-bold text-sm  md:text-xl">
                                {faq.question}
                            </span>
                            <motion.div
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="p-2 bg-emerald-500 rounded-full text-black"
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="overflow-hidden mt-3"
                                >
                                    <p className="text-gray-300 font-semibold text-xs md:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
            <div className="max-w-4xl mx-auto">
                 <h2 className="text-center text-2xl font-bold mt-10 text-red-500 my-2">About Wordpress Development</h2>
                {Wordpressfaqs.map((faq, index) => (
                    <div
                        key={index}
                        className="mb-4 bg-[#121212] border border-white/10 rounded-4xl p-5 transition-all duration-300"
                    >
                        {/* Header */}
                        <button
                            className="w-full flex justify-between cursor-pointer  items-center text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-white font-bold text-sm  md:text-xl">
                                {faq.question}
                            </span>
                            <motion.div
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="p-2 bg-emerald-500 rounded-full text-black"
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="overflow-hidden mt-3"
                                >
                                    <p className="text-gray-300 font-semibold text-xs md:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
            <div className="max-w-4xl mx-auto">
                 <h2 className="text-center text-2xl font-bold mt-10 text-red-500 my-2">About LLC Ltd & Pvt</h2>
                {LLCfaqs.map((faq, index) => (
                    <div
                        key={index}
                        className="mb-4 bg-[#121212] border border-white/10 rounded-4xl p-5 transition-all duration-300"
                    >
                        {/* Header */}
                        <button
                            className="w-full flex justify-between cursor-pointer  items-center text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-white font-bold text-sm  md:text-xl">
                                {faq.question}
                            </span>
                            <motion.div
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="p-2 bg-emerald-500 rounded-full text-black"
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="overflow-hidden mt-3"
                                >
                                    <p className="text-gray-300 font-semibold text-xs md:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
            <div className="max-w-4xl mx-auto">
                 <h2 className="text-center text-2xl font-bold mt-10 text-red-500 my-2">About Coaching/Tutoring Services</h2>
                {LLCfaqs.map((faq, index) => (
                    <div
                        key={index}
                        className="mb-4 bg-[#121212] border border-white/10 rounded-4xl p-5 transition-all duration-300"
                    >
                        {/* Header */}
                        <button
                            className="w-full flex justify-between cursor-pointer  items-center text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-white font-bold text-sm  md:text-xl">
                                {faq.question}
                            </span>
                            <motion.div
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="p-2 bg-emerald-500 rounded-full text-black"
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="overflow-hidden mt-3"
                                >
                                    <p className="text-gray-300 font-semibold text-xs md:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
