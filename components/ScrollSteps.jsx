"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Discovery Phase",
    desc: "During this initial stage, we delve deep into understanding your business goals, target audience, and market landscape. We conduct thorough research and analysis to identify opportunities and challenges, laying the foundation for a successful campaign.",
  },
  {
    step: "02",
    title: "Strategy Development",
    desc: "With insights gathered from the discovery phase, we develop a customized strategy tailored to your specific needs and objectives. This plan outlines key tactics, channels, and timelines to achieve your goals effectively.",
  },
  {
    step: "03",
    title: "Implementation and Execution",
    desc: "Once the strategy is approved, we roll up our sleeves and put the plan into action. Our expert team executes with precision — from SEO optimization to captivating design and social media content.",
  },
  {
    step: "04",
    title: "Monitoring and Optimization",
    desc: "Continuous monitoring and optimization are essential to ensuring the success and effectiveness of our campaigns. We closely track key performance indicators (KPIs) and metrics, analyzing data to identify areas for improvement and making necessary adjustments to optimize results. This iterative process allows us to adapt to changes in the market and maximize the return on your investment.",
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
            className="w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/60 to-transparent shadow-[0_0_25px_4px_#10b981]"
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
                <div className="relative text-6xl font-extrabold text-emerald-400 select-none">
                  <span className="relative z-10">{item.step}</span>
                  <div className="absolute inset-0 blur-2xl bg-emerald-500 opacity-50"></div>
                </div>
              </div>

              {/* 🟢 Step Box (Right side of line) */}
              <div className="ml-5 md:ml-[35%] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] p-8 md:w-[60%] rounded-2xl shadow-lg border border-emerald-500/10">
                <p className="md:text-xl text-lg font-black inline-block uppercase bg-slate-900 px-3 py-1 rounded-full tracking-widest text-emerald-500 mb-2">
                  Step {item.step}
                </p>
                <h3 className="text-2xl font-extrabold  mb-3">{item.title}</h3>
                <p className="text-gray-500 md:text-lg leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
