'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React from 'react'
import about from '@/public/assets/about.webp'
import Image from 'next/image'
import founder from '@/public/assets/founder.png'
import founder1 from '@/public/assets/eds.png'
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
                "Founded in 2010 by digital marketing expert Emily Johnson, Celestial Solutions began as a small consultancy serving local businesses in the bustling city of New York. With a team of just three passionate individuals, the agency quickly gained traction, thanks to its innovative approach and dedication to client success. \n\nBy 2015, Celestial Solutions had expanded its reach, serving clients across the United States and boasting a team of 15 talented professionals.The agency's client portfolio had grown to include a diverse range of industries, from e-commerce startups to established brick-and-mortar businesses. \n\nIn 2020, Celestial Solutions celebrated its 10th anniversary with pride, having grown into a leading digital marketing agency with a global footprint.With offices in New York, London, and Sydney, the agency now serves clients around the world, supported by a team of over 50 experts specializing in SEO, social media marketing, content creation, website design, and more. \n\nAs we look ahead to the next decade, Celestial Solutions remains committed to its founding principles of innovation, integrity, and excellence, continuing to empower businesses to thrive in the ever- evolving digital landscape."
        },
        {
            question: "02.Our Mission",
            answer:
                "At Celestial Solutions, our mission is to empower businesses to thrive in the digital age through innovative strategies, personalized solutions, and unwavering commitment to excellence. We strive to be trusted partners, delivering tangible results and exceptional experiences that drive growth, inspire confidence, and exceed expectations. With integrity, creativity, and a relentless pursuit of success, we are dedicated to shaping a brighter future for our clients and our community."
        },
        {
            question: "03. Our Vision",
            answer:
                "At Celestial Solutions, our vision is to be the leading force in shaping the future of digital marketing, revolutionizing the way businesses connect with their audiences and achieve success online. We aspire to be recognized globally for our innovative strategies, exceptional service, and unwavering commitment to client satisfaction. Through continuous growth, collaboration, and dedication to excellence, we aim to empower businesses of all sizes to thrive in the ever-evolving digital landscape."
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

                    <h2 className='md:text-6xl text-4xl absolute font-black bottom-6 text-center z-30'>Hey There! Welcome to <span className='text-emerald-500 block'>Bullish Pixel!</span></h2>
                </div>
            </div>
            {/* About */}
            <section>
                <div className="flex flex-col md:flex-row mt-10 items-center gap-3 md:gap-10">
                    <span className="text-emerald-500 text-lg md:text-xl font-black px-3 py-0.5 rounded-full bg-gray-800">WHO WE ARE?</span>
                    <h2 className="font-black text-4xl md:text-6xl">About our Company!</h2>
                </div>
                <div className='flex flex-col md:py-10 md:flex-row gap-10 md:gap-5'>
                    <div className='md:w-[55%]  text-center md:pt-8 md:p-0 md:text-start text-2xl md:text-2xl font-bold text-gray-500'>
                        Let's get acquainted! We're not your average digital marketing agency - we're a team of passionate individuals who eat, sleep, and breathe <span className='text-white'>creativity, innovation, and all things digital.</span>At <span className='text-emerald-500'>Bullish Pixel</span>, we're on a mission to make your online <span className='text-emerald-500'>dreams come true</span>, one pixel at a time! We're a bunch of <span className='text-white'>tech-savvy wizards, design enthusiasts,</span> and <span className='text-white'>social media mavens</span> who believe that digital marketing should be fun, exciting, and downright awesome.
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
                <div className="text-gray-500 text-2xl font-semibold pt-12 pb-5 md:text-3xl">
                    <span className="text-emerald-500">Malik Asif</span>, <span className="text-white">the heart</span> of Celestial Solutions. With a decade of <span className="text-white">digital marketing expertise,</span> James's passion for innovation and dedication to clients have guided our journey. His <span className="text-white">strategic vision, client-centered approach, and knack for creative solutions</span> shape our commitment to excellence.
                </div>
                <div className="md:mx-20 flex py-10 flex-col md:flex-row gap-10">
                    <div className="md:w-1/2 relative  flex justify-center">

                        <Image className="bg-transparent z-20  w-[80%] rounded-t-full " src={founder.src} height={founder.height} width={founder.width} alt="founder" />
                        <div className="absolute top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-500/80 blur-3xl z-10" />

                        <div className="md:text-6xl text-4xl absolute z-20 bottom-0 ps-10 font-black text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]">
                            MALIK <span className="text-emerald-500 drop-shadow-[0_0_25px_rgba(16,185,129,0.9)]">ASIF</span>
                        </div>

                    </div>
                    <div className="md:w-1/2 flex flex-col justify-between">
                        <div className="font-bold md:pt-30 text-center md:text-left p-3 md:p-0 text-gray-500">
                            Malik Asif, the driving force behind Celestial Solutions. With over a decade of experience in digital marketing, James's passion for innovation and dedication to client success have been the cornerstone of our agency's growth. His strategic vision and hands-on approach have propelled us to the forefront of the industry, while his commitment to transparency and integrity sets the tone for our team. As a respected leader and mentor, James inspires us to exceed expectations and deliver exceptional results for our clients every day.
                        </div>
                        <div className="flex gap-5 flex-col">
                            <div className="flex gap-5 pt-10 md:flex-row flex-col">
                                <div className="flex justify-center md:justify-baseline items-center px-3 py-1 rounded-full md:my-10 gap-1 bg-[#1f1d1d]/60">
                                    <DiRaphael className="text-emerald-500 text-3xl" />
                                    <div className="text-xl font-bold">Visionary Thinker</div>

                                </div>
                                <div className="flex items-center justify-center md:justify-baseline px-3 py-1 rounded-full md:my-10 gap-1 bg-[#1f1d1d]/60">
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
                                    <div className="text-xl font-bold">Passionate Mentor</div>

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

            <ScrollSteps/>
            {/* Our Team */}

             <div className="flex justify-center py-20 items-center flex-col ">
                <span className="text-emerald-500 text-sm font-black px-3 mb-3 py-0.5 rounded-full bg-gray-800">TEAM MEMBERS</span>                   
                 <h2 className="text-4xl md:text-5xl font-bold text-center text-white ">
                    Say Hello to Our 

                </h2>
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white ">
                    Squad
                </h2>
                <p className="text-lg font-bold max-w-sm text-center py-2 text-gray-500">
                    Get ready to meet the faces behind the magic, the dreamers, the doers, and the unstoppable force driving our success.
                </p>
            </div>
            <div className="md:w-[80vw] flex md:flex-row flex-col gap-10 md:gap-3 md:mx-auto">
                <div className="md:w-1/3  flex flex-col gap-3  ">
                    <div className=" relative p-5 rounded-3xl bg-[#1f1d1d] flex justify-center">

                        <Image className="bg-transparent z-20  " src={founder.src} height={founder.height} width={founder.width} alt="founder" />
                        <div className="absolute top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-500/50 blur-3xl z-10" />

                       

                    </div>
                   <div className="bg-[#1f1d1d] flex flex-col items-center p-4 rounded-3xl">
                    <h2 className="text-emerald-500 font-extrabold text-2xl">Malik Asif</h2>
                    <p className="font-semibold text-lg text-gray-400">Founder, Marketing Expert</p>
                   </div>
                </div>

                <div className="md:w-1/3  flex flex-col gap-3  ">
                    <div className=" relative p-5 rounded-3xl bg-[#1f1d1d] flex justify-center">

                        <Image className="bg-transparent z-20  " src={founder.src} height={founder.height} width={founder.width} alt="founder" />
                        <div className="absolute top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-500/50 blur-3xl z-10" />

                       

                    </div>
                   <div className="bg-[#1f1d1d] flex flex-col items-center p-4 rounded-3xl">
                    <h2 className="text-emerald-500 font-extrabold text-2xl">Muhammad Hamza</h2>
                    <p className="font-semibold text-lg text-gray-400">Marketing Specialist</p>
                   </div>
                </div>

                <div className="md:w-1/3  flex flex-col gap-3  ">
                    <div className=" relative p-5 rounded-3xl bg-[#1f1d1d] flex justify-center">

                        <Image className="bg-transparent z-20  " src={founder.src} height={founder.height} width={founder.width} alt="founder" />
                        <div className="absolute top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-500/50 blur-3xl z-10" />

                       

                    </div>
                   <div className="bg-[#1f1d1d] flex flex-col items-center p-4 rounded-3xl">
                    <h2 className="text-emerald-500 font-extrabold text-2xl">Rajab Ali</h2>
                    <p className="font-semibold text-lg text-gray-400">Senior Full-Stack Developer</p>
                   </div>
                </div>
            </div>
            <div className="md:py-20 py-10">

            <Faqs/>
            </div>
            <ContactSection/>

        </div>
    )
}

export default AboutPage