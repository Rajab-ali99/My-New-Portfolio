"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Discovery & Insight",
    desc: "We start by deeply understanding your trading psychology (with DYOR), business vision, target audience, and competitive landscape. Through meticulous research and analysis, we identify unique opportunities and challenges — laying a strong, insight-driven foundation tailored to your goals.",
  },
  {
    step: "02",
    title: "Customized Strategy",
    desc: "Guided by these insights, we design a bespoke strategy that aligns perfectly with your objectives. Every tactic, channel, and timeline is strategically chosen to create maximum impact and measurable growth.",
  },
  {
    step: "03",
    title: "Precision Execution",
    desc: "Our expert team turns strategy into action with creativity and accuracy. From advanced strategies and compelling content to dynamic design and targeted campaigns, we execute each step with the highest standards of quality and innovation.",
  },
  {
    step: "04",
    title: "Continuous Optimization & Growth",
    desc: "True success is an evolving journey. We continuously monitor key metrics, analyze performance data, and fine-tune campaigns — ensuring agility, adaptability, and sustained growth. Your success is our ongoing commitment.",
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
