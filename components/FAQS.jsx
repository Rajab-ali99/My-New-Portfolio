'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Lines from "./Lines";

export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

   const DevelopmentFaqs = [
    {
        question: "1. Do you build from scratch or use templates?",
        answer: "I specialize in custom coding using the MERN stack (MongoDB, Express, React, Node.js) and Next.js. This means you get a unique, high-performance website tailored exactly to your business needs—not a generic template that looks like everyone else's."
    },
    {
        question: "2. Can you fix or update my existing MERN/React site?",
        answer: "Yes! I often work with clients who have an existing codebase that needs bug fixes, new features, or a performance upgrade. I can audit your current code and recommend the best path forward."
    },
    {
        question: "3. Will I be able to update the content myself?",
        answer: "Absolutely. I can build a custom Admin Dashboard (CMS) for you, allowing you to easily update text, images, and products without needing to write a single line of code."
    },
    {
        question: "4. How do you handle project milestones and payments?",
        answer: "I work with a milestone-based approach. We break the project into key stages (e.g., Design Approval, Frontend Development, Backend Integration, Final Launch). You release payment for each stage only when you are satisfied with the progress."
    },
    {
        question: "5. Why should I use Next.js instead of WordPress?",
        answer: "Next.js offers superior speed, better security, and significantly better SEO ranking potential compared to WordPress. It scales easily as your business grows, whereas WordPress can become slow and plugin-heavy over time."
    },
    {
        question: "6. Will my website be mobile-responsive and SEO-ready?",
        answer: "Yes. I follow a 'Mobile-First' approach to ensure your site looks perfect on phones, tablets, and desktops. I also implement technical SEO best practices (SSR/SSG) so Google can easily index and rank your pages."
    },
    {
        question: "7. Do you provide the source code?",
        answer: "Yes. You will receive 100% ownership of the source code and all intellectual property upon final payment. I will also help you deploy it to your preferred hosting provider (Vercel, AWS, Heroku, etc.)."
    },
    {
        question: "8. What happens if I find a bug after the project ends?",
        answer: "I offer a 14-day free support period after delivery to fix any bugs or issues that may arise. My goal is to ensure you have a flawless launch."
    },
    {
        question: "9. Can you integrate payment gateways (Stripe/PayPal)?",
        answer: "Yes, as a full-stack developer, I can securely integrate payment processors like Stripe, PayPal, or Razorpay to handle subscriptions and one-time payments for your e-commerce or SaaS platform."
    },
    {
        question: "10. How do we communicate during the project?",
        answer: "I am flexible and can communicate via your preferred platform (Upwork/Fiverr chat, Zoom, or Slack). I provide updates every 24-48 hours so you never have to guess where your project stands."
    }
];


    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-[#0b0b0b] px-6 md:px-10">
            <div className="flex justify-center items-center flex-col ">
                <span className="text-lime-600 text-sm font-semibold px-3 mb-1 py-1 rounded-full bg-[#212121]">Frequently Asked Questions</span>                   
                 
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white ">
                    We've Got <span className="text-lime-500">Answers!</span>
                </h2>
                <Lines />
                <p className='text-center md:text-base text-xs mb-8 md:mb-12 max-w-3xl text-gray-500 font-semibold mx-auto'>Everything you need to know about how I work, my process, and what you can expect when we partner together. </p>
            </div>
            <div className="md:max-w-4xl mx-auto">
                {DevelopmentFaqs.map((faq, index) => (
                    <div
                        key={index}
                        className="mb-4 bg-[#121212] border border-white/10 rounded-3xl md:rounded-4xl p-4 md:p-5 transition-all duration-300"
                    >
                        {/* Header */}
                        <button
                            className="w-full flex justify-between gap-2 cursor-pointer  items-center text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-white font-semibold text-xs   md:text-lg">
                                {faq.question}
                            </span>
                            <motion.div
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="p-2 bg-lime-700 rounded-full text-black"
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
                                    <p className="text-gray-500 font-semibold text-xs md:text-base leading-relaxed">
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
