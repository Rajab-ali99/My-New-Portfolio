'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is SEO and why is it important?",
            answer:
                "SEO, or Search Engine Optimization, is the process of improving your website’s visibility in search engines like Google. It helps attract organic traffic, increase brand awareness, and drive leads and sales."
        },
        {
            question: "How long does it take to see results from SEO?",
            answer:
                "Typically, noticeable SEO results appear within 3 to 6 months depending on your competition, website authority, and strategy consistency."
        },
        {
            question: "What are the key factors that influence SEO rankings?",
            answer:
                "Major factors include keyword optimization, quality backlinks, site speed, mobile responsiveness, and valuable content that matches user intent."
        },
        {
            question: "Do I need to hire an SEO agency or can I do SEO myself?",
            answer:
                "You can handle basic SEO yourself, but agencies bring advanced strategies, tools, and experience to help you grow faster and outperform competitors."
        },
        {
            question: "What’s the difference between on-page and off-page SEO?",
            answer:
                "On-page SEO involves optimizing content and structure on your website. Off-page SEO focuses on building authority through backlinks, social signals, and reputation."
        },
        {
            question: "Why is content marketing important for SEO?",
            answer:
                "Content marketing supports SEO by providing valuable, keyword-rich material that improves ranking potential and engages your audience."
        },
        {
            question: "What is local SEO?",
            answer:
                "Local SEO optimizes your website to appear in local search results — perfect for attracting nearby customers and showing up on Google Maps."
        }

    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-[#0b0b0b] px-6 md:px-10">
            <div className="flex justify-center items-center flex-col ">
                <span className="text-emerald-500 text-sm font-black px-3 mb-3 py-0.5 rounded-full bg-gray-800">FREQUENTLY ASKED QUESTIONS</span>                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white ">
                    Got Questions?
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
                    We've Got Answers!
                </h2>
            </div>
            <div className="max-w-4xl mx-auto">

                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="mb-4 bg-[#121212] border border-white/10 rounded-4xl p-5 transition-all duration-300"
                    >
                        {/* Header */}
                        <button
                            className="w-full flex justify-between cursor-pointer  items-center text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-white font-bold text-md  md:text-xl">
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
