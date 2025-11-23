'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React from 'react'
import about from '@/public/assets/about/about.webp'
import Image from 'next/image'
import founder from '@/public/assets/about/founder.png'
import rjb from '@/public/assets/about/rjb.png'
import hmza from '@/public/assets/about/hmz.png'

import { DiRaphael } from "react-icons/di";
import ScrollSteps from "@/components/ScrollSteps";
import Faqs from "@/components/FAQS";
import ContactSection from "@/components/ContactForm";

const AboutPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "01. Our History",
            answer:
                "Founded by digital strategist and visionary Malik Asif, Bullish Pixel began as a bold idea fueled by passion for innovation and a deep commitment to client success. Starting in 2018, Malik launched the company with a small, dedicated team focused on transforming brands through data-driven digital marketing and trading expertise. \n\nFrom humble beginnings serving local businesses and e-commerce ventures, Bullish Pixel quickly gained recognition for its creative solutions and results-oriented approach. By 2018, the team had grown significantly, expanding its services across trading, digital marketing, and e-commerce sectors, building a diverse portfolio of forward-thinking clients. \n\nIn 2023, Bullish Pixel marked a new chapter, embracing cutting-edge technology and strategic innovation to become a recognized leader in the digital space. With a talented team of experts and a client-first mindset, the agency expanded its reach nationally and internationally—delivering measurable impact and long-term growth for brands. \n\nAs we look to the future, Bullish Pixel remains grounded in Malik Asif’s founding vision: to bridge technology and human connection, fostering innovation, integrity, and excellence. Our commitment is to empower businesses to not just survive, but thrive in an ever-evolving digital world—one pixel at a time."
        },
        {
            question: "02.Our Mission",
            answer:
                "At Bullish Pixel, our mission is to empower businesses to excel in the digital era by delivering innovative, data-driven strategies and personalized solutions that drive measurable growth. We are dedicated to being trusted partners, committed to transparency, creativity, and excellence in every project. \n\nWith integrity at our core and a relentless focus on client success, we strive to inspire confidence, exceed expectations, and build lasting relationships. Together, we aim to shape a future where technology and human connection unite to create meaningful impact—pixel by pixel."
        },
        {
            question: "03. Our Vision",
            answer:
                "At Bullish Pixel, our vision is to lead the evolution of digital innovation—transforming how businesses engage with their audiences and achieve lasting success. We strive to be a global beacon of creativity, strategic excellence, and client-centric service. \n\nThrough continuous innovation, collaboration, and an unwavering commitment to quality, we empower businesses of all sizes to not only adapt but thrive in the rapidly changing digital world. Together, we’re shaping the future—one pixel at a time."
        },


    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='md:p-10 p-3'>
            <div className='relative'>
                <div className='relative'>
                    <Image className='w-full md:mt-13 mt-20 object-cover rounded-4xl h-[250px] md:h-[350px]' src={about.src} height={about.height} width={about.width} alt='about img' />
                    <div className="absolute z-20 inset-0 bg-gradient-to-t bottom-0  from-black/90 via-black/10 to-transparent" />
                </div>
                <div className='flex justify-center'>

                    <h2 className='md:text-6xl text-4xl absolute font-black bottom-6 text-center z-30'>Hey There! Welcome to <span className='text-emerald-500 block'>Bullish <span className="text-red-500">Pixel!</span></span></h2>
                </div>
            </div>
            {/* About */}
            <section>
                <div className="flex flex-col md:flex-row mt-10 items-center gap-3 md:gap-10">
                    <span className="text-emerald-500 text-lg md:text-xl font-black px-3 py-0.5 rounded-full bg-gray-800">WHO WE ARE?</span>
                    <h2 className="font-black text-4xl md:text-6xl">About our Company!</h2>
                </div>
                <div className='flex flex-col md:py-10 md:flex-row gap-10 md:gap-5'>
                    <div className='md:w-[55%]  py-5 md:py-0 md:pt-8 md:p-0 md:text-start text-xl md:text-2xl font-bold text-gray-500'>
                        Welcome to <span className="text-emerald-500">Bullish</span> <span className="text-red-500">Pixel</span> — where creativity meets strategy and innovation fuels growth. We’re not just a digital marketing agency we’re a dedicated team of visionaries, problem-solvers, and tech enthusiasts committed to transforming your brand’s digital presence.

                        Driven by passion and guided by data, we blend creativity with cutting-edge technology to deliver tailored solutions that inspire, engage, and deliver real results. At Bullish Pixel, every pixel matters — because we believe the future of your business is built one pixel at a time.

                        Join us on this journey to redefine digital success with bold ideas, relentless innovation, and a client-first mindset. Let’s create something extraordinary together.
                    </div>
                    <div className='md:w-[45%]'>
                        <div className=" w-full">

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
                                        <span className="text-emerald-500 font-black text-xl  md:text-2xl">
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
                                                <div className="text-gray-400 font-semibold   leading-relaxed">
                                                    {faq.answer.split("\n\n").map((para, i) => (
                                                        <p key={i} className="mb-3">
                                                            {para}
                                                        </p>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-10 items-center gap-3 md:gap-10">
                    <span className="text-emerald-500 text-lg md:text-xl font-black px-3 py-0.5 rounded-full bg-gray-800">About Founder</span>
                    <h2 className="font-black text-4xl md:text-6xl">Meet The Founder!</h2>
                </div>
                <div className="text-gray-500 text-xl font-semibold pt-6 md:pt-12 pb-5 md:text-3xl">
                    <span className="text-emerald-500">Malik Asif</span> — the visionary mind behind Bullish Pixel. With deep expertise in <span className="text-white">e-commerce, trading behavior, and digital marketing</span>, his passion for innovation and results fuels our growth. Guided by Malik’s strategic vision and creative leadership, <span className="text-emerald-500">Bullish</span> <span className="text-red-500">Pixel</span> continues to set new standards of excellence.
                </div>
                <div className="md:mx-20 flex py-10 flex-col md:flex-row gap-10">
                    <div className="md:w-1/2 relative  flex justify-center">

                        <Image className="bg-transparent object-contain z-20  w-[80%] rounded-t-full " src={founder.src} height={founder.height} width={founder.width} alt="founder" />
                        <div className="absolute top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-500/80 blur-3xl z-10" />

                        <div className="md:text-7xl text-4xl absolute z-20 bottom-0 md:bottom-3 ps-10 font-black text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]">
                            MALIK <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">ASIF</span>
                        </div>

                    </div>
                    <div className="md:w-1/2 flex flex-col justify-between">
                        <div className="font-bold md:pt-30 text-center md:text-lg md:text-left p-3 md:p-0 text-gray-500">
                            At <span className="text-emerald-500">Bullish <span className="text-red-500">Pixel</span></span>, we envision a future where data-driven creativity and innovation empower every brand to rise above the noise. Our mission is to bridge the gap between <span className="text-white">technology and human connection</span> — transforming ideas into measurable success. <span className="text-white">With Malik Asif’s forward-thinking leadership</span>, we’re building a digital ecosystem where businesses not only grow but thrive with purpose. From AI-powered marketing to next-generation trading insights, Bullish Pixel is committed to leading the digital revolution with transparency, performance, and creativity at its core.

                            We don’t just follow trends — we create them. <span className="text-white">The future is bullish, and it’s pixel by pixel.</span>
                        </div>
                        <div className="flex gap-5 flex-col">
                            <div className="flex gap-5 pt-10 md:flex-row flex-col">
                                <div className="flex justify-center md:justify-baseline items-center px-3 py-1 rounded-full  gap-1 bg-[#1f1d1d]/60">
                                    <DiRaphael className="text-emerald-500 text-3xl" />
                                    <div className="text-xl font-bold">Visionary Thinker</div>

                                </div>
                                <div className="flex items-center justify-center md:justify-baseline px-3 py-1 rounded-full  gap-1 bg-[#1f1d1d]/60">
                                    <DiRaphael className="text-emerald-500 text-3xl" />
                                    <div className="text-xl font-bold">Empathetic Leader</div>

                                </div>
                            </div>
                            <div className="flex gap-5 md:flex-row flex-col">
                                <div className="flex items-center justify-center md:justify-baseline px-3 py-1 rounded-full gap-1 bg-[#1f1d1d]/60">
                                    <DiRaphael className="text-emerald-500 text-3xl" />
                                    <div className="text-xl font-bold">Creative Problem-Solver</div>

                                </div>
                                <div className="flex items-center justify-center md:justify-baseline px-3 py-1 rounded-full  gap-1 bg-[#1f1d1d]/60">
                                    <DiRaphael className="text-emerald-500 text-3xl" />
                                    <div className="text-xl font-bold">Growth-Focused Pioneer</div>

                                </div>
                                
                            </div>
                            <div className="flex gap-5 md:flex-row flex-col">
                                 <div className="flex items-center justify-center md:justify-baseline px-3 py-1 rounded-full  gap-1 bg-[#1f1d1d]/60">
                                    <DiRaphael className="text-emerald-500 text-3xl" />
                                    <div className="text-xl font-bold">Strategic Innovator</div>

                                </div>
                                 <div className="flex items-center justify-center md:justify-baseline px-3 py-1 rounded-full  gap-1 bg-[#1f1d1d]/60">
                                    <DiRaphael className="text-emerald-500 text-3xl" />
                                    <div className="text-xl font-bold">Integrity-Driven Professional</div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <div className="flex justify-center py-20 items-center flex-col ">
                <span className="text-emerald-500 text-sm font-black px-3 mb-3 py-0.5 rounded-full bg-gray-800">HOW WE WORK</span>
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white ">
                    Our 4 Stage Process

                </h2>
            </div>

            <ScrollSteps />
            {/* Our Team */}

            <div className="flex justify-center py-20 items-center flex-col ">
                <span className="text-emerald-500 text-sm  font-black px-3 mb-3 py-0.5 rounded-full bg-gray-800">CORE TEAM MEMBERS</span>
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white ">
                    Say Hello to Our

                </h2>
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white ">
                    Squad
                </h2>
                <p className="text-lg font-bold max-w-sm text-center py-2 text-gray-500">
                   Meet the passionate visionaries and relentless doers — the driving force behind Bullish Pixel’s innovation and success.
                </p>
            </div>
            <div className="md:w-[80vw] flex md:flex-row flex-col gap-10 md:gap-3 md:mx-auto">
                <div className="md:w-1/3  flex flex-col gap-3  ">
                    <div className=" relative p-5 rounded-3xl bg-[#1f1d1d] flex justify-center">

                        <Image className="bg-transparent z-20 h-[400px] object-contain " src={founder.src} height={founder.height} width={founder.width} alt="founder" />
                        <div className="absolute top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-500/50 blur-3xl z-10" />



                    </div>
                    <div className="bg-[#1f1d1d] flex flex-col items-center p-4 rounded-3xl">
                        <h2 className="text-emerald-500 font-extrabold text-2xl">Malik <span className="text-red-500">Asif</span></h2>
                        <p className="font-semibold text-lg text-gray-400">Founder & Instructor  </p>
                    </div>
                </div>

               

                <div className="md:w-1/3  flex flex-col gap-3  ">
                    <div className=" relative p-5 rounded-3xl bg-[#1f1d1d] flex justify-center">

                        <Image className="bg-transparent z-20 h-[400px] object-contain " src={rjb.src} height={rjb.height} width={rjb.width} alt="Rajab" />
                        <div className="absolute top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-500/50 blur-3xl z-10" />



                    </div>
                    <div className="bg-[#1f1d1d] flex flex-col items-center p-4 rounded-3xl">
                        <h2 className="text-emerald-500 font-extrabold text-2xl">Rajab <span className="text-red-500">Ali</span></h2>
                        <p className="font-semibold text-lg text-gray-400">CEO & Web Developer</p>
                    </div>
                </div>

                 <div className="md:w-1/3  flex flex-col gap-3  ">
                    <div className=" relative p-5 rounded-3xl bg-[#1f1d1d] flex justify-center">

                        <Image className="bg-transparent z-20 h-[400px] object-contain " src={hmza.src} height={hmza.height} width={hmza.width} alt="hmza" />
                        <div className="absolute top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-500/50 blur-3xl z-10" />



                    </div>
                    <div className="bg-[#1f1d1d] flex flex-col items-center p-4 rounded-3xl">
                        <h2 className="text-emerald-500 font-extrabold text-2xl">Muhammad <span className="text-red-500">Hamza</span></h2>
                        <p className="font-semibold text-lg text-gray-400">HR & Marketing Expert</p>
                    </div>
                </div>
            </div>
            
            <ContactSection />

        </div>
    )
}

export default AboutPage