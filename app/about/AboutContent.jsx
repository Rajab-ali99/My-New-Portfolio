'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React from 'react'
import about from '@/public/assets/about/abot.jpg'
import Image from 'next/image'

import rjb from '@/public/assets/about/rjb.png'

import { DiRaphael } from "react-icons/di";
import ScrollSteps from "@/components/ScrollSteps";
import Faqs from "@/components/FAQS";
import ContactSection from "@/components/ContactForm";
import Lines from "@/components/Lines";
import Typewrite from "@/components/Typewriter";
export const metadata = {
  title: "About",
  description:
    "Learn about Rajab Ali — Full Stack Developer with expertise in MERN, Next.js, and modern web application development.",
  openGraph: {
    title: "About — Rajab Ali",
    description:
      "Full-stack developer specializing in MERN & Next.js. Discover my background, skills, and experience.",
    url: "https://rajabali.pk/about",
    images: ["/og-about.png"],
  },
  alternates: {
    canonical: "https://rajabali.pk/about",
  },
};


const AboutContent = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "01. History!",
            answer:
                "My journey in development started with curiosity — a desire to understand how websites and apps work behind the scenes. Over the past few years, that curiosity evolved into a strong skill set shaped by consistent learning, real-world projects, and hands-on experience across multiple technologies. \n\nFrom small UI experiments to full-scale web applications, I have grown into a developer who values problem-solving, performance optimization, and clean architecture. Each project has taught me something new, helping me sharpen my expertise in both frontend and backend development."
        },
        {
            question: "02.My Mission!",
            answer:
                "I aim to deliver applications that not only look great, but also perform flawlessly and offer meaningful user experiences. With every project, I strive to:\n\n1. Write clean and maintainable code\n\n2. Build secure and scalable systems\n\n3. Deliver on-time, reliable results\n\n4. Add genuine value to clients and users\n\nI am committed to constant growth, keeping myself updated with modern tools, frameworks, and industry trends."
        },
        {
            question: "03. My Vision!",
            answer:
                "I aim to grow into a tech professional who:\n\n1. Creates innovative and future-ready web solutions\n\n2. Contributes to impactful digital ecosystems\n\n3. Adapts, evolves, and stays ahead in the fast-changing tech world\n\n4. Turns complex ideas into simple, powerful applications\n\nUltimately, I want to leave a mark through technology — one project at a time."
        },


    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='md:p-10 p-3'>
            <div className='relative'>
                <div className='relative'>
                    <Image className='w-full md:mt-13 mt-20 object-contain md:object-cover rounded-4xl h- md:h-[350px]' src={about.src} height={about.height} width={about.width} alt='About Rajab Ali' />
                    <div className="absolute z-20 inset-0 bg-gradient-to-t bottom-0  from-black/90 via-black/10 to-transparent" />
                </div>
            </div>
            {/* About */}
            <section>
                <div className="flex flex-col md:flex-row mt-10 items-center gap-3 md:gap-10">
                    <span className="text-lime-600 font-semibold md:text-sm  px-3 py-1 rounded-full bg-[#121212]">Who I'm?</span>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <h2 className="font-bold text-3xl md:text-5xl">About <span className="text-lime-500">Me!</span></h2>
                        <Lines />
                    </div>
                </div>
                <div className="px-2 md:px-0">

                <Typewrite />
                </div>
                <div className='flex flex-col md:pb-10 md:pt-0 md:flex-row gap-5 md:gap-5'>
                    <div className='md:w-[55%] text-sm md:text-base p-2 py-5 md:py-0 md:pt-5 md:p-0 md:text-start  font-semibold text-gray-500'>
                        Welcome to the world of development — where creativity meets clean code and purposeful design. I’m Rajab Ali, a dedicated Full Stack Developer (MERN & Next.js) committed to building modern, fast, and user-focused digital experiences.

                        I specialize in transforming ideas into fully functional applications using React, Next.js, Node.js, Express, TypeScript, and MongoDB. What drives me is the satisfaction of turning challenges into elegant solutions and helping businesses grow with the power of technology.

                        Every project I take on is crafted with precision, scalability, and long-term vision — because I believe that great digital products are built with both creativity and engineering discipline. Let’s build something meaningful together!
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
                                        <span className="text-lime-600 font-semibold text-lg  md:text-xxl">
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="p-2 bg-lime-600 rounded-full text-white"
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
                                                <div className="text-gray-400 text-xs md:text-sm font-semibold   leading-relaxed">
                                                    {faq.answer.split("\n\n").map((para, i) => (
                                                        <p key={i} className="mb-0.5">
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
                    <span className="text-lime-600 text-sm font-semibold px-3 py-1 rounded-full bg-[#121212]">About Developer</span>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <h2 className="font-semibold text-3xl md:text-5xl">Meet The <span className="text-lime-500">Developer!</span></h2>
                        <Lines />
                    </div>
                </div>
                <div className="text-gray-500 text-sm md:text-base  font-semibold pt-6 md:pt-12  ">
                    <span className="text-red-500 text-lg">Rajab <span className="text-lime-600">Ali</span></span> a passionate Full Stack Developer dedicated to building modern, scalable, and user-focused digital experiences. With hands-on expertise in React, Next.js, Node.js, Express, and MongoDB, he designs seamless front-end interfaces and powerful back-end architectures that work smoothly together.

                    My journey in web development is fueled by a strong drive for self-improvement, continuous learning, and solving real-world problems through clean code and creative thinking. I combines technical skill with an eye for design, delivering applications that are not only functional — but fast, responsive, and meaningful for users.
                </div>
                <div className="md:mx-20 flex py-10 flex-col md:flex-row gap-10">
                    <div className="md:w-1/2 relative  flex justify-center">

                        <Image className="bg-transparent object-contain z-20  w-[80%] rounded-t-full " src={rjb.src} priority={true} height={rjb.height} width={rjb.width} alt="Rajab Ali Full stack Developer" />
                        <div className="absolute top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-lime-600/80 blur-3xl z-10" />


                    </div>
                    <div className="md:w-1/2 flex flex-col gap-5 justify-center">
                        <div className="font-semibold md:pt-8 text-sm md:text-sm md:text-left p-3 md:p-0 text-gray-500">
                            <p>

                                As a <span className="text-white">MERN Stack Developer</span>, I am committed to building high-quality, efficient, and user-centered web applications tailored to the unique needs of each client. With over <span className="text-white">3 years of practical experience</span> in full-stack development, I specialize in <span className="text-white">React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB</span>, delivering scalable, secure, and performance-driven solutions.

                            </p>
                            <p>
                                At the core of every project, Rajab aims to merge technology with human experience. Whether it's building a full-stack web application, designing intuitive UI/UX, or implementing secure and <span className="text-white">optimized APIs</span>, he focuses on <span className="text-white">crafting solutions</span> that bring real value to clients and businesses.

                                With a forward-thinking mindset and a <span className="text-white">commitment to excellence</span>, Rajab is shaping his place in the digital world — one project at a time.
                            </p>
                            <p>

                            Driven by a passion for <span className="text-white">solving complex challenges</span> and developing innovative solutions, I continuously expand my skills and stay updated with the latest tools, technologies, and industry trends to ensure that my work remains modern, reliable, and impactful.
                            </p>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <div className="flex gap-2 md:gap-5 md:flex-row flex-col">
                                <div className="flex justify-center md:justify-baseline items-center px-3 py-1 rounded-full  gap-1 bg-[#1f1d1d]/60">
                                    <DiRaphael className="text-lime-600 text-3xl" />
                                    <div className=" font-semibold">Visionary Thinker</div>

                                </div>
                                <div className="flex items-center justify-center md:justify-baseline px-3 py-1 rounded-full  gap-1 bg-[#1f1d1d]/60">
                                    <DiRaphael className="text-lime-600 text-3xl" />
                                    <div className=" font-semibold">Innovative Developer</div>

                                </div>
                            </div>
                            <div className="flex gap-2 md:gap-5 md:flex-row flex-col">
                                <div className="flex items-center justify-center md:justify-baseline px-3 py-1 rounded-full gap-1 bg-[#1f1d1d]/60">
                                    <DiRaphael className="text-lime-600 text-3xl" />
                                    <div className=" font-semibold">Creative Problem-Solver</div>

                                </div>
                                <div className="flex items-center justify-center md:justify-baseline px-3 py-1 rounded-full  gap-1 bg-[#1f1d1d]/60">
                                    <DiRaphael className="text-lime-600 text-3xl" />
                                    <div className=" font-semibold">Solution-Driven Engineer</div>

                                </div>

                            </div>
                            <div className="flex gap-2 md:gap-5 md:flex-row flex-col">
                                <div className="flex items-center justify-center md:justify-baseline px-3 py-1 rounded-full  gap-1 bg-[#1f1d1d]/60">
                                    <DiRaphael className="text-lime-600 text-3xl" />
                                    <div className=" font-semibold">Strategic Innovator</div>

                                </div>
                                <div className="flex items-center justify-center md:justify-baseline px-3 py-1 rounded-full  gap-1 bg-[#1f1d1d]/60">
                                    <DiRaphael className="text-lime-600 text-3xl" />
                                    <div className=" font-semibold">Performance-Focused Coder</div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <div className="flex justify-center py-20 items-center flex-col ">
                <span className="text-lime-600 text-sm font-semibold px-3 mb-3 py-1 rounded-full bg-[#121212]">How I Work</span>
                <div className="flex flex-col items-center justify-center gap-4">

                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white ">
                        Our 4 Stage <span className="text-lime-500">Process</span>

                    </h2>
                    <Lines />
                </div>
            </div>

            <ScrollSteps />

            <ContactSection />

        </div>
    )
}

export default AboutContent