'use client'
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "framer-motion";
import Button from "./Button";
import { useEffect, useState } from "react";
import Image from "next/image";
const middleRingImages = [
    "/assets/Hero/1.jpeg",
    "/assets/Hero/2.jpeg",
    "/assets/Hero/3.jpeg",
    "/assets/Hero/4.jpeg",
    "/assets/Hero/5.jpeg",
    "/assets/Hero/6.jpeg",
    "/assets/Hero/7.jpeg",
    "/assets/Hero/8.jpeg",
    "/assets/Hero/9.jpeg",
    "/assets/Hero/10.jpeg",
    "/assets/Hero/11.jpeg",
    "/assets/Hero/12.jpeg",
    "/assets/Hero/13.jpeg",
    "/assets/Hero/14.jpeg",
    "/assets/Hero/15.jpeg",
    "/assets/Hero/16.jpeg",
    "/assets/Hero/17.jpeg",
    "/assets/Hero/18.jpeg",
    "/assets/Hero/19.jpeg",
    "/assets/Hero/20.jpeg",
];
const innerRingImages = [
    "/assets/Hero/1.jpeg",
    "/assets/Hero/2.jpeg",
    "/assets/Hero/3.jpeg",
    "/assets/Hero/4.jpeg",
    "/assets/Hero/5.jpeg",
    "/assets/Hero/6.jpeg",
    "/assets/Hero/7.jpeg",
    "/assets/Hero/8.jpeg",
    "/assets/Hero/9.jpeg",
    "/assets/Hero/10.jpeg",
    "/assets/Hero/11.jpeg",
    "/assets/Hero/12.jpeg",
    "/assets/Hero/13.jpeg",
    "/assets/Hero/14.jpeg",
    "/assets/Hero/15.jpeg",
];
export default function HerroSection() {
    const scrollRotation = useMotionValue(0);
    const baseRotation = useMotionValue(0);
    const [translateValue, setTranslateValue] = useState(240);
    const [translateValueMD, setTranslateValueMD] = useState(370);

    useEffect(() => {
        const handleResize = () => {
            setTranslateValue(window.innerWidth >= 768 ? 440 : 240); // md breakpoint
            setTranslateValueMD(window.innerWidth >= 768 ? 570 : 370); // md breakpoint
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const smoothScrollRotate = useSpring(useTransform(scrollRotation, (r) => r % 360), {
        stiffness: 40,
        damping: 18,
        mass: 0.9,
    });

    useAnimationFrame((t) => {
        baseRotation.set((t / 1000) * 3);
    });

    useEffect(() => {
        let lastY = window.scrollY;
        const handleScroll = () => {
            const currentY = window.scrollY;
            const diff = currentY - lastY;
            scrollRotation.set(scrollRotation.get() + diff * 0.02);
            lastY = currentY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollRotation]);

    const combinedRotation = useTransform(
        [baseRotation, smoothScrollRotate],
        ([base, scroll]) => base + scroll
    );

    return (
        <div className="relative md:h-[115vh] h-[100vh] flex items-center justify-center min-h-screen overflow-hidden bg-[#0a1412]">
            {/* 🌈 Radial background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,90,70,1)_0%,rgba(0,60,50,1)_40%,rgba(40,20,25,1)_85%,rgba(80,10,10,1)_100%)] pointer-events-none"></div>

            {/* 🌫️ Top-to-bottom gradient overlay */}
            <div className="absolute z-20 inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

            {/* 🌀Outer Rings */}
            <motion.div
                style={{ rotate: combinedRotation }}
                className="absolute w-[1100px] h-[1100px] rounded-full flex items-center justify-center pointer-events-none"
            >
                {Array.from({ length: 40 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-34 h-34 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white "
                        style={{
                            transform: `rotate(${(i * 360) / 25}deg) translate(710px) rotate(-${(i * 360) / 25}deg)`,
                        }}
                    />
                ))}
            </motion.div>
            {/* 🌀Middle Rings */}
            <motion.div
                style={{ rotate: useTransform(combinedRotation, (r) => -r) }}
                className="absolute w-[750px] h-[750px] rounded-full flex items-center justify-center pointer-events-none"
            >
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute flex items-center justify-center"
                        style={{
                            transform: `rotate(${(i * 360) / 20}deg) translate(${translateValueMD}px) rotate(-${(i * 360) / 20}deg)`,
                        }}
                    >
                        <Image
                            src={middleRingImages[i % middleRingImages.length]}
                            alt={`middle-ring-${i}`}
                            width={110}
                            height={110}
                            className="rounded-full border border-white/20 object-contain shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* 🌀Inner Rings */}
            <motion.div
                style={{ rotate: combinedRotation }}
                className="absolute w-[450px] h-[450px] rounded-full flex items-center justify-center pointer-events-none"
            >
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute flex items-center justify-center"
                        style={{
                            transform: `rotate(${(i * 360) / 15}deg) translate(${translateValue}px) rotate(-${(i * 360) / 15}deg)`,
                        }}
                    >
                        <Image
                            src={innerRingImages[i % innerRingImages.length]}
                            alt={`inner-ring-${i}`}
                            width={80}
                            height={80}
                            className="rounded-full border border-white/20 object-cover shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                        />
                    </motion.div>
                ))}
            </motion.div>


            {/* 🎯 Center content */}
            <div className="z-30 text-center max-w-3xl px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    Design. Develop. Market. Grow.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.35, ease: "easeOut" }}
                    className="text-gray-300 text-lg mb-8"
                >
                    Your one-stop agency for web development, SEO, and digital marketing success.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.3, ease: "easeOut" }}
                >
                    <Button text="Discover how" type="button" />
                </motion.div>
            </div>
        </div>
    );
}
