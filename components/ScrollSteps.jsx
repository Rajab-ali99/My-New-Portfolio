"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    sideNo:'01',
    step: "1",
    title: "Discovery & Insight",
    desc: "I begin by understanding your goals, ideas, and the problem you’re trying to solve. This includes analyzing your vision, target users, and the core functionality your project needs. Through discussions and research, I identify opportunities, refine requirements, and build a strong foundation to ensure the final product aligns perfectly with your expectations.",
  },
  {
    sideNo:'02',
    step: "2",
    title: "Planning & Architecture",
    desc: "Once the concept is clear, I plan the structure of the application.This stage includes creating the project architecture, designing user flows, selecting the right technologies and outlining the entire development roadmap. A well-structured plan ensures the project is smooth, scalable, and future-ready.",
  },
  {
    sideNo:'03',
    step: "3",
    title: "Development & Execution",
    desc: "Here, the real building begins.I transform ideas into clean, efficient, and reliable code — developing the frontend, backend, API integrations, database structure, and responsive UI/UX components. Throughout development, I focus on performance, security, and scalability to ensure a seamless user experience across all devices.",
  },
  {
    sideNo:'04',
    step: "4",
    title: "Testing, Delivery & Support",
    desc: "Before launching, the application undergoes thorough testing, including functionality checks, performance optimization, responsiveness, and bug fixing.Once everything is polished and ready, the final product is delivered with full deployment support. Even after launch, I provide ongoing assistance to ensure the application runs smoothly and continues to grow with your business needs.",
  },
];

export default function ScrollSteps() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[#0a0a0a] text-white py-12 overflow-hidden"
    >
      <div className="md:max-w-6xl mx-auto md:px-6 md:px-10 relative">
        {/* 🟢 Vertical Glowing Line */}
        <div className="absolute left-0 md:left-[30%] top-0 h-full flex justify-center">
          <motion.div
            style={{ height: lineHeight }}
            className="w-[2px] bg-gradient-to-b from-lime-500 via-lime-600/70 to-transparent shadow-[0_0_25px_4px_#84cc16]"
          />
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-48">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative flex items-center"
            >
              {/* 🔵 Step Number (left side, glowing) */}
              <div className="absolute left-0 md:left-[27%] flex flex-col items-center">
                <div className="relative text-4xl md:text-6xl font-bold text-lime-500 select-none">
                  <span className="relative z-10">{item.sideNo}</span>
                  <div className="absolute inset-0 blur-2xl bg-lime-500 opacity-50"></div>
                </div>
              </div>

              {/* 🟢 Step Box (Right side of line) */}
              <div className="ml-5 md:ml-[35%] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] p-8 md:w-[60%] rounded-2xl shadow-lg border border-emerald-500/10">
                <p className="md:text-xl text-lg font-semibold inline-block uppercase bg-lime-600 px-3 py-1 rounded-full tracking-widest text-white mb-2">
                  Step {item.step}
                </p>
                <h3 className="text-xl font-bold  mb-3">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm font-medium  ">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
