"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiCloudFill } from "react-icons/ri";
import { VscBug } from "react-icons/vsc";
import { TbRocket } from "react-icons/tb";

import { IoClose } from "react-icons/io5";

import Button1 from "@/components/Button1";

const services = [
    {
        id: 1,
        title: "Full Stack Solutions (MERN & Next.js)",
        icon: <FaLaptopCode className="text-5xl text-lime-600" />,
        description:
            "Your idea deserves a complete, scalable solution. I build full-stack applications using the MERN stack and Next.js — from clean UI to powerful backend systems. Every feature is designed to be fast, secure, and production-ready. Stop struggling with half-built systems. Get a full solution that works end-to-end.",
        mail: "For queries:",
        inner: 'developer@rajabali.com',
        details: [

            {
                type: "paragraph",
                text: "Are you looking for a professional full-stack developer who can build a complete, modern, and high-performance web application?",
            },
            {
                type: "paragraph",
                text: "You’re in the right place!",
            },
            {
                type: "paragraph",
                text: "I’m an experienced MERN & Next.js Full-Stack Developer passionate about building scalable, secure, and user-friendly digital products. I turn ideas into full working applications — from clean UI to powerful backend logic — all developed with modern standards.",
            },

            {
                type: "heading",
                text: "1. Tech Expertise",
            },
            {
                type: "pragraph",
                Benifit: "Frontend:",
                text: " React, Next.js, Tailwind CSS, Typescript",
            },
            {
                type: "pragraph",
                Benifit: "Backend:",
                text: " Node.js, Express.js",
            },
            {
                type: "pragraph",
                Benifit: "Database:",
                text: " MongoDB, Mongoose,MySQL",
            },
            {
                type: "pragraph",
                Benifit: "Other:",
                text: " JWT Auth, API Development, SSR/SSG, Cloud Deployment",
            },
            {
                type: "heading",
                text: "2. Services You Will Get",
            },
            {
                type: 'ul',
                List: [
                    ' Complete full-stack web application',

                    'Custom dashboard or admin panel',

                    'Authentication & authorization',

                    'REST API development',

                    'Database design & integration',

                    'Responsive UI for all devices',

                    'Clean, scalable architecture',
                ]
            },
            {
                type: "heading",
                text: "3. My Promises are:",
            },
            {
                type: 'ul',
                List: [
                    'Professional communication',

                    'Clean and maintainable code',

                    'Fast delivery',

                    'Full support until satisfaction'
                ]
            },

            {
                type: "paragraph",
                text: "When you're ready to build something great, tap “Contact Me” and let’s get started!",
            },


        ]
    },
    {
        id: 2,
        title: "API Development & Integration",
        icon: <AiOutlineApi className="text-5xl text-lime-600" />,
        description:
            "Your app needs more than a database — it needs communication. I create secure, well-structured REST APIs and integrate third-party services like payment gateways, social logins, and CRMs. No broken endpoints. No slow responses. Just reliable APIs built for real-world traffic.",
        mail: "For queries: ",
        inner: 'developer@rajabali.com',
       details: [
    {
        type: "paragraph",
        text: "Need a secure, scalable, and well-structured API for your application?",
    },
    {
        type: "paragraph",
        text: "You're in the right place!",
    },
    {
        type: "paragraph",
        text: "I specialize in building custom REST APIs and integrating third-party services with a strong focus on performance, security, validation, and clean architecture.",
    },

    {
        type: "heading",
        text: "1. Tech Expertise",
    },
    {
        type: "pragraph",
        Benifit: "Backend:",
        text: " Node.js, Express.js",
    },
    {
        type: "pragraph",
        Benifit: "Database:",
        text: " MongoDB, Firebase",
    },
    {
        type: "pragraph",
        Benifit: "Integrations:",
        text: " Stripe, PayPal, Google APIs, Auth0, OAuth",
    },
    {
        type: "pragraph",
        Benifit: "Other:",
        text: " Postman documentation, Webhooks setup",
    },

    {
        type: "heading",
        text: "2. Services You Will Get",
    },
    {
        type: "ul",
        List: [
            "Custom REST API development",
            "Third-party API integration",
            "Payment gateway setup",
            "Secure authentication & authorization",
            "API documentation",
            "Webhook integration",
            "Error handling & validation"
        ]
    },

    {
        type: "heading",
        text: "3. My Promises are:",
    },
    {
        type: "ul",
        List: [
            "Secure and clean API structure",
            "High performance endpoints",
            "Smooth integration",
            "Professional communication",
            "Full support until satisfaction"
        ]
    },

    {
        type: "paragraph",
        text: "If you need a reliable API developer, tap “Contact Me” — I’ll handle the rest!",
    },
]


    },
    {
        id: 3,
        title: "Frontend Development (React & Next.js)",
        icon: <FaReact className="text-5xl text-lime-600" />,
        description:
            "A great product starts with a great interface. I develop modern, responsive, and pixel-perfect UIs using React, Next.js, and Tailwind. Smooth interactions, fast load times, and a design system that feels premium — that’s the standard.",
        mail: "For queries: ",
        inner: 'developer@rajabali.com',
       details: [
    {
        type: "paragraph",
        text: "Looking for a modern, responsive, and visually appealing frontend for your website or web application?",
    },
    {
        type: "paragraph",
        text: "You've found the right developer!",
    },
    {
        type: "paragraph",
        text: "I craft pixel-perfect UIs using React and Next.js with a strong focus on performance, animations, accessibility, and a smooth user experience.",
    },

    {
        type: "heading",
        text: "1. Tech Expertise",
    },
    {
        type: "pragraph",
        Benifit: "UI Frameworks:",
        text: " React.js, Next.js",
    },
    {
        type: "pragraph",
        Benifit: "Styling:",
        text: " Tailwind CSS, ShadCN, Framer Motion",
    },
    {
        type: "pragraph",
        Benifit: "State Management:",
        text: " Redux, Zustand, Context API",
    },
    {
        type: "pragraph",
        Benifit: "Other:",
        text: " Responsive UI, API Integration",
    },

    {
        type: "heading",
        text: "2. Services You Will Get",
    },
    {
        type: "ul",
        List: [
            "Custom UI development",
            "Landing pages & frontend design",
            "Pixel-perfect components",
            "SSR/SSG with Next.js",
            "Animations & transitions",
            "Fully responsive layout",
            "API integration"
        ]
    },

    {
        type: "heading",
        text: "3. My Promises are:",
    },
    {
        type: "ul",
        List: [
            "Clean and reusable code",
            "Premium-level UI",
            "Fast load performance",
            "Smooth communication",
            "Support until satisfaction"
        ]
    },

    {
        type: "paragraph",
        text: "Click “Contact Me” to bring your frontend ideas to life!",
    },
]


    },
    {
        id: 4,
        title: "Backend Development (Node.js & Express)",
        icon: <FaNodeJs className="text-5xl text-lime-600" />,
        description:
            "Your backend is the brain of your application. I build scalable architectures, secure authentication, efficient APIs, and databases optimized for performance. Whether it’s a simple server or a complex multi-module system — the backend is built to last.",
        mail: "For queries: ",
        inner: 'developer@rajabali.com',
       details: [
    {
        type: "paragraph",
        text: "Need a powerful backend for your application that is fast, secure, and scalable?",
    },
    {
        type: "paragraph",
        text: "I can build it professionally.",
    },
    {
        type: "paragraph",
        text: "I develop well-structured backend systems that handle complex logic, authentication, data processing, and real-world traffic with stability and performance.",
    },

    {
        type: "heading",
        text: "1. Tech Expertise",
    },
    {
        type: "pragraph",
        Benifit: "Backend:",
        text: " Node.js, Express.js",
    },
    {
        type: "pragraph",
        Benifit: "Database:",
        text: " MongoDB, Mongoose",
    },
    {
        type: "pragraph",
        Benifit: "Security:",
        text: " JWT, Bcrypt, Role-based access",
    },
    {
        type: "pragraph",
        Benifit: "Other:",
        text: " Error handling, Logging, API Architecture",
    },

    {
        type: "heading",
        text: "2. Services You Will Get",
    },
    {
        type: "ul",
        List: [
            "Custom backend development",
            "User authentication",
            "Role-based authorization",
            "Database modeling",
            "REST API creation",
            "Middleware architecture",
            "Optimized server performance",
        ]
    },

    {
        type: "heading",
        text: "3. My Promises are:",
    },
    {
        type: "ul",
        List: [
            "Clean backend structure",
            "Secure and scalable system",
            "Fast response times",
            "Clear communication",
            "Support until satisfaction",
        ]
    },

    {
        type: "paragraph",
        text: "Click “Contact Me” — let’s build your backend correctly!",
    },
]


    },
    {
        id: 5,
        title: "Deployment & DevOps",
        icon: <RiCloudFill className="text-5xl text-lime-600" />,
        description:
            "Your app isn’t finished until it’s live. I handle deployment on Vercel, Render, DigitalOcean, and cloud servers. From environment variables to SSL, domains, routing, and CI/CD — everything is configured professionally for smooth production launches.",
        mail: "For queries:",
        inner: 'developer@rajabali.com',
       details: [
    {
        type: "paragraph",
        text: "Do you want your website or application deployed professionally and running smoothly in production?",
    },
    {
        type: "paragraph",
        text: "I’ll handle everything for you.",
    },
    {
        type: "paragraph",
        text: "From hosting setup to SSL, environment variables, CI/CD pipelines, and production builds — I ensure your project runs with speed, stability, and zero downtime.",
    },

    {
        type: "heading",
        text: "1. Platforms I Work On",
    },
    {
        type: "pragraph",
        Benifit: "Hosting:",
        text: " Vercel, Netlify, Render, DigitalOcean",
    },
    {
        type: "pragraph",
        Benifit: "Automation:",
        text: " GitHub Actions, CI/CD pipelines",
    },
    {
        type: "pragraph",
        Benifit: "Setup:",
        text: " Domains, SSL, Env Variables, Build Optimization",
    },

    {
        type: "heading",
        text: "2. Services You Will Get",
    },
    {
        type: "ul",
        List: [
            "Frontend deployment",
            "Backend deployment",
            "Environment configuration",
            "CI/CD pipeline setup",
            "Domain & SSL setup",
            "Server optimization",
            "Production build support"
        ]
    },

    {
        type: "heading",
        text: "3. My Promises are:",
    },
    {
        type: "ul",
        List: [
            "Professional deployment",
            "Zero downtime setup",
            "Secure configuration",
            "Smooth communication",
            "Post-deployment support"
        ]
    },

    {
        type: "paragraph",
        text: "Hit “Contact Me” to deploy your project professionally!",
    },
]


    },
    {
        id: 6,
        title: "Bug Fixing & Code Debugging",
        icon: <VscBug className="text-5xl text-lime-600" />,
        description:
            "Errors slow you down — I fix them. From broken components to server crashes, UI glitches, and logic issues, I trace problems to their source and solve them cleanly. Clean fixes. Better stability. Zero headaches.",
        mail: "For queries: ",
        inner: 'developer@rajabali.com',
      details: [
    {
        type: "paragraph",
        text: "Stuck with bugs, errors, or unexpected behavior in your website or application?",
    },
    {
        type: "paragraph",
        text: "You're in safe hands — I fix issues quickly and professionally.",
    },
    {
        type: "paragraph",
        text: "I identify the root cause of bugs and fix them permanently without affecting other functionality. Your project will run smoother and error-free.",
    },

    {
        type: "heading",
        text: "1. Expertise",
    },
    {
        type: "pragraph",
        Benifit: "Frontend Bugs:",
        text: " React, Next.js, CSS, Responsive issues",
    },
    {
        type: "pragraph",
        Benifit: "Backend Bugs:",
        text: " Node.js, Express.js",
    },
    {
        type: "pragraph",
        Benifit: "API Issues:",
        text: " Authentication, Database errors, Data fetching",
    },

    {
        type: "heading",
        text: "2. Services You Will Get",
    },
    {
        type: "ul",
        List: [
            "UI/UX bug fixing",
            "API & server bug fixing",
            "Authentication issues",
            "Database bugs",
            "Performance-related bugs",
            "Debugging tools setup",
            "Code refactoring",
        ]
    },

    {
        type: "heading",
        text: "3. My Promises are:",
    },
    {
        type: "ul",
        List: [
            "Quick and accurate fixes",
            "Clean code updates",
            "Clear explanations",
            "Smooth communication",
            "Support until the issue is fully resolved"
        ]
    },

    {
        type: "paragraph",
        text: "Click “Contact Me” — let’s fix your project the right way!",
    },
]


    },
    {
        id: 7,
        title: "Speed & Performance Optimization",
        icon: <TbRocket className="text-5xl text-lime-600" />,
        description:
            "A slow website loses users instantly. I optimize loading speed, improve Lighthouse scores, fix layout shifts, compress assets, and enhance backend performance. Your site becomes faster, smoother, and ready to handle real traffic.",
        mail: "For queries:"
        ,
        inner: 'developer@rajabali.com',
       details: [
    {
        type: "paragraph",
        text: "Is your website slow, laggy, or taking too long to load?",
    },
    {
        type: "paragraph",
        text: "I can make it fast, optimized, and smooth.",
    },
    {
        type: "paragraph",
        text: "I improve both frontend and backend performance so your website loads faster, ranks higher, and offers a seamless user experience.",
    },

    {
        type: "heading",
        text: "1. What I Optimize",
    },
    {
        type: "pragraph",
        Benifit: "Frontend:",
        text: " Bundle size, Images, CSS, JS, Layout Shifts",
    },
    {
        type: "pragraph",
        Benifit: "Backend:",
        text: " API response time, Database queries",
    },
    {
        type: "pragraph",
        Benifit: "Core Web Vitals:",
        text: " LCP, CLS, FID improvements",
    },

    {
        type: "heading",
        text: "2. Services You Will Get",
    },
    {
        type: "ul",
        List: [
            "Performance audit",
            "Lighthouse score improvements",
            "Code optimization",
            "Lazy loading & code splitting",
            "Image compression",
            "API optimization",
            "Database query optimization"
        ]
    },

    {
        type: "heading",
        text: "3. My Promises are:",
    },
    {
        type: "ul",
        List: [
            "Noticeable speed improvements",
            "Better SEO results",
            "Optimized backend & frontend",
            "Professional performance-focused work",
            "Support until satisfaction"
        ]
    },

    {
        type: "paragraph",
        text: "Click “Contact Me” and let’s make your website lightning fast!",
    },
]


    },

];

const Servces = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <>
            {/* === Services Grid === */}
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-[#1f1d1d] rounded-4xl md:h-[370px] p-4 md:p-6 hover:scale-[1.02] transition-all duration-300"
                    >
                        <div>
                            <div className="bg-[#2a2828] inline-block p-1.5 rounded-xl">
                                {service.icon}
                            </div>
                            <h2 className="font-bold text-xl md:text-2xl py-1">{service.title}</h2>
                        </div>

                        <p className=" md:h-26 overflow-hidden mt-7 text-gray-500 ">
                            {service.description}
                        </p>
                        <p className="  pt-1 text-gray-400">{service.mail} <span className="text-lime-600">{service.inner}</span></p>
                        <div className="mt-3">
                            <Button1
                                onClick={() => setSelectedService(service)}
                                text="Explore more"
                                type="button"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* === Popup Modal with Animation === */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
                    >
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 50 }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            className="bg-[#1f1d1d] w-[90vw] h-[90vh] md:w-[80vw] md:h-[80vh] rounded-xl p-5 md:p-8 relative custom-scrollbar shadow-xl overflow-y-auto"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 bg-[#2a2828] hover:bg-lime-600 transition-all p-2 rounded-full text-white"
                            >
                                <IoClose className="text-2xl" />
                            </button>

                            {/* Popup Content */}
                            <div className="flex flex-col items-start mt-6">
                                <div className="bg-[#2a2828] inline-block p-2 rounded-xl mb-3 md:mb-4">
                                    {selectedService.icon}
                                </div>
                                <h2 className="md:text-3xl text-xl font-semibold mb-2 text-lime-600">
                                    {selectedService.title}
                                </h2>
                                <div>
                                    {selectedService.details.map((block, index) => {
                                        if (block.type === "heading")
                                            return (
                                                <h1 key={index} className="text-xl md:text-2xl font-semibold mt-4 mb-2 text-lime-600">
                                                    {block.text}
                                                </h1>
                                            );

                                        if (block.type === "ul")
                                            return (
                                                <ul key={index} className="list-disc ml-6 mb-3 text-gray-400">
                                                    {block.List.map((item, idx) => (
                                                        <li key={idx} className="mb-1">{item}</li>
                                                    ))}
                                                </ul>
                                            );

                                        if (block.type === "pragraph")
                                            return (
                                                <p key={index} className="text-gray-400 mb-3 leading-relaxed">
                                                    <span className="text-white font-semibold text-lg">{block?.Benifit}</span> {block.text}
                                                </p>
                                            );

                                        if (block.type === "paragraph")
                                            return (
                                                <p key={index} className="text-gray-400 text-lg mb-3 leading-relaxed">
                                                    {block.text}
                                                </p>
                                            );

                                        if (block.type === "item")
                                            return (
                                                <li key={index} className="text-gray-400 mb-1 ml-6 list-disc">
                                                    {block.text}
                                                </li>
                                            );

                                        return null;
                                    })}


                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Servces;
